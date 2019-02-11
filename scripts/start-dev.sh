#!/bin/bash
set -xe

yarn build:dev
docker-compose -f docker-compose-dev.yml up -d
yarn start:webpack
