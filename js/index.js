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

    // sns슬라이드
    let station4 = new Swiper(".station4",{
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

    //  서브페이지1-1 위 슬ㄹㅏ이드
     let station5 = new Swiper(".station5",{
      loop:true,
      direction:"horizontal",
        navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
     });

     let station66 = new Swiper(".station66",{
      loop:true,
      direction:"horizontal",
        navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
     });

     //  서브페이지1-1 아래 슬라이드
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
        if($(".moMenu").hasClass("on")==false){
            $(".moMenu").addClass("on")
        }else{
            $(".moMenu").removeClass("on")
        }
        if($(this).hasClass("on")==false){
          $(this).addClass("on")
        }else{
          $(this).removeClass("on")
        }
    })
      $(".mobileMenuList>li .depi").click(function(){
          
          if($(this).parent().parent().hasClass("on")==true){
              $(this).parent().parent().css("height","50px")
              $(this).parent().parent().removeClass("on")
          }else{
              $(".mobileMenuList>li").css("height","50px")
              $(".mobileMenuList>li").removeClass("on")
              let li2depth = $(this).parent().parent().children("ul").children().length
              $(this).parent().parent().css("height",(li2depth+1)*50+"px")
              $(this).parent().parent().addClass("on")
          }
          return false;
      
      });

}


 