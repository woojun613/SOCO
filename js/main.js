$(function(){
  $(".bookmark").click(function(){
    $(this).toggleClass("bookmark-off")
    $(this).toggleClass("bookmark-on")
  });

  $(".hreat").click(function(){
    $(this).toggleClass("hreat-off")
    $(this).toggleClass("hreat-on")
  });
})