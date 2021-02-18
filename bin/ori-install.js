#!/usr/bin/env node
const { Command } = require("commander");
const { installGitCompletion } = require("./install/git-completion.js");

const program = new Command();
program
  .command("git-completion")
  .alias("gc")
  .action(installGitCompletion)
  .parseAsync(process.argv);
