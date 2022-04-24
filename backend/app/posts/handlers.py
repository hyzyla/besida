from fastapi import APIRouter, Path

from app import db
from app.posts import services
from app.posts.models import FeedPosts, Post, FeedPost

router = APIRouter()


@router.get(path="/posts", response_model=FeedPosts)
def get_posts() -> list[FeedPost]:
    with db.connect():
        posts = services.get_feed_posts()
    return posts


@router.get(path="/posts/{id}")
def get_post(post_id: int = Path(..., alias="id")) -> FeedPost:
    with db.connect():
        return services.get_feed_post(id_=post_id)
