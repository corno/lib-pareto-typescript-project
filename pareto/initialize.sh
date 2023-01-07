#!/usr/bin/env bash

paretoBuildEnvDir=`realpath $(dirname "$0")`

"$paretoBuildEnvDir/node_modules/pareto-buildenvironment/initialize.sh" "$paretoBuildEnvDir"
