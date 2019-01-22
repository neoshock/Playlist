var trackList = document.getElementById('trackList');
var audio = ["SN.mp3","SN1.mp3","SN2.mp3","SN3.mp3"];
var btnPlay = document.getElementsByClassName('play');
var btnPause = document.getElementsByClassName('pause');
var trackPlay = new Audio();


function webPlayer(){
  var target = event.target;
  var dataset = target.dataset;
  var type = dataset.type;
  var value = dataset.value;
  for (var i = 0; i <= audio.length; i++) {
  }
  if (type) {
    var timing = timeInterval;
    if (type === "play") {
      var outAdio = parseFloat(value) -1;
      trackPlay.src = audio[outAdio];
      trackPlay.play();
      btnPlay[outAdio].style.display = 'none';
      btnPause[outAdio].style.display = 'inline-block';
      var stop = outAdio;
      var seconds = 0;
      var timeInterval = setInterval(timer, 1000);
      function timer(){
        var time = seconds++;
        if (time >= 20) {
          clearInterval(timeInterval);
          trackPlay.src = audio[stop];
          trackPlay.pause();
          btnPlay[stop].style.display = 'inline-block';
          btnPause[stop].style.display = 'block';
        }
      }
    }
    if (type === "pause") {
      var inAudio = parseFloat(value) -1;
      trackPlay.src = audio[inAudio];
      trackPlay.pause();
      btnPause[inAudio].style.display = 'none';
      btnPlay[inAudio].style.display = 'inline-block';
      clearInterval(timing);
    }
}
}

trackList.addEventListener('click', webPlayer);
