# Simple Stickies

React/Django app backed by Postgres and Docker.

Ensure you have `pipenv`, `yarn`, and `docker-compose` installed.

Add `DJANGO_SECRET_KEY` and `POSTGRES_PASSWORD` to a `.env` file in the root directory

Run `yarn start:dev` to start dev server.

Run `yarn build` to build for production (Webpack and Docker Images)

Run `yarn stop` to stop running containers.

Run `yarn test` to run unit tests.
