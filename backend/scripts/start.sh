#!/bin/bash

set -euf -o pipefail


bash scripts/init.sh
exec uvicorn app.main:app --host 0.0.0.0 --port 8010 --reload
