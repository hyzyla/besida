# Besida

## Run project

There are two ways to run service using docker-compose (recommended):

```shell
docker-compose up app
```

## Tools

### Add new package

1. Add new package to `requirements.in`

2. Run command:

```shell
docker-compose run --rm pip-compile
```

2.  (optionally) Rebuild docker containers:

```shell
docker-compose build
```

### Run tests

```shell
docker-compose run --rm test
```

### Database migration

*   autogenerate migration

```shell
docker-compose run --rm alembic-autogenerate "Migration message"
```

*   upgrade to latest version

```shell
docker-compose run --rm alembic upgrade heads
```

*   upgrade to previous version

```shell
docker-compose run --rm alembic downgrade -1
```

### Linters & Formatters

*   mypy — check types:

```shell
docker-compose run --rm mypy
```

*   black — format code:

```shell
docker-compose run --rm black
```

*   flake8 — linter:

```shell
docker-compose run --rm flake8
```

*   isort — sort imports:

```shell
docker-compose run --rm isort
```

### Kafka UI

1.  Start KafkaUI tool

```shell
docker-compose up kafka-ui
```

2.  Visit http://localhost:8080
