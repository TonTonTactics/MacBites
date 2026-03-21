""" Table & Schema formats

All table & schema formats needed

Antony Wiegand, McMaster, 2026"""

from sqlmodel import Field, SQLModel
from datetime import datetime
from sqlalchemy import UniqueConstraint

class Bites(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str
    description: str
    image_url: str
    price: float
    calories: float
    protein: float
    fat: float
    carbs: float


class Ratings(SQLModel, table=True):
    __table_args__ = (UniqueConstraint("food_id","token"),)

    id: int | None = Field(default=None, primary_key=True)
    food_id: int = Field(index=True)
    token: str = Field(index=True)
    rating: int
    created_at: datetime = Field(default_factory=datetime.utcnow)

class CreateRating(SQLModel):
    food_id: int
    rating: int