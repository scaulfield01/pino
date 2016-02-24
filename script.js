$( document ).ready(function() {

  var recordArray = [];

  $(".note").click(function() {
    var noteToPlayClick = $(this).attr("id") + ".wav"
    recordArray.push(noteToPlayClick)
    notePlayer(noteToPlayClick)
    console.log(recordArray)
  });

  $(".record-play").click(function(){
    recordPlay(recordArray)
  })


  function recordPlay(recordArray){
    for (var i = 0; i < recordArray.length; i++) {
      notePlayer(recordArray[i])
    };
  }

  function notePlayer(noteToPlay){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sounds/'+ noteToPlay);
    audioElement.play();
  }
})