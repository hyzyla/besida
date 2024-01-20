from sqlalchemy import BigInteger, Column, Enum, ForeignKey, Identity, Index, Text
from sqlalchemy.dialects.postgresql import JSONB

from app.db import Base
from app.users.enums import OAuthProvider


class User(Base):
    __tablename__ = "users"

    id = Column(BigInteger, Identity(), primary_key=True)
    name = Column(Text, nullable=False)
    email = Column(Text, nullable=False)


class OAuthUser(Base):
    __tablename__ = "oauth_users"
    __table_args__ = (Index("sub", "provider", unique=True),)

    id = Column(BigInteger, Identity(), primary_key=True)
    sub = Column(Text, nullable=False)
    extra = Column(JSONB, nullable=False)
    provider = Column(
        type_=Enum(OAuthProvider, native_enum=False, length=100),
        nullable=False,
    )
    user_id = Column(BigInteger, ForeignKey("users.id"), nullable=False)
