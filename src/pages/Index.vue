<template>
  <h1 class="title">Essay Reader</h1>
  <form @submit.prevent="read()">
    <textarea
      placeholder="Paste your essay here ..."
      v-model="essay"
      id="essay-space"
    ></textarea>

    <button type="submit" class="button">Read</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const essay = ref<string>('');

function read() {
  console.log(essay.value);
}
</script>
