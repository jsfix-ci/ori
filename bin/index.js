#!/usr/bin/env node

const program = require("commander");

program
  .command("version")
  .description("Show what version of ori is installed")
  .action(function showVersion() {
    console.log(`Ori version ${process.env?.npm_package_version}`);
  });

program.parse(process.argv);
