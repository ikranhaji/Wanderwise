from pydantic import BaseModel


class RecommendationIn(BaseModel):
    location: str
    interest: str


class RecommendationSaveIn(RecommendationIn):
    recommendations: str
    image: str


class RecommendationSaveOut(RecommendationSaveIn):
    id: str
