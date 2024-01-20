from __future__ import annotations

from datetime import datetime

from pydantic import BaseModel
from sqlalchemy.engine import Row


class Author(BaseModel):
    id: int
    name: str



class PostBase(BaseModel):
    title: str
    content: str


class Post(PostBase):
    id: int
    likes_count: int
    comments_count: int
    author_id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True


class PostCreate(PostBase):
    ...


class FeedPost(BaseModel):
    id: int
    title: str
    content: str
    likes_count: int
    comments_count: int
    date: datetime
    author: Author

    @staticmethod
    def from_row(row: Row) -> FeedPost:
        return FeedPost(
            id=row["id"],
            title=row["title"],
            content=row["content"],
            likes_count=row["likes_count"],
            comments_count=row["comments_count"],
            date=row["date"],
            author=Author(
                id=row["author_id"],
                name=row["author_name"],
            ),
        )
