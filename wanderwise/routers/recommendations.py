from typing import List
from fastapi import APIRouter
import requests
from models.recommendations import (
    RecommendationIn,
    RecommendationSaveIn,
    RecommendationSaveOut,
)
from models.auth import DeleteStatus
from queries.recommendations import RecommendationQueries
from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from authenticator import authenticator

router = APIRouter()


@router.post("/recommendations", tags=["Recommendations"])
async def post_recommendation(info: RecommendationIn):
    response = requests.post(
        "https://api.openai.com/v1/chat/completions",
        headers={
            "Content-type": "application/json",
            "Authorization": "Bearer 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",
        },
        json={
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "assistant",
                    "content": f"Give me recommendations to do at {info.location} based on {info.interest}",
                }
            ],
        },
    )
    recommendations = (
        response.json()["choices"][0]["message"]["content"].strip().split("\n")
    )
    print(recommendations)
    return {
        "recommendations": recommendations,
        "location": info.location,
        "interest": info.interest,
    }


@router.post(
    "/recommendations/",
    tags=["Recommendations"],
    response_model=RecommendationSaveOut,
)
async def save_recommendation(
    info: RecommendationSaveIn,
    recommendation: RecommendationQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    print(account_data)
    return recommendation.create(info, account_id=account_data["id"])


@router.get(
    "/recommendations/",
    tags=["Recommendations"],
    response_model=List[RecommendationSaveOut],
)
async def list_recommendation(
    # request: Request,
    account_data: dict = Depends(authenticator.get_current_account_data),
    recommendation: RecommendationQueries = Depends(),
):
    return recommendation.get(account_id=account_data["id"])


# @router.get("/recommendations_one/")
# async def list_recommendation(
#     # request: Request,
#     recommendation: RecommendationQueries = Depends()
# ):
#     return recommendation.get_one()


@router.get(
    "/recommendations/{id}",
    tags=["Recommendations"],
    response_model=RecommendationSaveOut,
)
async def detail_recommendation(
    id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    recommendation: RecommendationQueries = Depends(),
):
    return recommendation.get_one(id, account_id=account_data["id"])


@router.delete(
    "/recommendations/{id}",
    tags=["Recommendations"],
    response_model=DeleteStatus,
)
async def delete_recommendation(
    id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    recommendation: RecommendationQueries = Depends(),
):
    return {
        "success": recommendation.delete(id, account_id=account_data["id"])
    }
