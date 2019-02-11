#!/bin/sh
set -e

while ! nc -z postgres 5432; do
    echo "waiting for postgres..."
    sleep 1;
done

if [ "$DJANGO_MANAGEPY_MIGRATE" = 'TRUE' ]; then
    python /usr/src/app/manage.py migrate --noinput
fi

if [ "$DJANGO_MANAGEPY_COLLECTSTATIC" = 'TRUE' ]; then
    python /usr/src/app/manage.py collectstatic --noinput
fi

exec "$@"
