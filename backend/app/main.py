from fastapi import FastAPI
from sentry_sdk.integrations.asgi import SentryAsgiMiddleware

from app import setup
from app.config import config

app = FastAPI(title=config.APP_TITLE)

setup.init_sentry()

app.add_middleware(SentryAsgiMiddleware)
