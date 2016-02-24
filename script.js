$( document ).ready(function() {
  $(".note").click(function(){
    alert($(this).attr("id"))
  })
})