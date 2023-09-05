$(document).ready(function(){
    // 메인페이지 페이지 스크롤
    $(window).scroll(function(){
        // let winst = $(window).scrollTop()
        // let s2top = $(".station2").offset().top
        // if(winst>=s2top){
        //     $(".station2").addClass("on")
        // }else{
        //     $(".station2").removeClass("on")
        // }
    })
    $("main>div").click(function(){})


        $("main>div").on("wheel DOMMouseScroll",function(event){
        let E = event.originalEvent
        let delta = 0;
        if(E.detail){
        delta = E.detail * -40
        }else{
        delta = E.wheelDelta
    }

    if(delta<0){
        //마우스 휠을 내렸을 때
        //  console.log($(this).next().length)
        let windowWidth = $(window).width()
        if(windowWidth>=768){
            if($(this).next().length!=0){
                let posTop = $(this).next().offset().top
            $("html,body").stop().animate({scrollTop:posTop-95},1000)
            }
        }

        }else{
        //마우스 휠을 올렸을 때
        //  console.log($(this).prev().length)
        let windowWidth = $(window).width()
        if(windowWidth>=768){
            if($(this).prev().length!=0){
                let posTop = $(this).prev().offset().top
                $("html,body").stop().animate({scrollTop:posTop-95},1000)
            }
        }    
    }
    return

    }),
    

// category

    $(".maintab>li").click(function(){
        let idx = $(this).index()
        $(".bg_category").css("transform","translateX("+(-16.6667*idx)+"%)")

        $(".maintab>li").removeClass("on")
        $(this).addClass("on")

        

        $(".maincontent>.items").removeClass("on")
        $(".maincontent>.items").eq(idx).addClass("on")

    });

    // $(".menu_img>li").click(function(){
    //     let idx = $(this).index()
    //     $(".menu_img>li").removeClass("on")
    //     $(this).addClass("on")

    //     $(".topping_img > li").removeClass("on")
    //     $(".topping_img > li").eq(idx).addClass("on")
    // });

    // 협업 슬라이드
    $(".slide> .btnNext").click(function(e){
        let count = 0;
        e.preventDefault() //클릭했을 때 a태그의 기본기능을 억제(스크롤바가 가장위로 올라가는 현상 방지)
        count++;
        if(count>6){
            count=6;
        }
        $(".train").css("transform","translateX("+(count*-16)+"%)")
    });

    let count = 0;
    $(".slide .btnNext").click(function(e){
     e.preventDefault()
     count++
     //기차가 왼쪽으로 500픽셀
     if(count>5){count=0}
     $(".slide_R .train").css("transform","translateX("+(-16.666*count)+"%)")
     $(".slide_L .train").css("transform","translateX("+(-16.666*count)+"%)")
 
     // moveSlider(count)
     })
     $(".slide .btnPrev").click(function(e){
         e.preventDefault()
         count--
         if(count<0){count=5} //예외처리
         // moveSlider(count)
         
     });
 

    // 서브페이지1
    $(".subtaplist>li").click(function(){
         let idx = $(this).index()
        $(".subtaplist>li").removeClass("on")
        $(this).addClass("on")

        $(".subcon>li").removeClass("on")
        $(".subcon>li").eq(idx).addClass("on")

        let liHeight = $(".subcon>li.on").height()
        $(".subcon").height(liHeight)

    });

      //각각의 메뉴리스트를 클릭했을 때 해당되는 영역으로 부드럽게 스크롤 이동될 수 있도록
    $("nav li>a").click(function(){
        e.preventDefault() // a태그가 갖고있는 기본기능을 제거

        let target = $(this).attr("href")
        //클릭한 a태그의 href속성에 저장된 속성값이 리턴되어 target변수에 저장된다.(문자데이터형태로 "#s1" "#s2" ...)
        let target_top = $(target).offset().top
        // $("html,body").animate({scrollTop:target_top},1000)    
        moveScroll({top:target_top,speed:1000})
    })

    // 서브페이지1_1
    $(".sub11tab>li").click(function(){
        let idx = $(this).index()
        $(".sub11tab>li").removeClass("on")
        $(this).addClass("on")

        $(".content2_items > .content2_list").removeClass("on")
        $(".content2_items > .content2_list").eq(idx).addClass("on")
       
        $(".bot_list .bot_items").removeClass("on")
        $(".bot_list .bot_items").eq(idx).addClass("on")

        $(".content_items > .items_list").removeClass("on")
        $(".content_items > .items_list").eq(idx).addClass("on")

        $(".multi_station > div").removeClass("on")
        $(".multi_station > div").eq(idx).addClass("on")



        // $(".aa>li").removeClass("on")
        // $(".aa>li").eq(idx).addClass("on")
    });
       
    // 서브페이지3 탭메뉴
    $(".tab3>li").click(function(){
        let idx = $(this).index()
    $(".tab3>li").removeClass("on")
    $(this).addClass("on")

    $(".sub3content .items").removeClass("on")
    $(".sub3content .items").eq(idx).addClass("on")
    });

    // 서브페이지3 초기비용 탭메뉴
    $(".tabTip_b>li").click(function(){
        let idx = $(this).index()
        $(".tabTip_b>li").removeClass("on")
        $(this).addClass("on")

        $(".cost_text > li").removeClass("on")
        $(".cost_text > li").eq(idx).addClass("on")


    });


    






})