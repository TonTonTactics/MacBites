""" Table functions

Gives the ability to add to, take from, or delete from a table

Antony Wiegand, McMaster, 2026"""

from sqlmodel import Session, select, delete
from datetime import date

from . import models
from . import db

def vote(food_id: int, rating_value: int, token: str):
    """User votes Upvote or Downvote"""
    with Session(db.engine) as session:

        existing_vote = session.exec(
            select(models.Ratings).where(
                models.Ratings.food_id == food_id,
                models.Ratings.token == token
            )
        ).first()

        if existing_vote:
            existing_vote.rating = rating_value
            session.add(existing_vote)
            session.commit()
            session.refresh(existing_vote)

            return {
                "success": True,
                "message": "Vote updated successfully",
                "rating": existing_vote.rating
            }
        
        new_vote = models.Ratings(
            food_id=food_id,
            token=token,
            rating=rating_value
        )
        session.add(new_vote)
        session.commit()
        session.refresh(new_vote)

        return {
            "success": True,
            "message": "Vote created successfully",
            "rating": new_vote.rating
        }

def select_bite(id: int):
    with Session(db.engine) as session:
        statement = select(models.Bites).where(models.Bites.id == id)
        results = session.exec(statement)
        bite = results.first()
        return bite

def delete_rating(date: date):
    with Session(db.engine) as session:
        statement = delete(models.Ratings).where(
            models.Ratings.created_at < date
            )
        
        session.exec(statement)
        session.commit()

        return {
            "success": True,
            "message": "Tokens deleted successfully"
        }