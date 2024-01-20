from pydantic import BaseModel, Extra

from app.users.enums import OAuthProvider


class _BaseModel(BaseModel):
    class Config:
        orm_mode = True


class UserBase(_BaseModel):
    name: str
    email: str


class User(UserBase):
    id: int


class UserCreate(UserBase):
    ...


class OAuthUserBase(_BaseModel):
    sub: str
    extra: dict
    provider: OAuthProvider
    user_id: int


class OAuthUserCreate(OAuthUserBase):
    ...


class OAuthUser(OAuthUserBase):
    id: int


class GoogleUser(BaseModel):
    iss: str
    azp: str
    aud: str
    sub: str
    email: str
    email_verified: bool
    at_hash: str
    nonce: str
    name: str
    picture: str
    locale: str
    given_name: str
    family_name: str
    iat: int
    exp: int

    class Config:
        extra = Extra.allow
