$(document).ready(function(){
    let idx = location.href.split("?")[1].split("=")[1]
    console.log(idx)
  
    
    $(".subtaplist>li").removeClass("on")
    $(".subtaplist>li").eq(idx).addClass("on")
  
    $(".subcon>li").removeClass("on")
    $(".subcon>li").eq(idx).addClass("on")
  
    let liHeight = $(".subcon>li.on").height()
    $(".subcon").height(liHeight)
  })