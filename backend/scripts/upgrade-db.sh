#!/bin/bash

set -euf -o pipefail

./scripts/wait-for-it.sh "${DATABASE_URL}"

alembic upgrade heads
