#!/usr/bin/env node
const { Command } = require("commander");
const colors = require("colors/safe");

const { getLatestVersion } = require("../lib/pkgInfo.js");

const program = new Command();
program.action(showLatest).parseAsync(process.argv);

async function showLatest() {
  console.log(
    `The latest version is ${colors.cyan(`v${await getLatestVersion()}`)}`
  );
}
