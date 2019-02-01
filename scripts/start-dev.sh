#!/bin/bash
set -e

yarn build:dev
docker-compose up -d
yarn start:dev
