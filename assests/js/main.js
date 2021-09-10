$(document).ready(() => {

    $('.loader').animate({
        opacity: '0',
        'z-index': '-1'
    },1000)

    // Generic Functions
    let mq = window.matchMedia('(max-width: 768px');

    const reduceHeight = function () {
        $('nav').css('height', '70px');
        $('.list-item').css('height', '70px');
    }

    const maxHeight = function () {
        $('nav').css('height', '90px');
        $('.list-item').css('height', '90px');
    }

    const mobileNav = function () {
        $('.nav-toggler').click(function () {
            $('.menu-list').slideToggle(1000);
            $(this).children().toggleClass('icon-close');
            $(this).children().toggleClass('icon-bars');
        })
    }

    // open and close colorbox
    const toggleOpen = function () {
        $('.icon-cogs').click(function () {
            let colorBoxWidth = $('.colorbox').innerWidth();

            $(this).toggleClass('icon-close');
            $(this).toggleClass('icon-cogs');

            if($('.colorbox').css('right') === '0px'){
                $('.colorbox').animate({
                    right: `-${colorBoxWidth}px`
                }, 500)
            }else{
                $('.colorbox').animate({
                    right: `0px`
                }, 500)
            }
        })
        
    }

    // go up button
    const goUp = function () {
        $(window).scroll(function () {
            let windowScrollTop = $(window).scrollTop();

            if(windowScrollTop > 70){
                $('.goup').css({
                    opacity: '0.6',
                    visibility: ' visible'
                })
            }else{
                $('.goup').css({
                    opacity: '0',
                    visibility: ' hidden'
                })
            }
        })

        $('.goup').click(function () {
            let homeOffset = $('#home').offset().top;

            $('body, html').animate({
                scrollTop: homeOffset
            }, 1500);

        });
    }
    // Generic Functions

    //-------------------------------------------------- Home Page -----------------------------------------------
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

        const navScroll = function () {
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
        }

        if (!mq.matches) {
            navScroll();
        } else {
            $('nav').css('background-color', '#fff');
            $('.logo a img').attr('src', 'assests/images/asset 0.png');
            mobileNav();
        }


        // Scroll to next section
        const scrollNext = function () {
            let nextSectionOffset = $('#next').offset().top;

            $('.scroll-button').click(function () {
                $('body, html').animate({
                    scrollTop: nextSectionOffset
                }, 1500)
            });
        }

        // Colors
        const colors = function () {
            let colorsList = document.querySelectorAll('.color');

            colorsList.forEach((color) => {
                let data = $(color).attr('data-color');

                $(color).css('background-color', data);

                $(color).click(function () {
                    $('.list-item.active').css('border-color', data);
                    $('.list-item.active .list-link').css('color', data);
                    $('.brown-button').css('background-color', data)
                    $('.icon').css('color', data);
                    $('.contact-icon').css('background-color', data);
                    $('.developer span').css('color', data);
                    $('.icon-bars').css('color', data);

                    $('.brown-button').hover(() => {
                        $('.brown-button').css('background-color', '#fff');
                    }, () => {
                        $('.brown-button').css('background-color', data)
                    })
                });
            });
        }

    
        scrollNext();
        toggleOpen();
        colors();
        goUp();
    }
    //-------------------------------------------------- Home Page -----------------------------------------------


    //-------------------------------------------------- About Page -----------------------------------------------
    if ($('.about-page').length > 0) {
        // Change Height of Navbar on scroll
        if (!mq.matches) {
            $(window).scroll(function () {
                let windowScrollTop = $(window).scrollTop();

                if (windowScrollTop > 40) {
                    reduceHeight();
                } else {
                    maxHeight();
                }
            });
        } else {
            mobileNav();
        }

        // Counter
        const count = function () {
            let counterItems = document.querySelectorAll('.counter');

            counterItems.forEach(counter => {
                counter.textContent = 0;

                function updateCount() {
                    let target = counter.getAttribute('data-number');
                    let c = Number(counter.textContent);
                    let increment = target / 3000;

                    if (c < target) {
                        counter.innerText = `${Math.ceil(c + increment)}`
                        setTimeout(updateCount, 1)
                    } else {
                        counter.innerText = target;
                    }
                }

                $(window).scroll(function () {
                    let windowScrollTop = $(window).scrollTop();
                    let counterOffset = $('.counter-section').offset().top;

                    if (windowScrollTop >= counterOffset - 100) {
                        updateCount();
                    }
                });
            })
        }

        // Colors
        const colors = function () {
            let colorsList = document.querySelectorAll('.color');

            colorsList.forEach((color) => {
                let data = $(color).attr('data-color');

                $(color).css('background-color', data);

                $(color).click(function () {
                    $('.list-item.active').css('border-color', data);
                    $('.list-item.active .list-link').css('color', data);
                    $('.icon').css('color', data);
                    $('.counter-section').css('background-color', data)
                    $('.developer span').css('color', data);
                    $('.icon-bars').css('color', data)
                });
            });
        }

        count();
        toggleOpen();
        colors();
        goUp();
    }
    //-------------------------------------------------- About Page -----------------------------------------------

    //-------------------------------------------------- Our Offer Page -----------------------------------------------
    if ($('.offer-page').length > 0) {
        // Change Height of Navbar on scroll
        if (!mq.matches) {
            $(window).scroll(function () {
                let windowScrollTop = $(window).scrollTop();

                if (windowScrollTop > 40) {
                    reduceHeight();
                } else {
                    maxHeight();
                }
            });
        } else {
            mobileNav();
        }

        // Colors
        const colors = function () {
            let colorsList = document.querySelectorAll('.color');

            colorsList.forEach((color) => {
                let data = $(color).attr('data-color');

                $(color).css('background-color', data);

                $(color).click(function () {
                    $('.list-item.active').css('border-color', data);
                    $('.list-item.active .list-link').css('color', data);
                    $('.developer span').css('color', data);
                    $('.icon-bars').css('color', data);

                    $('.offer-intro p a').hover(function () {
                        $('.offer-intro p a').css('color', data);
                    }, function () {
                        $('.offer-intro p a').css('color', '#fff');
                    })
                });
            });
        }

        goUp();
        toggleOpen();
        colors();
    }
    //-------------------------------------------------- Our Offer Page -----------------------------------------------


    //-------------------------------------------------- Gallery Page -----------------------------------------------
    if ($('.gallery-page').length > 0) {
        // Change Height of Navbar on scroll
        if (!mq.matches) {
            $(window).scroll(function () {
                let windowScrollTop = $(window).scrollTop();

                if (windowScrollTop > 40) {
                    reduceHeight();
                } else {
                    maxHeight();
                }
            });
        } else {
            mobileNav();
        }

        // Modal

        const modal = function () {
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
                $(image).click(function () {
                    let imageSrc = $(image).children('img').attr('src');

                    $('.image-container').css('display', 'flex');
                    $('body, html').css('overflow', 'hidden');
                    $('.image-container .photo img').attr('src', imageSrc);
                })
            })

            function next() {
                index++;
                if (index > imagesSrcArr.length - 1) {
                    index = 0;
                    $('.image-container .photo img').attr('src', imagesSrcArr[index]);
                } else {
                    $('.image-container .photo img').attr('src', imagesSrcArr[index]);
                }
            }

            function prev() {
                index--;
                if (index < 0) {
                    index = imagesSrcArr.length - 1;
                    $('.image-container .photo img').attr('src', imagesSrcArr[index]);
                } else {
                    $('.image-container .photo img').attr('src', imagesSrcArr[index]);
                }
            }

            function close() {
                $('.image-container').css('display', 'none');
                $('body, html').css('overflow', 'auto');
            }



            $(nextBtn).click(function () {
                next();
            });

            $(prevBtn).click(function () {
                prev();
            });

            $(closeBtn).click(function () {
                close();
            });

            $(document).keydown(function (e) {
                if (e.code === 'Escape') {
                    close();
                }
                if (e.code === 'ArrowRight') {
                    next();
                }
                if (e.code === 'ArrowLeft') {
                    prev();
                }
            })

        }

        // Colors
        const colors = function () {
            let colorsList = document.querySelectorAll('.color');

            colorsList.forEach((color) => {
                let data = $(color).attr('data-color');

                $(color).css('background-color', data);

                $(color).click(function () {
                    $('.list-item.active').css('border-color', data);
                    $('.list-item.active .list-link').css('color', data);
                    $('.developer span').css('color', data);
                    $('.icon-bars').css('color', data);
                });
            });
        }

        modal();
        goUp();
        toggleOpen();
        colors();
    }
    //-------------------------------------------------- Gallery Page -----------------------------------------------

    //-------------------------------------------------- Contact Page -----------------------------------------------
    if ($('.contact-page').length > 0) {
        // Change Height of Navbar on scroll
        if (!mq.matches) {
            $(window).scroll(function () {
                let windowScrollTop = $(window).scrollTop();

                if (windowScrollTop > 40) {
                    reduceHeight();
                } else {
                    maxHeight();
                }
            });
        } else {
            mobileNav();
        }

        // Colors
        const colors = function () {
            let colorsList = document.querySelectorAll('.color');

            colorsList.forEach((color) => {
                let data = $(color).attr('data-color');

                $(color).css('background-color', data);

                $(color).click(function () {
                    $('.list-item.active').css('border-color', data);
                    $('.list-item.active .list-link').css('color', data);
                    $('.developer span').css('color', data);
                    $('.icon-bars').css('color', data);
                    $('.icon').css('background-color', data);
                    $('.form-button button').css('background-color', data);

                    $('.contact-intro p a').hover(function () {
                        $('.contact-intro p a').css('color', data);
                    }, function () {
                        $('.contact-intro p a').css('color', '#fff');
                    })

                    $('input, textarea').focus(function() {
                        $(this).css('border-color', data)
                    });

                    $('input, textarea').blur(function() {
                        $(this).css('border-color', '#e6e6e6')
                    });

                    $('.form-button button').hover( () => {
                        $('.form-button button').css('background-color', '#333');
                    }, () => {
                        $('.form-button button').css('background-color', data);
                    })
                });
            });
        }


        goUp();
        toggleOpen();
        colors();
    }
})