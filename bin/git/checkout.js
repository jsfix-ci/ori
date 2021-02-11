const inquirer = require("inquirer");
const colors = require("colors");

const { exec } = require("../../lib/shell.js");
const { noop } = require("../../lib/utility.js");

async function checkout() {
  const branchOutput = await exec("git branch -a", { silent: true });
  const branchOutputLines = branchOutput
    .split("\n")
    .map((branch) => branch.trim());
  const currentBranch = branchOutputLines
    .find((branch) => branch.includes("*"))
    ?.replace("* ", "");

  if (branchOutputLines.length === 1) {
    console.log(
      `${colors.yellow(currentBranch)} is the only branch on this repository.`
    );
    return;
  }

  const branches = branchOutputLines.filter((branch) => {
    return !branch.includes("*") && !branch.includes("->");
  });

  if (branches.length === 1) {
    checkoutBranch(branches[0]);
  } else {
    const questions = [
      {
        name: "branch",
        type: "list",
        message: `You're currently on ${colors.yellow(
          currentBranch
        )}. Which branch do you want to checkout?`,
        choices: branches,
      },
    ];
    inquirer.prompt(questions).then((answers) => {
      checkoutBranch(answers["branch"]);
    });
  }
}

function checkoutBranch(branchName) {
  const { branch, isRemote } = getBranchData(branchName);
  exec(`git checkout ${isRemote ? "-track origin/" : ""}${branch}`).catch(noop);
}

function getBranchData(branch) {
  const remoteBranchRegex = /^remotes.*\/(.*)$/;
  const match = remoteBranchRegex.exec(branch);

  return match
    ? { branch: match[1], isRemote: true }
    : { branch, isRemote: false };
}

module.exports = checkout;
