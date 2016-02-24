$( document ).ready(function() {
  // $(".note").click(function(){
  //   alert($(this).attr("id"))
  // })

// solution from online
        var audioElement = document.createElement('audio');

        //Change the resource to a local wav file repo
        audioElement.setAttribute('src', 'http://www.uscis.gov/files/nativedocuments/Track%2093.mp3');

        //AUTO PLAY NOT NEEDED
        // audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()
        //NO BACK END SO NOT NEEDED TO GET
        // $.get();
        // LOAD not not necssary
        // audioElement.addEventListener("load", function() {
        //     audioElement.play();
        // }, true);

// now notes will play the HTML element
        $('.note').click(function() {
            audioElement.play();
        });

        // $('.pause').click(function() {
        //     audioElement.pause();
        // });

})