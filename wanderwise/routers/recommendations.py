from fastapi import APIRouter
import requests
from models.recommendations import RecommendationIn

router = APIRouter()

@router.post("/recommendations", tags=["Recommendations"])
async def post_recommendation(info: RecommendationIn):
    response = requests.post(
        "https://api.openai.com/v1/chat/completions",
        headers = {
            "Content-type": "application/json",
            "Authorization": "Bearer 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"
        },
        json = {
                "model": "gpt-3.5-turbo",
                "messages": [
                    {
                        "role": "assistant",
                        "content": f"Give me recommendations to do at {info.location} based on {info.interest}"
                }
            ]
        }
    )
    recommendations = response.json()["choices"][0]["message"]["content"]
    return {"recommendations": recommendations}
