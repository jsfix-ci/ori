const colors = require("colors");

const { name, version } = require("../package.json");
const { exec } = require("./shell.js");

module.exports = {
  name,
  getLatestVersion: async () => {
    return await exec(`npm show ${name} version`, { silent: true });
  },
  programName: colors.bold("ori"),
  version,
};
