$(document).ready(function(){
    
 $(window).scroll( function(event) { 
    event.preventDefault();
    var scrolled_val = $(document).scrollTop();
    console.log(scrolled_val);
    if(scrolled_val >= 300){
        $("#btn1").css("display","block");
       
    }else{
        $("#btn1").css("display","none");
    }
 
   

   });
   $("#btn1").click(function(){
       
    $("html,body").animate({
        scrollTop:0
    },1000);
});

$(".menu li a").click(function(event){
    event.preventDefault();
    var id = $(this).attr("href");
   
    $(".menu li").removeClass("active");
    
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);
});



});