<template>
  <!-- <h1>test</h1> -->
  <h1 class="title">Essay Reader</h1>
  <form @submit.prevent="read()">
    <ul class="form">
      <!-- DEBUGGING: -->
      <li class="form-group">
        <pre>{{ options }}</pre>
      </li>

      <li class="form-group form-group-essay">
        <textarea
          placeholder="Paste your essay here ..."
          v-model="options.text"
          id="essay-space"
        ></textarea>
      </li>
      <li class="form-group form-group-sliders">
        <div class="slider-group">
          <label for="volume">Volume</label>
          <input
            v-model.number="options.volume"
            type="range"
            min="0"
            max="1"
            step="0.1"
            name="volume"
            id="volume"
          />
        </div>

        <div class="slider-group">
          <label for="rate">Rate</label>
          <input
            v-model.number="options.rate"
            type="range"
            min="0"
            max="10"
            step="0.1"
            name="rate"
            id="rate"
          />
        </div>
      </li>
      <li class="form-group form-group-options">
        <select v-model="options.voice">
          <option v-for="voice in voices" :key="voice" :value="voice">
            {{ voice.name }}
          </option>
        </select>

        <button type="submit" class="button">Read</button>
      </li>
    </ul>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useSpeech from '@/hooks/useSpeech';

export default defineComponent({
  name: 'Index',
  setup() {
    const { voices, options, say } = useSpeech();

    // const essay = ref<string>('');
    // const selVoice = ref<SpeechSynthesisVoice>(options.voice);
    // const selVolume = ref<number>(options.volume);
    // const selRate = ref<number>(options.rate);

    function read() {
      // options.text = essay.value;
      // options.voice = selVoice.value;
      // options.volume = selVolume.value;
      // options.rate = selRate.value;
      say();
    }

    return {
      voices,
      options,
      // essay,
      // selVoice,
      // selVolume,
      // selRate,
      read
    };
  }
});
</script>
