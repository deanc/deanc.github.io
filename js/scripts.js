// $(function () {
//
//     $(".blog-nav-toggle").click(function () {
//         $(".blog-nav").slideToggle();
//     });
//
//     $(".thumbnail").click(function () {
//
//         if($(window).width() < 768) {
//             window.location.href = $(this).attr("src").replace("-thumbnail.jpg",".jpg");;
//         }
//
//         // clear the slideshow
//         var slideshow = $("#modal-window-slideshow .carousel-inner");
//         slideshow.empty();
//
//         // get the carousel
//         var carousel = $('#portfolio-carousel');
//
//         // find all items ...
//         var holder = $(this).closest(".portfolio-items");
//         var images = $(".thumbnail", holder);
//         $(images).each(function (k, item) {
//             var newSrc = $(item).attr("src").replace("-thumbnail.jpg",".jpg");
//             slideshow.append(renderCarouselItem(newSrc, k));
//         });
//
//         carousel.append("<ol class='carousel-indicators'></ol>");
//         var indicators = $(".carousel-indicators");
//         indicators.empty();
//         carousel.find(".carousel-inner").children(".item").each(function(index) {
//             (index === 0) ?
//                 indicators.append("<li data-target='#portfolio-carousel' data-slide-to='"+index+"'></li>") :
//                 indicators.append("<li data-target='#portfolio-carousel' data-slide-to='"+index+"'></li>");
//         });
//
//         carousel.carousel();
//         $('#modal-window-slideshow').modal({show:true});
//     });
//
//     $('a[data-slide="prev"]').click(function() {
//         $('#portfolio-carousel').carousel('prev');
//     });
//
//     $('a[data-slide="next"]').click(function() {
//         $('#portfolio-carousel').carousel('next');
//     });
//
//     $(document).keydown( function(eventObject) {
//         if(eventObject.which==37) {//left arrow
//             $('#portfolio-carousel a[data-slide="prev"]').click();//emulates click on prev button
//         } else if(eventObject.which==39) {//right arrow
//             $('#portfolio-carousel a[data-slide="next"]').click();//emulates click on next button
//         }
//     } );
//
//     //$('[data-toggle="tooltip"]').tooltip(options)
//
//
//     function renderCarouselItem(img, index) {
//         var first = '';
//         if(index == 0) { first = ' active'; }
//         return '<div class="item' + first + '"><img src="' + img + '" /></div>';
//     }
// });

window.onload = function () {

    var thumbnails = document.querySelectorAll(".thumbnail");
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener("click", function(e) {

            var portfolioItems = e.target.parentNode.parentNode;
            var allImages = portfolioItems.querySelectorAll("img");

            var slides = "";
            for(var j = 0; j < allImages.length; j++) {
                slides += '<div class="Wallop-item"><img src="' + allImages[j].src.replace("-thumbnail.jpg",".jpg") + ' "/></div>';
            }

            var sliderTemplate = document.querySelector("#portfolio-slider").innerHTML;
            var output = Mustache.render(sliderTemplate, {
                items: slides
            });



            picoModal({
                content: output,
                width: "95%",
                overlayStyles: {
                    backgroundColor: "#000",
                    opacity: 0.75
                }
            }).afterCreate(function (modal) {
                var wallopEl = document.querySelector('.Wallop');
                var slider = new Wallop(wallopEl);
            }).show();

            e.preventDefault();
        });
    }

}