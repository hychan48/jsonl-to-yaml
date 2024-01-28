/**
 * https://community.openai.com/t/fine-tuning-in-a-nutshell-with-a-single-line-jsonl-file-and-n-epochs/60806
 */
/** @typedef {string} JSONL String Of OpenAI Fine Tunning */
export const singleLineJSONL = `{"prompt":"What is your favorite color? ++++", "completion":" My super favorite color is blue. ####"}`
/** @typedef {[]} JSON array Of OpenAI Fine Tunning */
export const Expected_singleLineJSON = [{"prompt":"What is your favorite color? ++++", "completion":" My super favorite color is blue. ####"}]
