#!/usr/bin/env node
const program = require("commander");
const version = require("../lib/index.js");

program.version(version, "-v, --version");
program.parse(process.argv);
