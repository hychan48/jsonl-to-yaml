import { stringify } from 'yaml';
/* Text Version */
/**
 * jsonl2json as String
 * @param jsonl {string}
 * @return {Array[object]}
 * @example
 * jsonl2json('{"a":1}\n{"b":2}')
 * //=> [{a:1},{b:2}]
 *
 * Since input is string filter by \n or \r\n
 * encoding input might be utf-8-bom
 */
export function jsonl2json(jsonl) {
  return jsonl.split(/\r?\n/).filter(Boolean).map(JSON.parse);
}
/**
 * @param objJsonList {Object} Should be an array of objects if it was originally jsonl
 * @return {string} Yaml String
 *
 * @dev note Wrapping for potential transformations
 */
export function json2Yaml(objJsonList){
  return stringify(objJsonList);
}

/**
 * jsonl2Yaml as String
 * @param strJsonList
 * @return {string}
 * @dev note add error handling
 */
export function jsonl2Yaml(strJsonList) {
  return json2Yaml(jsonl2json(strJsonList));
}
/** todo Stream/File version
 *   encoding input might be utf-8-bom
 * */
