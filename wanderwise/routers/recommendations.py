from typing import List
from fastapi import APIRouter
import requests
from models.recommendations import RecommendationIn, RecommendationSaveIn, RecommendationSaveOut
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
import os

router = APIRouter()

KEY= os.environ["API_KEY"]


@router.post("/recommendations", tags=["Recommendations"])
async def post_recommendation(info: RecommendationIn):
    response = requests.post(
        "https://api.openai.com/v1/chat/completions",
        headers={
            "Content-type": "application/json",
            "Authorization": f"Bearer {KEY}"
        },
        json={
                "model": "gpt-3.5-turbo",
                "messages": [
                    {
                        "role": "assistant",
                        "content": f"Give me recommendations to do at {info.location} based on {info.interest}"
                }
            ]
        }
    )
    recommendations = response.json()["choices"][0]["message"]["content"].strip().split("\n")
    return {"recommendations": recommendations}


@router.post("/recommendations/", tags=["Recommendations"], response_model=RecommendationSaveOut)
async def save_recommendation(
    info: RecommendationSaveIn,
    recommendation: RecommendationQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
):
    return recommendation.create(info, account_id=account_data["id"])


@router.get("/recommendations/", tags=["Recommendations"], response_model=List[RecommendationSaveOut])
async def list_recommendation(
    account_data: dict = Depends(authenticator.get_current_account_data),
    recommendation: RecommendationQueries = Depends()
):
    return recommendation.get(account_id=account_data["id"])


@router.get("/recommendations/{id}", tags=["Recommendations"], response_model=RecommendationSaveOut)
async def detail_recommendation(
    id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    recommendation: RecommendationQueries = Depends()
):
    return recommendation.get_one(id, account_id=account_data["id"])


@router.delete("/recommendations/{id}", tags=["Recommendations"], response_model=DeleteStatus)
async def delete_recommendation(
    id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    recommendation: RecommendationQueries = Depends()
                                ):
    return {"success": recommendation.delete(id, account_id=account_data['id'])}
