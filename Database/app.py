""" Event to function connector

Connects Table Functions with FastAPI events.

Antony Wiegand, McMaster, 2026"""

from fastapi import FastAPI, Request, Response, HTTPException
from datetime import date
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import uuid

from . import db
from . import relations
from . import models

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# RUN python -m Database.app (from outside of Database folder)

@app.on_event("startup")
def on_startup():

    db.create_db_and_tables()     # lets us use python -m Database.app without side effects from importing

@app.put("/bites/{id}")

def put_bite(id: int, bite: models.CreateRating, request: Request, response: Response):
    token=request.cookies.get("visitor_token")

    if not token:
        token = str(uuid.uuid4())
        response.set_cookie("visitor_token", token)

    relations.vote(id, bite.rating, token)

@app.get("/bites/{id}")
def get_bites(id: int):
    return relations.select_bite(id)

@app.get("/ranked-bites/{rank}")
def get_ranked_bites(rank: int):
    return relations.select_ranked_bites(rank)

@app.get("/recent-bites/{index}")
def get_recent_bite(index: int):
    return relations.select_recent_bites(index)
    

@app.delete("/ratings/")
def delete_rating(date: date):
    return relations.delete_rating(date)

# allows for running python -m Database.app
if __name__ == "__main__":
    uvicorn.run("Database.app:app", reload= True)