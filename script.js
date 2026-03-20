//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");


buttons.forEach(btn=>{
  btn.addEventListener("click", () => {
    stopAllSounds(); 

    const soundName = document.querySelector("#id");
	const audio = document.getElementById(soundId);
    audio.play();
  });
})
function stopAllSounds() {
  const audios = document.querySelectorAll("audio");

  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

stopBtn.addEventListener("click", stopAllSounds);