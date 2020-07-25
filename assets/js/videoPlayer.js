const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");
const fullScrnBtn = document.getElementById("jsFullScreen");

function handlePlayClick() {
  // HTMLMediaElement 참고
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
  } else {
    videoPlayer.muted = true;
    volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
  }
}

// webkit: 크롬이 사용하는 엔진 (ie/ms: internet explorer, moz: firefox) 으로, 브라우저가 특정 메서드를 지원하지 않을 시 사용
function exitFullScreen() {
  fullScrnBtn.innerHTML = '<i class="fas fa-expand"></i>';
  fullScrnBtn.addEventListener("click", goFullScreen);
  document.webkitExitFullscreen();
}

// Full Screen 을 확인하는 메서드가 존재하지 않으므로, EventListener를 제거, 생성하여 video 화면 사이즈를 전환
function goFullScreen() {
  videoContainer.webkitRequestFullscreen();
  fullScrnBtn.innerHTML = '<i class="fas fa-compress"></i>';
  fullScrnBtn.removeEventListener("click", goFullScreen);
  fullScrnBtn.addEventListener("click", exitFullScreen);
}

function init() {
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
  fullScrnBtn.addEventListener("click", goFullScreen);
}

if (videoContainer) {
  init();
}
