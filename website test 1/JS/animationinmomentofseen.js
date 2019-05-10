$(window).scroll(function(){
$(".up").each(function(){
var elPos=$(this).offset().top;
var topOfWindow=$(window).scrollTop();
if(elPos<topOfWindow+700){
$(this).addClass("fadeInUp");
}
});
});