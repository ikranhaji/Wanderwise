from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from authenticator import authenticator
from routers import accounts, recommendations


app = FastAPI()
app.include_router(authenticator.router)
app.include_router(accounts.router)
app.include_router(recommendations.router)


@app.get("/")
def home():
    return "Welcome"


app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
