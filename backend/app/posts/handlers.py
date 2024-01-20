from fastapi import APIRouter, Path, Depends

from app import db
from app.posts import services
from app.posts.models import PostCreate
from app.posts.responses import FeedPost, FeedPosts
from app.users.dependencies import get_user
from app.users.models import User

router = APIRouter(tags=["posts"])


@router.get(path="/posts", response_model=FeedPosts)
def get_posts() -> list[FeedPost]:
    with db.connect():
        posts = services.get_feed_posts()
    return posts


@router.get(path="/posts/{id}")
def get_post(post_id: int = Path(..., alias="id")) -> FeedPost:
    with db.connect():
        return services.get_feed_post(id_=post_id)


@router.post(path='/posts', response_model=FeedPost)
def create_post(body: PostCreate, user: User = Depends(get_user)) -> FeedPost:
    with db.begin():
        post = services.create_post(post=body, user=user)

    return post
