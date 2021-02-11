const { name, getLatestVersion, version } = require("../lib/pkgInfo.js");
const { exec } = require("../lib/shell.js");

async function update() {
  const latestVersion = await getLatestVersion();

  if (version === latestVersion) {
    console.log(`You are already on the latest version (${latestVersion})`);
  } else {
    exec(`npm install -g ${name}@${latestVersion}`);
  }
}

module.exports = update;
