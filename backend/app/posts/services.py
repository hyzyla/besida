from app.errors import DoNotExistsError
from app.posts import db
from app.posts.models import Post, FeedPosts, FeedPost


def get_feed_posts() -> list[FeedPost]:
    return db.select_feed_posts()


def get_feed_post(id_: int) -> FeedPost:
    post = db.select_post(id_=id_)
    if not post:
        raise DoNotExistsError()
    return post
