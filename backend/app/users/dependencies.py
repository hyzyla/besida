from typing import Iterator

from fastapi import Request

from app import db
from app.errors import UnAuthenticated
from app.users import services
from app.users.models import User


def get_user(request: Request) -> User:
    user_id: int | None = request.session.get('user_id')
    if not user_id:
        raise UnAuthenticated()

    with db.connect():
        user = services.get_user(user_id=user_id)

    return user
