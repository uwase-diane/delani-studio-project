$(document).ready(function(){
    $(".image-work").click(function(){
        $(".text-work").show();
        $(".image-work").hide();
    });
  
    $(".text-work").click(function(){
        $(".image-work").show();
        $(".text-work").hide();
    });

});

$(document).ready(function(){


$(".imag-work").click(function(){
    $(".tet-work").show();
    $(".imag-work").hide();
});
$(".tet-work").click(function(){
    $(".imag-work").show();
    $(".tet-work").hide();
});

});

$(document).ready(function(){
    $(".img-work").click(function(){
        $(".txt-work").show();
        $(".img-work").hide();
    });
    $(".txt-work").click(function(){
        $(".img-work").show();
        $(".txt-work").hide();
    });
    
});

// jquery overaly images
$('.image-one').mouseenter(function() {
    $('.overlays-one').show();
     $('.content-text').show();
});

$('.image-one').mouseleave(function() {
     $('.overlays-one').hide();
     $('.content-text').hide();
});


$('.image-two').mouseenter(function() {
    $('.overlays-two').show();
     $('.content-text-two').show();
})

$('.image-two').mouseleave(function() {
     $('.overlays-two').hide();
     $('.content-text-two').hide();
})

$('.image-three').mouseenter(function() {
    $('.overlays-three').show();
     $('.content-text-three').show();
})

$('.image-three').mouseleave(function() {
     $('.overlays-three').hide();
     $('.content-text-three').hide();
})