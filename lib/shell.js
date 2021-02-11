const shell = require("shelljs");

module.exports = {
  exec: (command, options = {}) => {
    return new Promise((resolve, reject) => {
      shell.exec(command, options, (code, stdout, stderr) => {
        if (stderr) {
          reject(stderr);
          return;
        }
        resolve(stdout.trim());
      });
    });
  },
};
