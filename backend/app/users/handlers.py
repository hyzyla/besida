from pprint import pprint

from fastapi import APIRouter
from starlette.requests import Request

from authlib.integrations.starlette_client import OAuth
from starlette.responses import RedirectResponse

from app.config import config

oauth = OAuth()
oauth.register(
    name='google',
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={
        'scope': 'openid email profile'
    },
    client_id=config.GOOGLE_CLIENT_ID,
    client_secret=config.GOOGLE_CLIENT_SECRET,
)
router = APIRouter()


@router.get("/login/google")
async def login_via_google(request: Request):
    redirect_uri = request.url_for('auth_via_google')
    return await oauth.google.authorize_redirect(request, redirect_uri)


@router.get("/auth/google")
async def auth_via_google(request: Request):
    token = await oauth.google.authorize_access_token(request)
    user = token['userinfo']
    request.session['']
    pprint(user)

    return RedirectResponse(config.BASE_URL)
