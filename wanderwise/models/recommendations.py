from pydantic import BaseModel

class RecommendationIn(BaseModel):
    location: str
    interest: str
