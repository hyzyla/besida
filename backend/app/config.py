from pydantic import BaseSettings, Field, SecretStr


class Config(BaseSettings):
    ENVIRONMENT: str = Field(...)
    DATABASE_URL: str = Field(...)
    SENTRY_DSN: str | None = Field(None)
    APP_TITLE: str = Field("besida")
    GOOGLE_CLIENT_ID: str = Field(...)
    GOOGLE_CLIENT_SECRET: str = Field(...)
    SESSION_SECRET_KEY: str = Field(...)
    BASE_URL: str = Field(...)


config = Config()
