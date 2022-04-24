import decimal
import json
import uuid
from contextlib import contextmanager
from contextvars import ContextVar
from datetime import date, datetime
from enum import Enum
from typing import Any, Iterator, TypeVar

from pydantic import BaseModel

T = TypeVar("T")


def json_serializer(obj: Any) -> Any:
    """JSON serializer for objects not serializable by standard library."""
    if isinstance(obj, Enum):
        return obj.value
    if isinstance(obj, datetime):
        return obj.isoformat()
    if isinstance(obj, date):
        return obj.isoformat()
    if isinstance(obj, (decimal.Decimal, uuid.UUID)):
        return str(obj)
    if isinstance(obj, set):
        return list(obj)
    if isinstance(obj, BaseModel):
        return obj.dict()
    raise TypeError(f"Object of type {obj} is not serializable")


def to_json(data: Any) -> str:
    return json.dumps(data, default=json_serializer)


@contextmanager
def set_context_var(var: ContextVar[T], value: T) -> Iterator[None]:
    token = var.set(value)
    try:
        yield
    finally:
        var.reset(token)
