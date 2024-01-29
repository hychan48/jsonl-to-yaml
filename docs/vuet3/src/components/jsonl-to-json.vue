<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <v-row class="d-flex align-center justify-center">
        <v-col cols="12">
          <v-text-field
            label="JSONL"
            outlined
            rows="10"
            v-model="jsonl"
          />
        </v-col>
<!--                <v-col cols="auto">-->
                <v-col cols="12">
          <v-textarea
            label="JSON"
            outlined
            rows="10"
            v-model="strJSON"
          />
        </v-col>


      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { jsonl2json } from "##/src/index.mjs"
// import { jsonl2json } from "./../../../../src/index.mjs"
import { ref, computed } from "vue";
// setup jsonl input and strJSON output as strings
const jsonl = ref("asdf");
// const strJSON = ref("");
const strJSON = computed(() => {
  return JSON.stringify(jsonl.value);
});
/* computed property to convert jsonl to json */


</script>
