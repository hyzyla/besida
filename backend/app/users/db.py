from app import db
import sqlalchemy as sa
from app.users import models as m
from app.users.enums import OAuthProvider
from app.users.tables import OAuthUser, User


def select_user(user_id: int) -> m.User:
    row = db.select_one(
        sa.select(User)
        .where(User.id == user_id)
    )
    return m.User.from_orm(row)


def select_oauth_user(sub: str, provider: OAuthProvider) -> m.OAuthUser | None:
    row = db.select_one(
        sa.select(OAuthUser)
        .where(
            OAuthUser.sub == sub,
            OAuthUser.provider == provider,
        )
    )
    return m.OAuthUser.from_orm(row) if row else None


def insert_oauth_user(user: m.OAuthUserCreate) -> m.OAuthUser:
    row = db.select_one(
        sa.insert(OAuthUser)
        .values(user.dict())
        .returning(OAuthUser)
    )
    return m.OAuthUser.from_orm(row)


def insert_user(user: m.UserCreate) -> m.User:
    values = {**user.dict(), 'email': user.email.lower()}
    row = db.select_one(
        sa.insert(User)
        .values(values)
        .returning(User)
    )
    return m.User.from_orm(row)


def select_user_by_email(email: str) -> m.User | None:
    email = email.lower()
    row = db.select_one(
        sa.select(User)
        .where(User.email == email)
    )
    return m.User.from_orm(row) if row else None