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
  Expected_multilineJSON, Expected_multilineYaml,
  Expected_singleLineJSON,
  multilineJSONL,
  singleLineJSONL
} from "./fixtures/smoke/single-line.mjs";
import {json2Yaml, jsonl2json, jsonl2Yaml} from "../src/index.mjs";
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

    const expected = Expected_multilineYaml;
    let actual = json2Yaml(Expected_multilineJSON);
    // writeToFile('multiline.json',actual);
    assert.deepEqual(actual, expected);

  });
  it('multi-line yaml', function () {

    const expected = Expected_multilineYaml;
    let actual = jsonl2Yaml(multilineJSONL);
    // writeToFile('multiline.json',actual);
    assert.deepEqual(actual, expected);

  });
});

// todo later add file version. first with string... then with stream