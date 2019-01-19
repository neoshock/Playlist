  var buttonPlay = document.getElementsByClassName('playButton');
  var buttonPause = document.getElementsByClassName('pauseButton');
  var tracks = ["SN.mp3","SN1.mp3","SN2.mp3","SN3.mp3"];
  var trackPlay = new Audio();

  //Track 1
  buttonPlay[0].addEventListener('click', function() {
    trackPlay.src = tracks[0];
    trackPlay.play();
    buttonPlay[0].style.display = 'none';
    buttonPause[0].style.display = 'inline-block';
    buttonPause[2].style.display = 'none';
  });

  buttonPause[0].addEventListener('click', function() {
    trackPlay.src = tracks[0];
    trackPlay.pause();
    buttonPause[0].style.display = 'none';
    buttonPlay[0].style.display = 'inline-block';
  });

  //Track 2
  buttonPlay[1].addEventListener('click', function() {
    trackPlay.src = tracks[1];
    trackPlay.play();
    buttonPlay[1].style.display = 'none';
    buttonPause[1].style.display = 'inline-block';
  });

  buttonPause[1].addEventListener('click', function() {
    trackPlay.src = tracks[1];
    trackPlay.pause();
    buttonPause[1].style.display = 'none';
    buttonPlay[1].style.display = 'inline-block';
  });

  //Track 3
  buttonPlay[2].addEventListener('click', function() {
    trackPlay.src = tracks[2];
    trackPlay.play();
    buttonPlay[2].style.display = 'none';
    buttonPause[2].style.display = 'inline-block';
  });

  buttonPause[2].addEventListener('click', function() {
    trackPlay.src = tracks[2];
    trackPlay.pause();
    buttonPause[2].style.display = 'none';
    buttonPlay[2].style.display = 'inline-block';
  });

  //Track 4
  buttonPlay[3].addEventListener('click', function() {
    trackPlay.src = tracks[3];
    trackPlay.play();
    buttonPlay[3].style.display = 'none';
    buttonPause[3].style.display = 'inline-block';
  });

  buttonPause[3].addEventListener('click', function() {
    trackPlay.src = tracks[3];
    trackPlay.pause();
    buttonPause[3].style.display = 'none';
    buttonPlay[3].style.display = 'inline-block';
  });
