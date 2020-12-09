<script lang="ts">
import { defineComponent, ref } from 'vue';
import useSpeech from '@/hooks/useSpeech';

export default defineComponent({
  name: 'Index',
  setup() {
    const { state, voices, options, say, stop } = useSpeech();

    return {
      state,
      voices,
      options,
      say,
      stop
    };
  }
});
</script>

<template>
  <!-- <h1>test</h1> -->
  <h1 class="title">Essay Reader</h1>
  <form @submit.prevent="say()">
    <ul class="form">
      <!-- DEBUGGING: -->
      <!-- <li class="form-group">
        <h2>debugging:</h2>
        <pre>{{ voices }}</pre>
      </li> -->

      <li class="form-group form-group-essay">
        <textarea
          placeholder="Paste your essay here ..."
          v-model="options.text"
          id="essay-space"
        ></textarea>
      </li>

      <li class="form-group form-group-options">
        <select v-model="options.voice">
          <option disabled value="">Choose voice</option>
          <option v-for="voice in voices" :key="voice" :value="voice">
            {{ voice.name }}
          </option>
        </select>

        <div class="button-group">
          <button
            v-if="state.playing"
            @click="stop()"
            class="button button-danger button-secondary"
          >
            Stop
          </button>
          <button type="submit" class="button button-main">Read</button>
        </div>
      </li>
    </ul>
  </form>
</template>
