setInterval(function() {
  $(".slide").animate({
    left : "-=100%"
  }, function() {
    $(".slide").children().first().appendTo(this)
  })
},3000)