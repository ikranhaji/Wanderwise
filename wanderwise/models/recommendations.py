from pydantic import BaseModel


class RecommendationIn(BaseModel):
    location: str
    interest: str


class RecommendationSaveIn(RecommendationIn):
    recommendations: str


class RecommendationSaveOut(RecommendationSaveIn):
    id: str
