$(document).ready(function(){

    let slider1 = new Swiper(".station_sig",{
        loop: true,
        breakpoints: {
            220: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
          },
    })

    let slider2 = new Swiper(".station_bakery",{
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
