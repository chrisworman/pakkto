#!/bin/bash

find src/ -name '*.html' ! -name 'index.html' -exec cat {} \; > ./dist/templates.html