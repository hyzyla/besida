from fastapi import FastAPI, APIRouter
from sentry_sdk.integrations.asgi import SentryAsgiMiddleware

from app import setup
from app.config import config
from app.posts import handlers as posts

app = FastAPI(title=config.APP_TITLE)

api = APIRouter(prefix='/api')
api.include_router(posts.router)

setup.init_sentry()

app.include_router(api)
app.add_middleware(SentryAsgiMiddleware)
