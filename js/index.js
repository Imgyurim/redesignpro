window.onload = function(){
  
    // 배너슬라이드
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

    // 컨셉 슬라이드
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

    // sns 슬라이드
    let station4 = new Swiper(".sns .station4",{
      loop:true,
      spaceBetween:10,
        autoplay:true,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          220: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
        },
     });

    //  서브페이지1-1 슬라이드 top
     let station5 = new Swiper(".station5",{
      loop:true,
      direction:"horizontal",
        navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
     });

     //  서브페이지1-1 슬라이드 bottom
     let station6 = new Swiper(".station6",{
      loop:true,
      direction:"horizontal",
        navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
       breakpoints: {
        220: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
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


         document.cookie = "safeCookie1=foo; SameSite=Lax"; 
         document.cookie = "safeCookie2=foo"; 
         document.cookie = "crossCookie=bar; SameSite=None; Secure";
}
 