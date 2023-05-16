from pydantic import BaseModel
from pymongo.errors import DuplicateKeyError
from queries.client import MongoQueries


class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    username: str
    password: str
    full_name: str


class AccountOut(BaseModel):
    id: str
    username: str
    full_name: str
    hashed_password: str


class AccountOutWithPassword(AccountOut):
    hashed_password: str


class AccountQueries(MongoQueries):
    collection_name = "accounts"

    def get(self, username: str) -> AccountOutWithPassword:
        account = self.collection.find_one({"username": username})
        if not account:
            return None
        account["id"] = str(account["_id"])
        return AccountOut(**account)

    def create(self, info: AccountIn, password: str) -> AccountOutWithPassword:
        account = info.dict()
        if self.get(account["username"]):
            raise DuplicateAccountError()
        account["hashed_password"] = password
        result = self.collection.insert_one(account)
        if result.inserted_id:
            account["id"] = str(result.inserted_id)
        return AccountOut(**account)
