from pprint import pprint

from authlib.integrations.starlette_client import OAuth
from fastapi import APIRouter, Depends
from starlette.requests import Request
from starlette.responses import RedirectResponse

from app import db
from app.config import config
from app.users import services
from app.users.dependencies import get_user
from app.users.models import GoogleUser, User

oauth = OAuth()
oauth.register(
    name="google",
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={"scope": "openid email profile"},
    client_id=config.GOOGLE_CLIENT_ID,
    client_secret=config.GOOGLE_CLIENT_SECRET,
)
router = APIRouter(tags=["users"])


@router.get("/login/google", include_in_schema=False)
async def login_via_google(request: Request):
    redirect_uri = request.url_for("auth_via_google")
    return await oauth.google.authorize_redirect(request, redirect_uri)


@router.get("/auth/google", include_in_schema=False)
async def auth_via_google(request: Request):
    token = await oauth.google.authorize_access_token(request)
    user = GoogleUser(**token["userinfo"])

    with db.begin():
        user = services.create_google_user(user)

    request.session["user_id"] = user.id
    return RedirectResponse(config.BASE_URL)


@router.get("/users/me", response_model=User)
def get_me(user=Depends(get_user)):
    return user
