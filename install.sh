#/bin/bash

# scriptDir=`dirname "$BASH_SOURCE"`

if [[ -z $(which brew) ]]; then
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
else
  echo "brew is installed in $(which brew)"
fi

if [[ -z $(which git) ]]; then
  brew install git
else
  echo "git is installed in $(which git)"
fi

if [[ -d "$HOME/.nvm" ]]; then
  echo "nvm is installed in $HOME/.nvm"
else
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
fi

nvm install lts/* --latest-npm
