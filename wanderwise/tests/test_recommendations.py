from fastapi.testclient import TestClient
from main import app
from models.recommendations import RecommendationSaveIn
from queries.recommendations import RecommendationQueries
from authenticator import authenticator

client = TestClient(app)


class FakeRecommendationsQuery:
    def create(self, info: RecommendationSaveIn, account_id: str):
        return {
            "location": "Minneapolis",
            "interest": "food",
            "recommendations": "blah blah",
            "id": "124",
            "image": "12341235424536"
        }

    def get(self, account_id: str):
        return []

    def get_one(self, recommendation_id: str, account_id: str):
        return {
            "location": "Minneapolis",
            "interest": "food",
            "recommendations": "blah blah",
            "id": "21",
            "image": "12341235424536"
        }

    def delete(self, recommendation_id: str, account_id: str):
        return True


def fake_get_current_account_data():
    return {"id": "124"}


def test_post_recommendation():
    info = {"location": "LA", "interest": "food"}
    response = client.post("/recommendations", json=info)
    data = response.json()

    assert response.status_code == 200
    assert len(data["recommendations"]) > 0


def test_save_recommendation():
    app.dependency_overrides[RecommendationQueries] = FakeRecommendationsQuery
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    info = {
        "location": "Minneapolis",
        "interest": "food",
        "recommendations": "blah blah",
        "image": "12341235424536"
    }

    response = client.post("/recommendations/", json=info)
    data = response.json()

    assert response.status_code == 200
    assert data == {
        "location": "Minneapolis",
        "interest": "food",
        "recommendations": "blah blah",
        "id": "124",
        "image": "12341235424536"
    }


def test_list_recommendation():
    # Arrange
    app.dependency_overrides[RecommendationQueries] = FakeRecommendationsQuery
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    # Act
    response = client.get("/recommendations/")
    data = response.json()

    # Assert
    assert response.status_code == 200
    assert data == []


def test_detail_recommendation():
    app.dependency_overrides[RecommendationQueries] = FakeRecommendationsQuery
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    response = client.get("/recommendations/21")
    data = response.json()

    assert response.status_code == 200
    assert data["id"] == "21"


def test_delete_recommendation():
    app.dependency_overrides[RecommendationQueries] = FakeRecommendationsQuery
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    response = client.delete("/recommendations/36")
    data = response.json()

    assert response.status_code == 200
    assert data == {"success": True}
