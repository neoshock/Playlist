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
    var contador = i;
  }
  if (type) {
    if (type === "play") {
      var outAdio = parseFloat(value) -1;
      console.log(outAdio);
      trackPlay.src = audio[outAdio];
      trackPlay.play();
      btnPlay[outAdio].style.display = 'none';
      btnPause[outAdio].style.display = 'inline-block';
    }
    if (type === "pause") {
      var inAudio = parseFloat(value) -1;
      console.log(inAudio);
      trackPlay.src = audio[inAudio];
      trackPlay.pause();
      btnPause[inAudio].style.display = 'none';
      btnPlay[inAudio].style.display = 'inline-block';
    }
    var stop = outAdio;
    function stopAudio() {
      trackPlay.src = audio[stop];
      trackPlay.pause();
      btnPause[stop].style.display = 'none';
      btnPlay[stop].style.display = 'inline-block';
    }
    setTimeout(stopAudio, 20000);
  }
}

trackList.addEventListener('click', webPlayer);
