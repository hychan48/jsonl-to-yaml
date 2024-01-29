/**
yarn add mocha -D

package.json
  "imports": {
    "##/*": {
      "default": "./*"
    },
  },
  "type": "module",

  jsconfig.json
  {
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "##/*": ["./*"]
    }
  },
  "exclude": ["node_modules", ".nuxt", "dist"]
}



*/
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const assert = require('assert');
// const {describe,it} = require('mocha');
import assert from 'node:assert';
import { describe, it} from 'mocha';
/*
1.
yarn add mocha @babel/polyfill @babel/register @babel/preset-env babel-plugin-module-resolver --dev
yarn add @babel/core --dev
2.
-r @babel/register -r babel-plugin-module-resolver

3.
.babelrc
{

  "presets": ["@babel/preset-env"],
  "plugins": [
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "test": "./test",
        "underscore": "lodash",

        "~": "./"
      }
    }]
  ]

}
test specific timeout
this.timeout(500);//500ms
*/
/**
 * Should put this somewhere safe
 * todo filepath needs to be initialized as well...
 * @param fileName .json
 * @param data will automatically be changed
 */
import fs from 'node:fs';
import {
  Expected_multilineJSON,
  Expected_singleLineJSON,
  multilineJSONL,
  singleLineJSONL
} from "./fixtures/smoke/single-line.mjs";
import {json2Yaml, jsonl2json} from "../src/index.mjs";
// import {json2Yaml, jsonl2json} from "##/src/index.mjs";  //fix later
function writeToFile(fileName,data,space=2){
  const sFileName = /\./.test(fileName) ? fileName : fileName + '.json';
  const filePath = `tmp/${sFileName}`
  fs.writeFileSync(filePath,
    typeof data === 'string' ? data :JSON.stringify(data,null,+space)
  );
}
describe('smoke test jsonl to json', function(){
  it('basic and simple', function(){

    let actual = jsonl2json(singleLineJSONL);
    assert.deepEqual(actual, Expected_singleLineJSON);

  });
  it('multi-line', function(){

    let actual = jsonl2json(multilineJSONL);
    // writeToFile('multiline.json',actual);
    assert.deepEqual(actual, Expected_multilineJSON);

  });
});

describe('smoke test json to yaml', function(){
  it('basic and simple', function(){
    const expected = `- prompt: What is your favorite color? ++++
  completion: " My super favorite color is blue. ####"
`
    let actual = json2Yaml(Expected_singleLineJSON);
    assert.deepEqual(actual, expected);

  });
  it('multi-line', function(){
    const expected = `- messages:
    - role: system
      content: You are an Xbox customer support agent whose primary goal is to help
        users with issues they are experiencing with their Xbox devices. You are
        friendly and concise. You only provide factual answers to queries, and
        do not provide answers that are not related to Xbox.
    - role: user
      content: Is Xbox better than PlayStation?
    - role: assistant
      content: I apologize, but I cannot provide personal opinions. My primary job is
        to assist you with any issues related to your Xbox device. Do you have
        any Xbox-related issues that need addressing?
- messages:
    - role: system
      content: You are an Xbox customer support agent whose primary goal is to help
        users with issues they are experiencing with their Xbox devices. You are
        friendly and concise. You only provide factual answers to queries, and
        do not provide answers that are not related to Xbox.
    - role: user
      content: Can I play PC games on my Xbox?
    - role: assistant
      content: While Xbox consoles don't natively support PC games, they can play an
        array of Xbox games, many of which are also available on PC. Can I
        assist you with finding games compatible with your Xbox device?
- messages:
    - role: system
      content: You are an Xbox customer support agent whose primary goal is to help
        users with issues they are experiencing with their Xbox devices. You are
        friendly and concise. You only provide factual answers to queries, and
        do not provide answers that are not related to Xbox.
    - role: user
      content: I'm having trouble connecting my Xbox to the Wi-Fi.
    - role: assistant
      content: No worries, let's go through the network settings on your Xbox. Can you
        please tell me what happens when you try to connect it to the Wi-Fi?
`

    let actual = json2Yaml(Expected_multilineJSON);
    // writeToFile('multiline.json',actual);
    assert.deepEqual(actual, expected);

  });
});