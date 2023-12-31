from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)

from authenticator import authenticator

from models.auth import (
    AccountToken,
    AccountOut,
    AccountIn,
    AccountForm,
    DuplicateAccountError,
    HttpError,
    DeleteStatus,
)
from queries.accounts import AccountQueries


router = APIRouter()


@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: AccountOut = Depends(authenticator.try_get_current_account_data),
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


@router.post("/api/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    accounts: AccountQueries = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    try:
        account = accounts.create(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(username=info.username, password=info.password)
    token = await authenticator.login(response, request, form, accounts)
    return AccountToken(account=account, **token.dict())


@router.delete("/api/accounts/{account_id}", response_model=DeleteStatus)
def delete_account(
    accounts: AccountQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return {"success": accounts.delete(account_id=account_data["id"])}
