from sqlalchemy import (
    BigInteger,
    Column,
    DateTime,
    ForeignKey,
    Identity,
    Integer,
    Text,
    func,
)

from app.db import Base


class Post(Base):
    __tablename__ = "posts"

    id = Column(BigInteger, Identity(), primary_key=True)
    title = Column(Text, nullable=False)
    content = Column(Text, nullable=False)
    likes_count = Column(Integer, nullable=False)
    comments_count = Column(Integer, nullable=False)
    author_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    created_at = Column(DateTime, default=func.now(), nullable=False)
    updated_at = Column(DateTime, onupdate=func.now(), nullable=False)
