$(function () {

    $(".blog-nav-toggle").click(function () {
        $(".blog-nav").slideToggle();
    });

    $(".thumbnail").click(function () {

        if($(window).width() < 768) {
            window.location.href = $(this).attr("src").replace("-thumbnail.jpg",".jpg");;
        }

        // clear the slideshow
        var slideshow = $("#modal-window-slideshow .carousel-inner");
        slideshow.empty();

        // get the carousel
        var carousel = $('#portfolio-carousel');

        // find all items ...
        var holder = $(this).closest(".portfolio-items");
        var images = $(".thumbnail", holder);
        $(images).each(function (k, item) {
            var newSrc = $(item).attr("src").replace("-thumbnail.jpg",".jpg");
            slideshow.append(renderCarouselItem(newSrc, k));
        });

        carousel.append("<ol class='carousel-indicators'></ol>");
        var indicators = $(".carousel-indicators");
        indicators.empty();
        carousel.find(".carousel-inner").children(".item").each(function(index) {
            (index === 0) ?
                indicators.append("<li data-target='#portfolio-carousel' data-slide-to='"+index+"'></li>") :
                indicators.append("<li data-target='#portfolio-carousel' data-slide-to='"+index+"'></li>");
        });

        carousel.carousel();
        $('#modal-window-slideshow').modal({show:true});
    });

    $('a[data-slide="prev"]').click(function() {
        $('#portfolio-carousel').carousel('prev');
    });

    $('a[data-slide="next"]').click(function() {
        $('#portfolio-carousel').carousel('next');
    });

    $(document).keydown( function(eventObject) {
        if(eventObject.which==37) {//left arrow
            $('#portfolio-carousel a[data-slide="prev"]').click();//emulates click on prev button
        } else if(eventObject.which==39) {//right arrow
            $('#portfolio-carousel a[data-slide="next"]').click();//emulates click on next button
        }
    } );

    //$('[data-toggle="tooltip"]').tooltip(options)


    function renderCarouselItem(img, index) {
        var first = '';
        if(index == 0) { first = ' active'; }
        return '<div class="item' + first + '"><img src="' + img + '" /></div>';
    }
});