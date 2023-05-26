from fastapi.testclient import TestClient
from main import app, recommendations
from models.recommendations import RecommendationSaveIn
from queries.recommendations import RecommendationQueries

client = TestClient(app)

class FakeRecommendationsQuery():
    def create(self, info: RecommendationSaveIn):
        return {
            "recommendations": []
        }

def fake_recommendation():
    return {"recommendations": []}


def test_post_recommendation():
    # app.dependency_overrides[RecommendationQueries] = FakeRecommendationsQuery
    info = {
        "location": "LA",
        "interest": "food"
    }
    response = client.post("/recommendations", json=info)
    data = response.json()


    assert response.status_code == 200
    assert len(data["recommendations"]) > 0
