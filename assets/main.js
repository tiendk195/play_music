let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrIcon = document.getElementById("ctrIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
function playPause() {
  if (ctrIcon.classList.contains("ri-pause-line")) {
    song.pause();
    ctrIcon.classList.remove("ri-pause-line");
    ctrIcon.classList.add("ri-play-line");
    document.querySelector(".song-img").classList.remove("rotate-img");
  } else {
    song.play();
    ctrIcon.classList.add("ri-pause-line");
    ctrIcon.classList.remove("ri-play-line");
    document.querySelector(".song-img").classList.add("rotate-img");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrIcon.classList.add("ri-pause-line");
  ctrIcon.classList.remove("ri-play-line");
};
