from pydantic import BaseModel
from pymongo.errors import DuplicateKeyError
from queries.client import MongoQueries
from bson.objectid import ObjectId

from models.auth import (
    AccountOutWithPassword,
    DuplicateAccountError,
    AccountOut,
    AccountIn,
)


class AccountQueries(MongoQueries):
    collection_name = "accounts"

    def get(self, username: str) -> AccountOutWithPassword:
        account = self.collection.find_one({"username": username})
        if not account:
            return None
        account["id"] = str(account["_id"])
        return AccountOut(**account)

    def create(self, info: AccountIn, password: str) -> AccountOutWithPassword:
        account = info.dict()
        if self.get(account["username"]):
            raise DuplicateAccountError()
        account["hashed_password"] = password
        result = self.collection.insert_one(account)
        if result.inserted_id:
            account["id"] = str(result.inserted_id)
        return AccountOut(**account)

    def delete(self, account_id: str):
        results = self.collection.delete_one({"_id": ObjectId(account_id)})
        return results.deleted_count > 0
