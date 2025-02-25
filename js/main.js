// 탑으로 이동하는 버튼
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('#top-btn').fadeIn();
    } else {
      $('#top-btn').fadeOut();
    } 
  });

  $("#top-btn").click(function() {
    $('html, body').animate({
      scrollTop : 0
    }, 400);
      return false;
  });
});

// 좋아요 스크랩
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

// 로그인 이벤트
$(function(){
  $("#login-down").click(function(){
    $(".login").addClass("login-active")
  });

  $("#login-up").click(function(){
    $(".login").removeClass("login-active")
  });
})
