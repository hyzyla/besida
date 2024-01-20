from app.errors import DoNotExistsError
from app.users import db
from app.users.enums import OAuthProvider
from app.users.models import GoogleUser, User, OAuthUserCreate, UserCreate


def get_user(user_id: int) -> User:
    user = db.select_user(user_id=user_id)
    if not user:
        raise DoNotExistsError()
    return user


def create_google_user(user: GoogleUser) -> User:
    """ Create oauth user in database and create user if user by email not exits """

    oauth_user = db.select_oauth_user(sub=user.sub, provider=OAuthProvider.google)
    if oauth_user is not None:
        return get_user(user_id=oauth_user.user_id)

    _user = db.select_user_by_email(email=user.email)
    if not _user:
        _user = db.insert_user(user=UserCreate(email=user.email, name=user.name))

    db.insert_oauth_user(
        user=OAuthUserCreate(
            user_id=_user.id,
            sub=user.sub,
            provider=OAuthProvider.google,
            extra=user.dict(),
        ),
    )

    return _user
