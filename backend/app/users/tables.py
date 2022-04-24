from sqlalchemy import BigInteger, Column, Identity, Text

from app.db import Base


class User(Base):
    __tablename__ = "users"

    id = Column(BigInteger, Identity(), primary_key=True)
    name = Column(Text, nullable=False)
