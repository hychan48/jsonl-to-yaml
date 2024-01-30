# Install Node Package Test

* smoke test

## Ubuntu Latest

```bash
# https://hub.docker.com/repository/docker/jchan48h/deb-network/general
docker pull ubuntu:latest
docker pull jchan48h/deb-network
# docker pull jchan48h/devcontainer
# docker push jchan48h/devcontainer:tagname
docker run -it --rm --name deb-network jchan48h/deb-network


# node versions...
## https://hub.docker.com/_/node/
docker pull node:bookworm-slim
exit
docker run -it --rm --name node-slim --hostname node-slim node:bookworm-slim # goes to node
docker run -it --rm --name node-slim --hostname node-slim node:bookworm-slim bash
# yarn is installed but not pnpm... interesting


# pnpm install
wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -

```

```bash
# Smoke test sample
yarn add yaml # smoke test another repo
# pnpm add some-user/some-repo#main
# I didn't even publish anything
yarn add hychan48/jsonl-to-yaml#main
cat package.json | grep yaml # smoke testing another package...
cat package.json | grep yaml
rm package.json
rm -rf node_modules
rm yarn.lock
```

## Windows

# Push Package to GitHub

* https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry
* through GitHub actions... or .npmrc
* npm ci === pnpm install --frozen-lockfile
  * https://stackoverflow.com/questions/70154568/pnpm-equivalent-command-for-npm-ci
  * CI=true pnpm i