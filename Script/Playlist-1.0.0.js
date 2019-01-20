var trackList = document.getElementById('trackList');
var audio = document.getElementsByClassName('audioTrack');
var btnPlay = document.getElementsByClassName('play');
var btnPause = document.getElementsByClassName('pause');
var contador = 0;
function webPlayer(){
  var target = event.target;
  var dataset = target.dataset;
  var type = dataset.type;
  var value = dataset.value;
  for (var i = 0; i <= audio.length; i++) {
    var contador = i;
  }
  var stop = parseFloat(contador) -1;
  if (type) {
    if (type === "play") {
      var outAdio = parseFloat(value) -1;
      console.log(outAdio);
      audio[outAdio].play();
      btnPlay[outAdio].style.display = 'none';
      btnPause[outAdio].style.display = 'inline-block';
    }
    if (type === "pause") {
      var inAudio = parseFloat(value) -1;
      console.log(inAudio);
      audio[inAudio].pause();
      btnPause[inAudio].style.display = 'none';
      btnPlay[inAudio].style.display = 'inline-block';
    }
}
}

trackList.addEventListener('click', webPlayer);
