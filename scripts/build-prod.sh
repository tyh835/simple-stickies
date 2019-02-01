#!/bin/bash
set -xe

yarn build:prod
docker-compose build
echo 'Build Success!'