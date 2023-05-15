from pydantic import BaseModel
from pymongo.errors import DuplicateKeyError
from queries.client import MongoQueries


class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    username: str
    password: str
    full_name: str


class AccountOut(BaseModel):
    id: str
    username: str
    full_name: str
    password: str


class AccountOutWithPassword(AccountOut):
    password: str


class AccountQueries(MongoQueries):
    collection_name = "accounts"

    def get(self, username: str) -> AccountOutWithPassword:
        props = self.collection.find_one({"username": username})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return AccountOut(**props)

    def create(self, info: AccountIn, password: str) -> AccountOutWithPassword:
        props = info.dict()
        props["password"] = password
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        props["id"] = str(props["_id"])
        return AccountOut(**props)
