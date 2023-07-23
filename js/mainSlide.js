$(document).ready(function(){

    let slider1 = new Swiper(".station_sig",{
        loop: true,
        loopedSlides: 4,
        breakpoints: {
            220: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
          }
    })

    let slider2 = new Swiper(".station_bakery",{
        loop: true,
        breakpoints: {
            220: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
          },
    })

    let slider3 = new Swiper(".station_coffee",{
        loop: true,
        breakpoints: {
            220: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
          },
    })
    
    let slider4 = new Swiper(".station_ade",{
        loop: true,
        breakpoints: {
            220: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
          },
    })

    let slider5 = new Swiper(".station_doubleMilk",{
        loop: true,
        breakpoints: {
            220: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
          },
    })

    let slider6 = new Swiper(".station_collaboration",{
        loop: true,
        breakpoints: {
            220: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
          },
    })
    

})
