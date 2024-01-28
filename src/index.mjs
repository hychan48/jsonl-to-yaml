/* Text Version */

/**
 * jsonl2json as String
 * @param jsonl {string}
 * @return {unknown[]}
 *
 * Since input is string filter by \n or \r\n
 * encoding input might be utf-8-bom
 */
export function jsonl2json(jsonl) {
  return jsonl.split(/\r?\n/).filter(Boolean).map(JSON.parse);
}

/** todo Stream/File version
 *   encoding input might be utf-8-bom
 * */
