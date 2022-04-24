from sqlalchemy import create_engine, orm

from app.config import config
from app.utils import to_json

engine = create_engine(
    url=config.DATABASE_URL,
    json_serializer=to_json,
    future=True,
)

Base = orm.declarative_base()
