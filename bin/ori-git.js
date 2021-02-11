#!/usr/bin/env node
const { Command } = require("commander");
const checkout = require("./git/checkout.js");

const program = new Command();
program
  .command("checkout")
  .arguments("[branch-filter]")
  .alias("co")
  .action(checkout)
  .parseAsync(process.argv);
