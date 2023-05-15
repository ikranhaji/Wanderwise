from pymongo import MongoClient
import os

MONGO_DB = os.environ.get("DATABASE_NAME", "")

client = MongoClient(os.environ.get("DATABASE_URL", ""))
db = client[MONGO_DB]


class MongoQueries:
    @property
    def collection(self):
        return db[self.collection_name]
