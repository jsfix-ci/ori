const colors = require("colors/safe");
const { getLatestVersion } = require("../lib/pkgInfo.js");

async function showLatest() {
  console.log(
    `The latest version is ${colors.cyan(`v${await getLatestVersion()}`)}`
  );
}

module.exports = showLatest;
