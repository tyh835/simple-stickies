#!/bin/bash
set -xe

yarn build:dev
docker-compose up -d --build
yarn start:dev
