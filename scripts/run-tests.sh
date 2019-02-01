#!/bin/bash
docker-compose -f test-docker.yml up --build --exit-code-from django_test
