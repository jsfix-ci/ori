# ori
Personal cross-platform productivity tool

## Install brew, git, nvm, npm, node, and ori

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/kitsune7/ori/master/install.sh)"
```

## Basic Commands

- `ori --help`: Shows a list of supported commands and their syntax
- `ori --version`/`ori -v`: Show the currently installed version
- `ori latest`: Check to see what the latest version is
- `ori update`: Updates to the latest version

## Future commands
```
ori setup <service>
```

The following services will be available:
- mac
- ssh
- programs
- settings
- aliases
- dock
- git
- dropbox
- node
- python

```
ori secret [add | list | delete | help | update] [SECRET_KEY]
```

```
ori set ssh-key
```

```
ori alias [add | list | delete | update | help]
```