# Install Node Package Test

* smoke test

## Ubuntu Latest

```bash
# https://hub.docker.com/repository/docker/jchan48h/deb-network/general
docker pull ubuntu:latest
docker pull jchan48h/deb-network
# docker pull jchan48h/devcontainer
# docker push jchan48h/devcontainer:tagname



```

## Windows

# Push Package to GitHub

* https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry
* through GitHub actions... or .npmrc
* npm ci === pnpm install --frozen-lockfile
  * https://stackoverflow.com/questions/70154568/pnpm-equivalent-command-for-npm-ci
  * CI=true pnpm i