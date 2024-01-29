<!-- actually jsonl to json to yaml... rename later -->
<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <div class="text-body-2 font-weight-light mb-n1">@hychan48</div>
      <h1 class="text-h2 font-weight-bold">jsonl-to-json-to-yaml</h1>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="12">
          <v-textarea
            label="JSONL"
            auto-grow
            variant="outlined"

            v-model="jsonl"
          />
        </v-col>
        <!--                <v-col cols="auto">-->
        <v-col cols="12">
          <!--          todo make this computed with get/set because json to yaml should be easy as well... -->

          <v-textarea
            label="JSON"
            _rows="10"
            auto-grow
            variant="outlined"
            v-model="strJSON"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="strYaml"
            auto-grow
            label="YAML"
            variant="outlined"
          />
        </v-col>


      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
import {json2Yaml, jsonl2json} from "##/src/index.mjs"
/** @type {string} singleLineJSONL */
import { singleLineJSONL } from "##/tests/fixtures/smoke/single-line.mjs"
// import { multilineJSONL } from "##/tests/fixtures/smoke/single-line.mjs"
import {ref, computed} from "vue";
// import {ref, computed, reactive} from "vue";
// setup jsonl input and strJSON output as strings
const jsonl = ref(singleLineJSONL);
// const jsonl = ref(multilineJSONL);
// const strJSON = ref("");
// const oJSON = reactive({});//todo make this a computed property
const oJSON = computed(() => {
  try {
    //make the replacer and/or space configurable in the future... also maybe just make a component and put it in a lib.
    return jsonl2json(jsonl.value);

  } catch (e) {
    return e;
  }
  // return JSON.stringify(jsonl.value);
});
const strJSON = computed(() => {
  return JSON.stringify(oJSON.value, null, 2);
  // return JSON.stringify(jsonl.value);
});
const strYaml = computed(() => {
  /* if oJSON is error return blank */
  if (oJSON.value instanceof Error) {
    return "Error";
  } else {
    return json2Yaml(oJSON.value);
  }

});
// const strYaml = computed(() => {
//   try{
//     //make the replacer and/or space configurable in the future... also maybe just make a component and put it in a lib.
//     return JSON.stringify(jsonl2json(jsonl.value), null, 2);
//
//   }catch (e) {
//     return e.message;
//   }
//   // return JSON.stringify(jsonl.value);
// });
/* computed property to convert jsonl to json */


</script>
