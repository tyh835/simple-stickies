#!/bin/sh
set -e

# if [ "$DJANGO_MANAGEPY_MIGRATE" = 'TRUE' ]; then
#     python /usr/src/app/manage.py migrate --noinput
# fi

if [ "$DJANGO_MANAGEPY_COLLECTSTATIC" = 'TRUE' ]; then
    python /usr/src/app/manage.py collectstatic --noinput
fi

exec "$@"