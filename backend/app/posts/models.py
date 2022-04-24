from __future__ import annotations
from datetime import datetime

from pydantic import BaseModel, Field
from sqlalchemy.engine import Row


class Author(BaseModel):
    id: int
    name: str


class Post(BaseModel):
    id: int
    title: str
    content: str
    likes_count: int
    comments_count: int
    author_id: int
    created_at: datetime
    updated_at: datetime


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
            id=row['id'],
            title=row['title'],
            content=row['content'],
            likes_count=row['likes_count'],
            comments_count=row['comments_count'],
            date=row['date'],
            author=Author(
                id=row['author_id'],
                name=row['author_name'],
            ),
        )


class FeedPostResponse(FeedPost):
    likes_count: int = Field(alias='likesCount')
    comments_count: int = Field(alias='commentsCount')

    class Config:
        allow_population_by_field_name = True


FeedPosts = list[FeedPostResponse]