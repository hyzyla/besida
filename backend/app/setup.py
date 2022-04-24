import sentry_sdk

from app.config import config


def init_sentry() -> None:
    sentry_sdk.init(
        dsn=config.SENTRY_DSN,
        environment=config.ENVIRONMENT,
        shutdown_timeout=10,
    )
