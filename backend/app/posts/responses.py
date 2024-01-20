from pydantic import Field

from app.posts import models as m


class FeedPost(m.FeedPost):
    likes_count: int = Field(alias="likesCount")
    comments_count: int = Field(alias="commentsCount")

    class Config:
        title = "FeedPost"
        allow_population_by_field_name = True


FeedPosts = list[FeedPost]
