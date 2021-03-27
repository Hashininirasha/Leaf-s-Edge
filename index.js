$(document).ready(function(){

    // banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        items: 1,
        autoplay:true,
        autoplayTimeout:2000,
        loop:true
        
      });
      //top sale owl carousel
      $("#top-sale .owl-carousel").owlCarousel({
          loop:true,
          nav:true,
          dots:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }

          }
      });
      //isotope filter
      var $grid = $(".grid").isotope({
        itemSelector:'.grid-item',
        layoutMode:'fitRows'
    });
    //filter items on button click
    $('.button-group').on("click","button",function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter:filterValue});
    })
     //New Phones owl carousel
     $("#new_phones .owl-carousel").owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }

        }
    });
    //Blogs Owl carousel
    $("#blogs .owl-carousel").owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            
        }
    })
    $("#Accessories .owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }

        }
    });
    //produc qty section
    let $qty_up=$(".qty .qty-up");
    let $qty_down=$(".qty .qty-down");
    let $input=$(".qty .qty_input");
    
    //click qty up button
    $qty_up.click(function(e){
        if($input.val()>=1 && $input.val()<=9){
            $input.val(function(i,oldval){
                return ++oldval;
            })
        }
    });
    
    //click qty down button
    $qty_down.click(function(e){
        if($input.val()>1 && $input.val()<=10){
            $input.val(function(i,oldval){
                return --oldval;
            })
        }
    });

    $(document).ready( function() {
        $('.dropdown-toggle').dropdown();
        });
       
    $('color input').on('click', function(){
        var plant = $(this).attr('data-image');

        $('active').removeClass('active');
        $('.left-column img[data-image = ' + plant + ']').addClass('active');
        $(this).addClass('active');
    });

     //Gift owl carousel
     $("#coming .owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }

        }
    });
    //isotope filter
    var $grid = $(".grid").isotope({
      itemSelector:'.grid-item',
      layoutMode:'fitRows'
  });
  //filter items on button click
  $('.button-group').on("click","button",function(){
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({filter:filterValue});
  })
   //Gift owl carousel
   $("#gift .owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }

    }
});
//isotope filter
var $grid = $(".grid").isotope({
  itemSelector:'.grid-item',
  layoutMode:'fitRows'
});
//filter items on button click
$('.button-group').on("click","button",function(){
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({filter:filterValue});
})


    });