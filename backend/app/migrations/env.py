from logging.config import fileConfig

from alembic import context

# this is the Alembic Config object, which provides
# access to the values within the .ini file in use.
from app import db, setup

config = context.config

# Interpret the config file for Python logging.
# This line sets up loggers basically.
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

from app.posts import tables  # noqa: F401, E402, F811
from app.users import tables  # noqa: F401, E402, F811

target_metadata = db.Base.metadata

setup.init_sentry()


def run_migrations_online():

    with db.engine.connect() as connection:
        context.configure(
            connection=connection,
            target_metadata=target_metadata,
        )

        with context.begin_transaction():
            context.run_migrations()


run_migrations_online()
