import { reactive, ref } from 'vue';

let voices = ref<SpeechSynthesisVoice[]>([]);

const options = reactive({
  voice: voices.value[0],
  volume: 0.5, // 0 to 1
  rate: 5, // 0.1 to 10
  pitch: 1, // 1 or 2
  text: ''
});

speechSynthesis.onvoiceschanged = function() {
  voices.value = window.speechSynthesis.getVoices();
  options.voice = voices.value[0];
};

export default function useSpeech() {
  const utterance = new SpeechSynthesisUtterance();

  function say() {
    utterance.voice = options.voice;
    utterance.volume = options.volume;
    utterance.rate = options.rate;
    utterance.pitch = options.pitch;
    utterance.text = options.text;

    speechSynthesis.speak(utterance);
  }

  return {
    voices,
    options,
    say
  };
}
