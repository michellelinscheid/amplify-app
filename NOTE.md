# NOTE.md

The amplify CLi does not play well with the current version of node (v25). Reverting to version 22 allows lal the packages to function appropriately, but keeps the `npx ampx sandbox` command from giving a localStorage-related error.

Before rebuilding the backend, or running `npx` commands, activate an earlier version of node:

```bash
nvm install 22 # if necessary
nvm use 22
```

