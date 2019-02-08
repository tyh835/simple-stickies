#!/bin/bash
set -xe

export NODE_ENV=production
yarn build:prod
docker-compose build
echo 'Build Success!'

