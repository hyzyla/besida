import sqlalchemy as sa

from app import db
from app.posts import models as m
from app.posts.tables import Post
from app.users.tables import User

FEED_POST_COLUMNS = [
    Post.id,
    Post.title,
    Post.content,
    Post.likes_count,
    Post.comments_count,
    Post.created_at.label("date"),
    User.id.label("author_id"),
    User.name.label("author_name"),
]


def select_feed_posts() -> list[m.FeedPost]:
    query = (
        sa.select(*FEED_POST_COLUMNS)
        .join(User, Post.author_id == User.id)
        .order_by(sa.desc(Post.id))
    )
    rows = db.select_all(query)
    return [m.FeedPost.from_row(row) for row in rows]


def select_feed_post(id_: int) -> m.FeedPost | None:
    query = (
        sa.select(*FEED_POST_COLUMNS)
        .join(User, Post.author_id == User.id)
        .where(Post.id == id_)
    )
    row = db.select_one(query)
    return m.FeedPost.from_row(row) if row else None


def insert_post(
    title: str,
    content: str,
    likes_count: int,
    comments_count: int,
    author_id: int,
) -> Post:
    query = (
        sa.insert(Post)
        .values(
            title=title,
            content=content,
            likes_count=likes_count,
            comments_count=comments_count,
            author_id=author_id,
        )
        .returning(Post)
    )
    row = db.select_one(query)
    return m.Post.from_orm(row)
