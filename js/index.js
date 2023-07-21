window.onload = function(){
  
    // 메인페이지 station1
    let station1 = new Swiper(".station1",{
     loop:true,
     direction:"horizontal",
     pagination: {
         el: '.swiper-pagination',
         type: 'bullets', 
         clickable:true
       },
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       autoplay:true,
       speed:10
    });

    // 메인페이지 station2
    let station2 = new Swiper(".station2",{
      effect : 'cube',
      cubeEffect : {
        slideShadows : true, // 슬라이더를 돌릴때 흐릿해 지는 그림자 표시 여부
        shadow : false, // 슬라이더 밑의 그림자 표시 여부
        shadowOffset : 20, // 그림자 위치, 수치가 클수록 아래로 내려감
        shadowScale : 0.1, // 그림자 크기, 수치가 클수록 그림자 커짐
      },
      loop:true,
      direction:"horizontal",
      pagination: {
          el: '.swiper-pagination',
          type: 'bullets', 
          clickable:true
        },

    });

    // sns
    let station4 = new Swiper(".sns .station4",{
      loop:true,
      spaceBetween:10,
        slidesPerView: 4,
        autoplay:true,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
     });

    //  서브페이지1_1
     let station5 = new Swiper(".station5",{
      loop:true,
      direction:"horizontal",
        navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
     });

     let station6 = new Swiper(".subpage11 .station6",{
      loop:true,
      direction:"horizontal",
      slidesPerView: 4,
        navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
     });

    // 모바일 메뉴
     let menu = false;
     $(".btnMoMenu").click(function(){
         if(menu == false){
             $(".btnMoMenu").addClass("close")
             $(".moMenu").addClass("show")
             menu = true
         }else{
             $(".btnMoMenu").removeClass("close")
             $(".moMenu").removeClass("show")
             menu = false
         }
         }) 



}
 