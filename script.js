$( document ).ready(function() {
  $('.note').click(function() {
    var noteToPlay = $(this).attr("id") + ".wav"
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sounds/'+ noteToPlay);
    audioElement.play();
  });
})