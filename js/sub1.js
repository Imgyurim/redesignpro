$(document).ready(function(){
    // 페이지 스크롤
    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let pagetop = $(".station1").offset().top
        if(winst>=pagetop){
            $(".station1").addClass("on")
        }else{
            $(".station1").removeClass("on")
        }
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

    })
    

    $("main .tab>li").click(function(){
        let idx = $(this).index()
        $("main .tab>li").removeClass("on")
        $(this).addClass("on")

        $(".bg_category > .bg_items").removeClass("on")
        $(".bg_category > .bg_items").eq(idx).addClass("on")

        $(".maincontent > .items").removeClass("on")
        $(".maincontent > .items").eq(idx).addClass("on")

    });

    $("main .menu_img>li").click(function(){
        let idx = $(this).index()
        $("main .menu_img>li").removeClass("on")
        $(this).addClass("on")

        $(".top_img > li").removeClass("on")
        $(".top_img > li").eq(idx).addClass("on")
    });

    $("main .slide> .btnNext").click(function(e){
        let count = 0;
        e.preventDefault() //클릭했을 때 a태그의 기본기능을 억제(스크롤바가 가장위로 올라가는 현상 방지)
        count++;
        if(count>6){
            count=6;
        }
        $(".train").css("transform","translateX("+(count*-16)+"%)")
    });

    // let S1tab = document.querySelectorAll(".subpage1 .tap>li");
    // let S1con = document.querySelectorAll(".subpage1 .content>li");
    $(".sub1  .tap>li").click(function(){
         let idx = $(this).index()
        $(".sub1 .tap>li").removeClass("on")
        $(this).addClass("on")

        $(".sub1 .content>li").removeClass("on")
        $(".sub1 .content>li").eq(idx).addClass("on")

        let liHeight = $(".content>li.on").height()
        $(".content").height(liHeight)

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

    $(".subpage11 .tab>li").click(function(){
        let idx = $(this).index()
        $(".subpage11 .tab>li").removeClass("on")
        $(this).addClass("on")
        
        $(".subpage11 .content_items > .content_list").removeClass("on")
        $(".subpage11 .content_items > .content_list").eq(idx).addClass("on")
       
        $(".subpage11 .bot_list  .bot_items").removeClass("on")
        $(".subpage11 .bot_list  .bot_items").eq(idx).addClass("on")

        $(".subpage11 .list > .list_top").removeClass("on")
        $(".subpage11 .list > .list_top").eq(idx).addClass("on")
    });
       
    //    서브페이지3 탭메뉴
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