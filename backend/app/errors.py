class BaseError(Exception):
    ...


class UnAuthenticated(BaseError):
    ...


class DoNotExistsError(BaseError):
    ...
