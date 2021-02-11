#!/usr/bin/env node
const { Command } = require("commander");

const { name, getLatestVersion, version } = require("../lib/pkgInfo.js");
const { exec } = require("../lib/shell.js");

const program = new Command();
program.action(update).parseAsync(process.argv);

async function update() {
  const latestVersion = await getLatestVersion();

  if (version === latestVersion) {
    console.log(`You are already on the latest version (${latestVersion})`);
  } else {
    exec(`npm install -g ${name}@${latestVersion}`);
  }
}
