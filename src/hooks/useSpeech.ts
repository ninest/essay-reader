import { reactive, ref } from 'vue';

export default function useSpeech() {
  const voices: SpeechSynthesisVoice[] = window.speechSynthesis.getVoices();

  const utterance = new SpeechSynthesisUtterance();

  const options = reactive({
    voice: voices[0],
    volume: 0.5, // 0 to 1
    rate: 1, // 0.1 to 10
    pitch: 1, // 1 or 2
    text: ''
  });

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
