/*---------------------
----------ГАЛЕРЕЯ------
----------------------*/

function changeBigPicture (event) {
	console.log('I am working');
	var bigPicture = document.getElementById('bigPicture');
	bigPicture.innerHTML = '';

	var targetElement = event.target;
	var newImage = new Image();
	newImage.src = targetElement.src;
	bigPicture.appendChild(newImage);
}


window.onload = function(){
	var images = document.querySelectorAll('#newProducts > figure > img');
	for (var i = 0; i < images.length; i++) {
		images[i].addEventListener('click', changeBigPicture);
	}
}

/*---------------------
----------КОРЗИНА------
----------------------*/

function addToBasket(eventObj) {
	console.log("new product");
	var basket = document.getElementById('basket');

	var targetBasket = eventObj.target;
	basket.appendChild(targetBasket);
}

window.onload = function() {
	var button = document.querySelectorAll('#newProducts > figure > button');
	for (var cart = 0; cart < button.length; cart++) {
		console.log('You add this product successfully!');
		button[cart].addEventListener('click', addToBasket);
	}
}



/*------------------------------
----КНОПКИ ВПЕРЕД И НАЗАД------
------------------------------*/



//function buttonForwardAndBack {

//bigPicture = current;
var current = 1;
var number = 6; //

// массив картинок
var arr = new Array();
arr[0] = new Image();   // картинка 1
arr[1] = new Image();   // картинка 2
arr[2] = new Image();   // картинка 3
arr[3] = new Image();   // картинка 4
arr[4] = new Image();   // картинка 5
arr[5] = new Image();   // картинка 6

//пути к картинкам

arr[0].src = 'img/Cacao-maslo.jpg';
arr[1].src = 'img/avokado-maslo.jpg';
arr[2].src = 'img/karite-maslo.png';
arr[3].src = 'img/arganovoe-maslo.jpg';
arr[4].src = 'img/baraban.jpg';
arr[5].src = 'img/honey.jpg';

function frw(){
	if (current < number) {
	current++;
document.images['r'].src=arr[current-1].src;
}
}
function bck(){
	if (current > 1) {
	current--;
	document.images['r'].src=arr[current-1].src;
	}
}


