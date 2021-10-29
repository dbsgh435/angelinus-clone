$(function() {
  setInterval(function() {
    $(".slide").animate({
      left : "-=100%"
    }, function() {
      $(".slide").children().first().appendTo(this)
    })
  },3000)
    

  $(".gnb").mouseover(function() {
    $(".lnb").stop().slideDown(),
    $(".lnb-bg").stop().removeClass("blind"),
    $(".lnb-bg").stop().show()
  })
  $(".gnb").mouseout(function() {
    $(".lnb").stop().hide(),
    $(".lnb-bg").stop().addClass("blind")
  })
})