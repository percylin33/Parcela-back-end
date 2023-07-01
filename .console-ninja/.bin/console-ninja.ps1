#!/usr/bin/env pwsh
$env:NODE_OPTIONS='--no-warnings --loader "file:///C:/Users/v3ty_/.console-ninja/.bin/loader.js"'
if ($args) { Invoke-Expression "$args" }

