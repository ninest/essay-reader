<template>
  <h1 class="title">Essay Reader</h1>
  <form @submit.prevent="read()">
    <textarea
      placeholder="Paste your essay here ..."
      v-model="essay"
      id="essay-space"
    ></textarea>

    <div class="sliders">
      <input type="range" name="" id="">
    </div>

    <div class="options">
      <select v-model="selVoice">
        <option v-for="voice in voices" :key="voice" :value="voice">
          {{ voice.name }}
        </option>
      </select>

      <button type="submit" class="button">Read</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useSpeech from '@/hooks/useSpeech';

const { voices, options, say } = useSpeech();
const essay = ref<string>('');
const selVoice = ref<SpeechSynthesisVoice>(options.voice);

function read() {
  options.text = essay.value;
  options.voice = selVoice.value;
  say();
}
</script>
