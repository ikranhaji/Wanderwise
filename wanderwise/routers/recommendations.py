from fastapi import APIRouter
import requests

router = APIRouter()

@router.post("/recommendations", tags=["Recommendations"])
async def post_recommendation():
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
                        "content": "Give us recommendations to do at Las Vegas based on food"
                }
            ]
        }
    )
    recommendations = response.json()["choices"][0]["message"]["content"]
    return {"recommendations": recommendations}
