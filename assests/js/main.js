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
})