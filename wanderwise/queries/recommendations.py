from queries.client import MongoQueries
from bson.objectid import ObjectId

from models.recommendations import (
    RecommendationSaveIn,
    RecommendationSaveOut
)


class RecommendationQueries(MongoQueries):
    collection_name = "recommendations"

    def get(self, username: str) -> RecommendationSaveOut:
        recommendations = []
        for recommendation in self.collection.find({"username": username}):
            recommendation["id"] = str(recommendation["_id"])
            recommendations.append(RecommendationSaveOut(**recommendation))
        return recommendations

    # def get_one(self) -> RecommendationSaveOut:
    #     pipeline = [
    #         {'$match': {'location': 'NYC'}},
    #         {
    #             '$lookup': {
    #                 'from': 'accounts',
    #                 'localField': 'account_id',
    #                 'foreignField': '_id',
    #                 'as': 'account_id'
    #             }
    #         }, {
    #             '$addFields': {
    #                 'account_id': {
    #                     '$map': {
    #                         'input': '$account_id',
    #                         'as': 'account',
    #                         'in': {
    #                             'username': '$$account.username',
    #                             'name': '$$account.full_name',
    #                             'id': '$$account._id'
    #                         }
    #                     }
    #                 }
    #             }
    #         }
    #     ]
    #     response = self.collection.aggregate(pipeline)
    #     for doc in response:
    #         doc['id'] = str(doc["_id"])
    #         doc["account_id"] = str(doc["account_id"])
    #         return  RecommendationSaveOut(**doc)

    def create(self, info: RecommendationSaveIn, account_id: str) -> RecommendationSaveOut:
        recommendation = info.dict()
        recommendation["account_id"] = account_id
        result = self.collection.insert_one(recommendation)
        if result.inserted_id:
            recommendation["id"] = str(result.inserted_id)
        return RecommendationSaveOut(**recommendation)

    def delete(self, recommendation_id: str):
        results = self.collection.delete_one({"_id": ObjectId(recommendation_id)})
        return results.deleted_count > 0

    def get_one(self, recommendation_id: str, account_id: str):
        recommendation_id = ObjectId(recommendation_id)
        result = self.collection.find_one(
            {"_id": recommendation_id,
             "account_id" : account_id
             }
        )
        if result is not None:
            result["id"] = str(result["_id"])
            del result["_id"]
        return result
