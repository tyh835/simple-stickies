#!/bin/bash
set -xe

yarn build:dev
docker-compose up -d
yarn start:dev
