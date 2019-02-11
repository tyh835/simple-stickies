#!/bin/bash
set -xe

export NODE_ENV=production
yarn build:prod
docker image build . -t tyh835/simple_stickies:latest
echo 'Build Success!'

