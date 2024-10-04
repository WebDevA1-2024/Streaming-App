const video = document.getElementById('videoPlayer');
const playbackRate = document.getElementById('playbackRate');
const volumeControl = document.getElementById('volumeControl');
const qualityControl = document.getElementById('qualityControl');

function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}

function restartVideo() {
  video.currentTime = 0;
  video.play();
}

function changeSpeed() {
  video.playbackRate = playbackRate.value;
}

function changeVolume() {
  video.volume = volumeControl.value;
}

function changeQuality() {
  const selectedQuality = qualityControl.value;
  const sources = video.getElementsByTagName('source');
  for (let i = 0; i < sources.length; i++) {
    if (sources[i].getAttribute('data-quality') === selectedQuality) {
      video.src = sources[i].src;
      video.load();
      video.play();
      break;
    }
  }
}
