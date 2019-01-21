var trackList = document.getElementById('trackList');
var audio = document.getElementsByTagName('audio');
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
    if (type === "play") {
      var outAdio = parseFloat(value) -1;
      console.log(outAdio);
      audio[outAdio].play();
      btnPlay[outAdio].style.display = 'none';
      btnPause[outAdio].style.display = 'inline-block';
      var tiempo;
      var segundos = 0;
    }
    if (type === "pause") {
      var inAudio = parseFloat(value) -1;
      console.log(inAudio);
      audio[inAudio].pause();
      btnPause[inAudio].style.display = 'none';
      btnPlay[inAudio].style.display = 'inline-block';
    }
    var stop = outAdio;
    function timer(){
      var seconds;
      seconds = 0;
      var time = segundos++;
      if (time > 20) {
        audio[stop].pause();
        btnPause[stop].style.display = 'none';
        btnPlay[stop].style.display = 'inline-block';
      }
    }
    setInterval(timer,1000);
}
}

trackList.addEventListener('click', webPlayer);
