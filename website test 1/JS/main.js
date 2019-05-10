var name = 'Вася';
var a = 5;
var b = 10;
//alert (a+b);

var stringValue = 'Строка'
var numberValue = 1234342;
var logicValuer = true; // или false
var notDefined = undefined;
var obj = {key:'value'};
var obj ={key1:'value'};
var apple = {color: 'red', size:'big',
funcName: function (){

}
};

var arr = ['Вася','Петя']

var block = {
	style: {
		backgroundColor: 'blue'

	},
	size:'big',
	funcName: function (){

}
};

var answerNew = confirm('Ты Буська?');
var answer = prompt ('В каком году мы познакомились?');
if (answer=='2009'){
var answer2 = prompt ('И сколько тебе было тогда лет?')}
if (answer2 =='15'){
var answer3 = prompt ('Сколько лет мы вместе?')
}
if (answer3 =='9') {
	alert('Лан, ты молодец')
}
else {
	alert ('Неа')
}


//alert(apple.funcName());
// alert('Привет');


// for(var i=0;i<5;i++){
// 	alert(i)
// }

// function nameOfFunction (a,b){
// 	alert(stringValue);
// 	var newValue = 21; //локальная функция
// 	alert(a+b)
// }

// nameOfFunction(245,55);

//DOM
 var elem = document.body.querySelector('.button');

 // События
 // Меняем цвет кнопки при нажатии

//  elem.onclick = function (){
//  	//document.body.querySelector ('.block').style.backgroundColor ='red'
//  	 //ИЛИ
// var block = document.body.querySelector ('.block')
// block.style.backgroundColor ='green'
//  }

 // пример вызова
// function __ (selector){
// 	return	document.body.querySelector(selector);

// }

// __('.block');

// jQuery
 //Поск элемента $('')  применение к нему .click и выполненение функции по клику.
 // Весь код в джейквери должен быть со страховочной функцией
$ (function (){
$('.button').click(function(){
	$('.block').css('background','url(http://marmazov.ru/wp-content/uploads/2017/05/kotiki.jpg)');
	//Делаем анимацию. Число это длительность в милисекундах
	$('.block').animate({
         margin:'500px'
	}, 6000);

});
//анимация будет в момент когда смотришь,700px до элемента
$(window).scroll(function(){
$(".block").each(function(){
var elPos=$(this).offset().top;
var topOfWindow=$(window).scrollTop();
if(elPos<topOfWindow+700){
$(this).addClass("fadeInLeft");
}
});
});
$('.owl-carousel').owlCarousel ({
    loop:true,
    margin:10,
    nav:true,
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
})
// grab the initial top offset of the navigation 
   	var stickyNavTop = $('.nav').offset().top;
   	
   	// our function that decides weather the navigation bar should have "fixed" css position or not.
   	var stickyNav = function(){
	    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
	         
	    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
	    // otherwise change it back to relative
	    if (scrollTop > stickyNavTop) { 
	        $('.nav').addClass('sticky');
	    } else {
	        $('.nav').removeClass('sticky'); 
	    }
	};

	stickyNav();
	// and run it again every time you scroll
	$(window).scroll(function() {
		stickyNav();
	});

	
});