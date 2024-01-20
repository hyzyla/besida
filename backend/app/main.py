from fastapi import APIRouter, FastAPI
from sentry_sdk.integrations.asgi import SentryAsgiMiddleware
from starlette.middleware.sessions import SessionMiddleware

from app import setup
from app.config import config
from app.posts import handlers as posts
from app.users import handlers as users

app = FastAPI(title=config.APP_TITLE)

setup.init_sentry()

# Configure routes
api = APIRouter(prefix="/api")
api.include_router(posts.router)
api.include_router(users.router)
app.include_router(api)

# Configure middlewares
app.add_middleware(SentryAsgiMiddleware)
app.add_middleware(
    middleware_class=SessionMiddleware,
    secret_key=config.SESSION_SECRET_KEY,
)
