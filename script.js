$(() => {
    let counter = 0;

    const chevronR = $('.fa-chevron-right')
    const chevronL = $('.fa-chevron-left')
    const img= $('.slideshowImg')
    const imgs= $('.slideshow img')

    const size = img.eq(0).innerWidth() +16;
    
    const interval =setInterval(() => {
        next()
    }, 2000);
    let clicked = false;

    img.click(() =>{
        if(clicked) {
            interval =setInterval(() => {
                next()
            }, 2000);

            clicked=false;
        }else {
            clearInterval(interval)
            clicked=true;

        }

    })

    chevronR.click(next)

    function next() {
      
            if(counter == imgs.length-1) {
                counter = 0;
            }else {
                counter++;
            }
            img.css('transform','translateX('+(-size * counter)+'px')
    
        
    }

    chevronL.click(() => {
        if(counter == 0) {
            counter = imgs.length-1;
        }else {
            counter--;
        }
        img.css('transform','translateX('+(-size * counter)+'px')

    })
    
})
