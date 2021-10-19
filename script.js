$(() => {
    let counter = 0;

    const chevronR = $('.fa-chevron-right')
    const chevronL = $('.fa-chevron-left')
    const img= $('.slideshowImg')
    const imgs= $('.slideshow img')

    const size = img.eq(0).innerWidth() +16;
    
    chevronR.click(() => {
        if(counter == imgs.length-1) {
            counter = 0;
        }else {
            counter++;
        }
        img.css('transform','translateX('+(-size * counter)+'px')

    })
    chevronL.click(() => {
        if(counter == 0) {
            counter = imgs.length-1;
        }else {
            counter--;
        }
        img.css('transform','translateX('+(-size * counter)+'px')

    })
    
})