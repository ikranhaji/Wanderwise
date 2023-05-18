from pydantic import BaseModel

class RecommendationIn(BaseModel):
    location: str
    interest: str
    # account_id: str

class RecommendationSaveIn(RecommendationIn):
    recommendations: str

class RecommendationSaveOut(RecommendationSaveIn):
    id: str
