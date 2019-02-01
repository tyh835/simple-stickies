#!/bin/bash
set -e

yarn build:prod
docker-compose build
echo 'Build Success!'