const fs = require("fs");
const path = require("path");
const home = require("os").homedir();

const colors = require("colors");
const { exec } = require("../../lib/shell.js");

async function installGitCompletion() {
  await downloadAutocompleteScript();
  await addToBashProfile();
  console.log(colors.green("\ngit-completion installed successfully"));
  console.log(
    colors.yellow(
      "You may need to restart terminal for auto-complete to start working"
    )
  );
}

function downloadAutocompleteScript() {
  if (!fs.existsSync(path.join(home, ".git-completion.bash"))) {
    return exec(
      "curl https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash -o ~/.git-completion.bash"
    ).catch((error) => console.error(error));
  }
  console.log("~/.git-completion.bash already exists. Skipping download.");
}

const bashProfileScript = `
if [ -f ~/.git-completion.bash ]; then
  . ~/.git-completion.bash
fi
`;

function addToBashProfile() {
  const bashProfilePath = path.join(home, ".bash_profile");

  if (!fs.existsSync(bashProfilePath)) {
    fs.writeFileSync(bashProfilePath, bashProfileScript);
    console.log("Created new ~/.bash_profile");
  } else {
    const bashProfile = fs.readFileSync(bashProfilePath).toString();
    if (!bashProfile.includes(bashProfileScript)) {
      fs.appendFileSync(bashProfilePath, `\n${bashProfileScript}\n`);
      console.log("Setup git autocomplete in ~/.bash_profile");
    } else {
      console.log(
        "~/.bash_profile already includes the git autocomplete script"
      );
    }
  }
}

module.exports = { installGitCompletion };
