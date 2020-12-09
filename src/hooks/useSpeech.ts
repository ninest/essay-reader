import { reactive, ref } from 'vue';

let voices = ref<SpeechSynthesisVoice[]>([]);

/*
Seems to be required on some browsers to populate the the voices
*/
voices.value = window.speechSynthesis.getVoices();
// speechSynthesis.speak(new SpeechSynthesisUtterance());
speechSynthesis.onvoiceschanged = function() {
  console.log('getting voices');
  voices.value = window.speechSynthesis.getVoices();
  options.voice = voices.value[0];
};

const options = reactive({
  voice: voices.value[0],
  text: ''
  // Other options: volume (0,1), rate (0.1,10), pitch (1,2)
});

const state = reactive({
  playing: false
});

export default function useSpeech() {
  const utterance = new SpeechSynthesisUtterance();

  function say() {
    utterance.voice = options.voice;
    utterance.text = options.text;

    speechSynthesis.speak(utterance);
  }

  function stop() {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      speechSynthesis.cancel();
      speechSynthesis.cancel();
      speechSynthesis.cancel();
      speechSynthesis.cancel();
      speechSynthesis.cancel();
      speechSynthesis.cancel();
      console.log('STOPPED!');
    } else {
      console.log('NOT SPEAKING!');
    }
  }

  // utterance.onstart = utterance.onresume = function() {
  //   state.playing = true;
  // };

  // utterance.onend = utterance.onpause = function() {
  //   state.playing = false;
  // };

  return { state, voices, options, say, stop };
}
