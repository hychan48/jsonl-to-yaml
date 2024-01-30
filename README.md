# jsonl-to-yaml
* Visualizing OpenAI Chat jsonl format in YAML. Easier to understand the content
* Demo - use stackblitz? or repl.it
  * stackblitz easier to start with tbh... since i dont need the vm. stackblitz probably the way to go
* https://hychan48.github.io/jsonl-to-yaml/
* https://github.com/hychan48/jsonl-to-yaml/
## JSONL-To-JSON
### String
```js
function jsonl2json(jsonl) {
  return jsonl.split(/\r?\n/).filter(Boolean).map(JSON.parse);
}
```

## Install CLI
```bash
yarn add hychan48/jsonl-to-yaml#main
```
```bash
pnpm add hychan48/jsonl-to-yaml # requires git installed
```
### Docker Smoke Test
```bash
docker pull node:bookworm-slim
docker run -it --rm --name node-slim --hostname node-slim node:bookworm-slim bash
corepack enable # enables npm, yarn, pnpm
# Requires git, thus using yarn
yarn add hychan48/jsonl-to-yaml#main
cat package.json | grep yaml
exit
```

## Dev Container
```bash
# node .devcontainer
```
# Compatibility
* Browser
  * [x] Pure JS
  * [ ] Easier JS
  * [ ] Blob
* [ ] NodeJS (File Stream later)


# Initial Setup
* https://github.com/hychan48/jsonl-to-yaml
## Vite + Vuetify Static Page
```bash
pnpm init
pnpm add -D mocha
#pnpm add -D vite
#pnpm add -D vuetify



# deps
#https://github.com/nodeca/js-yaml
```
* yaml to jsonl later

# Inspiration
* Annoying to read. No easy UI atm for jsonl to yaml... in Javascript
  * https://community.openai.com/t/fine-tuning-in-a-nutshell-with-a-single-line-jsonl-file-and-n-epochs/60806
  * https://community.openai.com/t/how-to-structure-fine-tuned-data/347011/3
  * https://learn.microsoft.com/en-ca/azure/ai-services/openai/concepts/advanced-prompt-engineering?pivots=programming-language-chat-completions
  * https://learn.microsoft.com/en-ca/azure/ai-services/openai/how-to/fine-tuning?tabs=turbo%2Cpython&pivots=rest-api

## Demo


## Example fromm OpenAI


## Yaml version


# Testing / Dev
```bash
pnpm run test

mkdir -p tmp

```

```
