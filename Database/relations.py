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

        bite = session.get(models.Bites, food_id)

        existing_vote = session.exec(
            select(models.Ratings).where(
                models.Ratings.food_id == food_id,
                models.Ratings.token == token
            )
        ).first()

        if existing_vote:
            # ✅ calculate difference
            diff = rating_value - existing_vote.rating

            existing_vote.rating = rating_value
            session.add(existing_vote)

            # ✅ update bite score
            if bite:
                bite.rating = (bite.rating or 0) + diff
                session.add(bite)

            session.commit()
            session.refresh(existing_vote)

            return {
                "success": True,
                "message": "Vote updated successfully",
                "rating": bite.rating if bite else existing_vote.rating
            }
        
        # ✅ new vote
        new_vote = models.Ratings(
            food_id=food_id,
            token=token,
            rating=rating_value
        )
        session.add(new_vote)

        # ✅ update bite score
        if bite:
            bite.rating = (bite.rating or 0) + rating_value
            session.add(bite)

        session.commit()
        session.refresh(new_vote)

        return {
            "success": True,
            "message": "Vote created successfully",
            "rating": bite.rating if bite else new_vote.rating
        }

def select_bite(id: int):
    with Session(db.engine) as session:
        statement = select(models.Bites).where(models.Bites.id == id)
        results = session.exec(statement)
        bite = results.first()
        return bite

def select_ranked_bites(rank: int):
    with Session(db.engine) as session:
        statement = (
            select(models.Bites)
            .order_by(models.Bites
            .rating.desc())
            .offset(rank-1)
            .limit(1)
            )
        return session.exec(statement).first()
    
def select_recent_bites(index: int):
    with Session(db.engine) as session:
        bites = session.exec(
            select(models.Bites).order_by(models.Bites.date_added.desc())
        ).all()
        return bites[index]

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