$(document).ready(() => {

    const reduceHeight = function(){
        $('nav').css('height', '70px');
        $('.list-item').css('height', '70px');
    }

    const maxHeight = function () {
        $('nav').css('height', '90px');
        $('.list-item').css('height', '90px');
    }

    if ($('.home-page').length > 0) {
        const listItems = document.querySelectorAll('.list-item');
        // Add Scroll class to list items
        const addScroll = function () {
            listItems.forEach((item) => {
                $(item).addClass('scroll');
            })
        }

        // Remove scroll Class from list items
        const removeScroll = function () {
            listItems.forEach(item => {
                $(item).removeClass('scroll')
            })
        }

        // Change Navbar background color on scroll and change the logo
        $(window).scroll(() => {
            let windowScrollTop = $(window).scrollTop();

            if (windowScrollTop > 40) {
                $('nav').css('background-color', '#fff');
                reduceHeight();

                $('.logo a img').attr('src', 'assests/images/asset 0.png');

                
                addScroll();
            } else {
                $('nav').css('background-color', 'transparent');
                maxHeight();

                $('.logo a img').attr('src', 'assests/images/asset 1.png');

                
                removeScroll();
            }
        });

        // Scroll to next section
        const scrollNext = function () {
            let nextSectionOffset = $('#next').offset().top;

            $('.scroll-button').click(function () {
                $('body, html').animate({
                    scrollTop: nextSectionOffset
                }, 1500)
            });
        }

        scrollNext();
    }

    if($('.about-page').length > 0){
        // Change Height of Navbar on scroll
        $(window).scroll(function () {
            let windowScrollTop = $(window).scrollTop();

            if(windowScrollTop > 40) {
                reduceHeight();
            }else{
                maxHeight();
            }
        });

        // Counter
        const count = function () {
            let counterItems = document.querySelectorAll('.counter');

            counterItems.forEach(counter => {
                counter.textContent = 0;

                function updateCount() {
                    let target = counter.getAttribute('data-number');
                    let c = Number(counter.textContent);
                    let increment = target / 1000;

                    if (c < target){
                        counter.innerText = `${Math.ceil(c + increment)}`
                        setTimeout(updateCount, 1)
                    }else{
                        counter.innerText = target;
                    }
                }

                $(window).scroll(function() {
                    let windowScrollTop = $(window).scrollTop();
                    let counterOffset = $('.counter-section').offset().top;

                    if(windowScrollTop >= counterOffset - 100){
                        updateCount();
                    }
                });
            })
        }

        count();
    }

    if($('.offer-page').length > 0){
        $(window).scroll(function () {
            let windowScrollTop = $(window).scrollTop();

            if(windowScrollTop > 40) {
                reduceHeight();
            }else{
                maxHeight();
            }
        });
    }

    if($('.gallery-page').length > 0){
        $(window).scroll(function () {
            let windowScrollTop = $(window).scrollTop();

            if(windowScrollTop > 40) {
                reduceHeight();
            }else{
                maxHeight();
            }
        });

        // Modal

        const modal = function(){
            let nextBtn = document.querySelector('.arrow-right');
            let prevBtn = document.querySelector('.arrow-left');
            let closeBtn = document.querySelector('.close');
            let imagesList = document.querySelectorAll('.gallery-image');
            let imagesArr = Array.from(imagesList);
            let images = document.querySelectorAll('.image');
            let imagesSrcArr = [];
            let index = 0;

            images.forEach(image => {
                let imageSrc = $(image).attr('src');
                imagesSrcArr.push(imageSrc);
            })

            imagesArr.forEach(image => {
                $(image).click(function(){
                    let imageSrc = $(image).children('img').attr('src');

                    $('.image-container').css('display', 'flex');
                    $('body, html').css('overflow', 'hidden');
                    $('.image-container .photo img').attr('src', imageSrc);   
                }) 
            })

            function next() {
                index++;
                if(index > imagesSrcArr.length - 1){
                    index = 0;
                    $('.image-container .photo img').attr('src', imagesSrcArr[index]);
                }else{
                    $('.image-container .photo img').attr('src', imagesSrcArr[index]);
                }
            }

            function prev() {
                index--;
                if(index < 0){
                    index = imagesSrcArr.length - 1;
                    $('.image-container .photo img').attr('src', imagesSrcArr[index]);
                }else{
                    $('.image-container .photo img').attr('src', imagesSrcArr[index]);
                }
            }

            function close(){
                $('.image-container').css('display', 'none');
                $('body, html').css('overflow', 'auto');
            }

            

            $(nextBtn).click(function (){
                next();
            });

            $(prevBtn).click(function (){
               prev();
            });

            $(closeBtn).click(function (){
                close();
            });

            $(document).keydown(function(e) {
                if(e.code === 'Escape'){
                    close();
                }
                if(e.code === 'ArrowRight'){
                    next();
                }
                if(e.code === 'ArrowLeft'){
                    prev();
                }
            })
            
        }

        modal();
    }
})