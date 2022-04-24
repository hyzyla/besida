from pydantic import BaseSettings, Field


class Config(BaseSettings):
    ENVIRONMENT: str = Field(...)
    DATABASE_URL: str = Field(...)
    SENTRY_DSN: str | None = Field(None)
    APP_TITLE: str = Field("besida")


config = Config()
