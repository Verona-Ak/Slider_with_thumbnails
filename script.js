// $('.single-item').slick();
$(document).ready(function(){
    const controlls = document.querySelectorAll('.slider-controll__item'),
        emptyTopRight = document.querySelectorAll('.empty-top-right'),
        emptyBottomLeft = document.querySelectorAll('.empty-bottom-left');
    controllAction(controlls[0], 'empty-top-first', 'empty-bottom-first');



    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        adaptiveHeight: true,
        arrows: false,
        asNavFor: '.slider-controll__inner',
        infinite: true,
        autoplay: true
        
    });
    $('.slider-controll__inner').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: true,
        // vertical: false

    });

    

    $('.slider-controll__inner').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        clear();
        controllAction(controlls[nextSlide], 'empty-top', 'empty-bottom');
    });

    function controllAction(controll, top, bottom) {
        for(let i = 0; i < emptyTopRight.length; i++) {
            if(controll === emptyTopRight[i].closest('.slider-controll__item')) {
                emptyTopRight[i].classList.add(top);
                emptyBottomLeft[i].classList.add(bottom);
            }
        }
    }

    function clear() {
        for(let i = 0; i < emptyTopRight.length; i++) {
            emptyTopRight[i].classList.remove('empty-top');
            emptyTopRight[i].classList.remove('empty-top-first');
            emptyBottomLeft[i].classList.remove('empty-bottom');
            emptyBottomLeft[i].classList.remove('empty-bottom-first');

        }
    }
});