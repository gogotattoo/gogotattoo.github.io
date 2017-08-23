/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
 $.fn.randomize = function(selector){
     var $elems = selector ? $(this).find(selector) : $(this).children(),
         $parents = $elems.parent();

     $parents.each(function(){
         $(this).children(selector).sort(function(){
             return Math.round(Math.random()) - 0.5;
         // }). remove().appendTo(this); // 2014-05-24: Removed `random` but leaving for reference. See notes under 'ANOTHER EDIT'
         }).detach().appendTo(this);
     });

     return this;
 };


 function zoomImage()
 {
   // There's a small disagreement in the community if we need this funcion or not,
   // It's not finished yet: quite buggy.
   // So will temporary disable it.
     //$("body").css("background-image","url('images/test.png')"); // Onclick of button the background image of body will be test here. Give the image path in url
     //$('#clickbutton').hide(); //This will hide the button specified in html
 }

(function($) {
    "use strict"; // Start of use strict

    $('#Fullscreen').css('height', $(document).outerWidth() + 'px');
        //for when you click on an image
    $('.tattoo-image').click(function () {
        var src = $(this).attr('src'); //get the source attribute of the clicked image
        $('#Fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#Fullscreen').fadeIn();
    });
    $('#Fullscreen').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image.
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    function randomizeTagsAndAddMore() {
          $('#random-tags>ul.tags').randomize();
          $('#random-tags>ul.tags li').hide().slice(0, 8).show();
          $('#random-tags>ul.tags').append('<li><a href="#more_tags" class="more_tags">more</a></li>');
          $('#random-tags>ul.tags').fadeIn().css("display","inline-block");
          $('.more_tags').click(function() {
            // Yeah, recursion! Sort a...
            randomizeTagsAndAddMore();
          });
    }
    // Let's do it every time the page loads
    randomizeTagsAndAddMore();


    // $(".fadeIn").each(function() {
    //      var src = $(this).data("src");
    //      if (src) {
    //          var img = new Image();
    //          var card = $(this).parent().parent().parent();
    //          img.style.display = "none";
    //          img.onload = function() {
    //              $(this).fadeIn(1000);
    //              card.fadeIn(500);
    //          };
    //          $(this).append(img);
    //          img.src = src;
    //
    //      }
    //  });
    $('#contact_form_toggle').click(function () {
      $('#contact').fadeIn();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      $('.email').focus();
      return false;
    });

    var page = $("html, body");
    setTimeout(function() {
      page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",
        function(){
          page.stop();
        });
      page.animate({
              scrollTop: $("main").offset().top - 60
          }, 1000);
    }, 500);

    $("#control-toggle-view").click(function(){
       $("#list").toggleClass("one-column");
       $("#list").toggleClass("three-columns");
       $("#control-toggle-view").toggleClass("fa-columns");
       $("#control-toggle-view").toggleClass("fa-bars");
      return false;
    });

    $("#show-list").click(function(){
        document.getElementById("tattoo-columns-single").id = "tattoo-columns";
      return false;
    });

    if ($(window).width() < 550) {
       $("#list").addClass("one-column");
       $("#list").removeClass("three-columns");
       $("#control-toggle-view").removeClass("fa-columns");
       $("#control-toggle-view").addClass("fa-bars");
    }

    $(window).scroll(function() {

    $('video').each(function(){
          if ($(this).visible( true )) {
              $(this)[0].play();
              $(this)[0].volume = 0;
          } else {
              $(this)[0].pause();
          }
      })
    });
    var figure = $(".tattoo-video").hover( hoverVideo, hideVideo );

    function hoverVideo(e) {
        $(this).get(0).volume = 0.888;
    }

    function hideVideo(e) {
        $(this).get(0).volume = 0;
    }

    $.getJSON( "http://api.gogo.tattoo/aidehua/tattoo?status=wip", function( data ) {
      var items = [];
      $.each( data, function( key, val ) {
        items.push( "<div class=\"pin\">" +
            "<figure>" +
             "<img src=\"" + (val.image_ipfs == "" ? "images/doge.png" : ("https://gateway.ipfs.io/ipfs/" + val.image_ipfs)) +
             "\" alt=\"" + val.title + "\" class=\"tattoo-image pin-img fadeIn\"/>" +
             "<figcaption>" + val.title  + " (WIP)</figcaption>" +
            "</figure>" +
          "</div>" );
      });

      $("#list").prepend( items.join( "" ));
    });

})(jQuery); // End of use strict
