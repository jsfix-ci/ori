#!/usr/bin/env node
const program = require("commander");
const version = require("../lib/index.js");

program
  .command("version")
  .description("Show what version of ori is installed")
  .action(function showVersion() {
    console.log(`Ori version ${version}`);
  });

program.parse(process.argv);
