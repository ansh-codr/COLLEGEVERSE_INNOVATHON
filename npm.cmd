:: Created by npm, please don't edit manually.
@ECHO OFF

SETLOCAL

SET "NODE_EXE=%~dp0\node.exe"
IF NOT EXIST "%NODE_EXE%" (
  SET "NODE_EXE=node"
)

REM ---------------------------------------------------------------------------
REM This repository vendors node.exe and uses wrappers (npm.cmd) so contributors
REM can run npm without installing Node globally.
REM
REM In some setups, ./node_modules/npm won't exist (npm isn't installed as a
REM project dependency). However, the bundled Node distribution ships npm under
REM its own installation tree, typically:
REM   ./node_modules/corepack/node_modules/npm/bin/
REM
REM Prefer that copy if present; otherwise fall back to the historical location.
REM ---------------------------------------------------------------------------

SET "NPM_CLI_JS=%~dp0\node_modules\corepack\node_modules\npm\bin\npm-cli.js"
IF NOT EXIST "%NPM_CLI_JS%" (
  SET "NPM_CLI_JS=%~dp0\node_modules\npm\bin\npm-cli.js"
)

"%NODE_EXE%" "%NPM_CLI_JS%" %*
