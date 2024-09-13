#!/usr/bin/env bash

paretoBuildEnvDir=`realpath $(dirname "$0")`

npm install pareto-buildenvironment --prefix "$paretoBuildEnvDir" && \
"$paretoBuildEnvDir/node_modules/pareto-buildenvironment/initializeProject.sh" "$paretoBuildEnvDir/.."
