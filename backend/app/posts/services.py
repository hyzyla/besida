from app.errors import DoNotExistsError
from app.posts import db
from app.posts.models import FeedPost, PostCreate, Post
from app.users.models import User


def get_feed_posts() -> list[FeedPost]:
    return db.select_feed_posts()


def get_feed_post(id_: int) -> FeedPost:
    post = db.select_feed_post(id_=id_)
    if not post:
        raise DoNotExistsError()
    return post


def create_post(post: PostCreate, user: User) -> FeedPost:
    _post = db.insert_post(
        title=post.title,
        content=post.content,
        likes_count=0,
        comments_count=0,
        author_id=user.id,
    )

    return get_feed_post(id_=_post.id)
