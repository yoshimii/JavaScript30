window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
    console.log(audio);
    if(!audio) return;// stops function from running
    audio.currentTime = 0;// rewind audio to the start
    audio.play();
});