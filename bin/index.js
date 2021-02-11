#!/usr/bin/env node
const { program } = require("commander");

const { programName, version } = require("../lib/pkgInfo.js");
const showLatest = require("./showLatest.js");
const update = require("./update.js");

program.version(version, "-v, --version");

program
  .command("latest")
  .description(`show the latest version of ${programName}`)
  .action(showLatest);

program
  .command("update")
  .description(`install the latest version of ${programName}`)
  .action(update);

program.parseAsync();
