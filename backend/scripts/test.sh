#!/bin/bash

set -euf -o pipefail

bash scripts/upgrade-db.sh

exec pytest "$@"
