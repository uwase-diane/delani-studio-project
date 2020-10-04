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
});

$('.image-two').mouseleave(function() {
     $('.overlays-two').hide();
     $('.content-text-two').hide();
});

$('.image-three').mouseenter(function() {
    $('.overlays-three').show();
     $('.content-text-three').show();
});

$('.image-three').mouseleave(function() {
     $('.overlays-three').hide();
     $('.content-text-three').hide();
});

$('.image-four').mouseenter(function() {
    $('.overlays-four').show();
     $('.content-text-four').show();
});

$('.image-four').mouseleave(function() {
     $('.overlays-four').hide();
     $('.content-text-four').hide();
});


$('.image-five').mouseenter(function() {
    $('.overlays-five').show();
     $('.content-text-five').show();
});

$('.image-five').mouseleave(function() {
     $('.overlays-five').hide();
     $('.content-text-five').hide();
});


$('.image-six').mouseenter(function() {
    $('.overlays-six').show();
     $('.content-text-six').show();
});

$('.image-six').mouseleave(function() {
     $('.overlays-six').hide();
     $('.content-text-six').hide();
});

$('.image-seven').mouseenter(function() {
    $('.overlays-seven').show();
     $('.content-text-seven').show();
});

$('.image-seven').mouseleave(function() {
     $('.overlays-seven').hide();
     $('.content-text-seven').hide();
});
$('.image-eight').mouseenter(function() {
    $('.overlays-eight').show();
     $('.content-text-eight').show();
});

$('.image-eight').mouseleave(function() {
     $('.overlays-eight').hide();
     $('.content-text-eight').hide();
});

// contact form jquery 

$("#contact").submit(function(event){
   var visiterName =($(".text-name")).val();
   if(visiterName == ''){
       alert("enter a correct name please");
   }
   else
   {
    alert(visiterName + " Thank You We Appreciate Your Message!!");
    event.preventDefault();
   }
});

