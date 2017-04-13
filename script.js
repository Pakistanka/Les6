/*---------------------
----------ГАЛЕРЕЯ------
----------------------*/

function changeBigPicture (event) {
	var bigPicture = document.getElementById('bigPicture');
	
	var newImage = new Image();
	var currentImage = event.target;

	newImage.src = currentImage.src;
	

	/*newImage.onerror = function() { // сообщение об ошибке
    console.error("Невозможно загрузить картинку " + this.src);
	this.src = "img/error.png";
	}*/

	bigPicture.innerHTML = ''; //очищение дива при выборе нового объекта
	bigPicture.appendChild(newImage); //добавление детского элемента к родительскому
}



/*------------------------------
----КНОПКИ ВПЕРЕД И НАЗАД------
------------------------------*/

var currentImage;

function nextImage() {
	var bigPicture = document.getElementById('bigPicture');	//вызывает див - bigPicture по id
	var newImage = new Image();
	var next; //переменная next

	if(next = currentImage.nextElementSibling) { //если у переменной next есть следующая картинка, то берем ее
		newImage.src = next.src; //переменная newImage берет значение, переданное в next.src
		currentImage = next; //currentImage принимает значение следующей картинки
	} else {
		currentImage = currentImage.parentElement.firstElementChild; //если следующей картинки нет, то остаемся на последней
		newImage.src = currentImage.src; //newImage принимает значение текущего изображение
	}
	bigPicture.innerHTML = ''; //очищение дива при выборе нового объекта
	bigPicture.appendChild(newImage); //добавление детского элемента к родительскому
}

function prevImage() {
	var bigPicture = document.getElementById('bigPicture'); //вызывает див - bigPicture по id
    var newImage = new Image();
    var prev; //переменная prev

    if(prev = currentImage.previousElementSibling) { //если у переменной prev есть предыдущая картинка, то берем ее 
        newImage.src = prev.src; //переменная newImage берет значение, переданное в prev.src
        currentImage = prev; //currentImage принимает значение предыдущей картинки
    } else {
        currentImage = currentImage.parentElement.lastElementChild; //если предыдущей картинки нет, то остаемся на первой
        newImage.src = currentImage.src; //newImage принимает значение текущего изображение
    }
    bigPicture.innerHTML = ''; //очищение дива при выборе нового объекта
	bigPicture.appendChild(newImage); //добавление детского элемента к родительскому
}

var currentImage; //глобальная переменная

document.getElementById("newProducts").addEventListener("click", changeBigPicture); //при нажатии на картинку вызывать функцию changeBigPicture
document.getElementById("next").addEventListener("click", nextImage); // при нажатии на кнопку вперед вызвать функцию nextImage
document.getElementById("prev").addEventListener("click", prevImage); // при нажатии на кнопку назад вызвать функцию prevImage


/*window.onload = function(){
	var images = document.querySelectorAll('#newProducts > figure > img');
	for (var i = 0; i < images.length; i++) {
		images[i].addEventListener('click', changeBigPicture);
	}
}*/

/*---------------------
----------КОРЗИНА------
----------------------*/


function addToCart(event) {
    var prod = event.target.parentElement;
    var sum = 0;

    if(cart[prod.id]) {
        var inCart = document.getElementById(prod.id);

        cart[prod.id].qty++;
        cart[prod.id].price = document.getElementById(prod.id + "_price").innerText * cart[prod.id].qty;
        inCart.innerHTML = cart[prod.id].name + " x" + cart[prod.id].qty + " $" + cart[prod.id].price.toFixed(2);
    } else {
        var newObj = {};
        var newElement = document.createElement("p");

        newObj.name = document.getElementById(prod.id) + document.getElementByClassName(".prod_name").innerText;
        newObj.price = document.getElementById(prod.id) + document.getElementByClassName(".prod_price").innerText * 1;
        newObj.qty = 1;

        newElement.id = "cart_" + prod.id;
        newElement.innerHTML = newObj.name + " x1 &euro;" + newObj.price;

        document.getElementById("cart").appendChild(newElement);
        cart[newElement.id]=newObj;
    }

    for (var item in cart) {
        sum += cart[item].price;
    }
    document.getElementById("total").innerHTML = "&euro;" + sum.toFixed(2);
}

var cart = {};


	var buttons = document.getElementById("buy");
	for (var i = 0; i < buttons.length; i++) {
	    buttons[i].addEventListener("click", addToCart);
	    console.log('I am working!');
	}



/*function addToBasket(eventObj) {
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

function addToCart(event){
    var item = event.target.cloneNode(true);
    totalSum = document.getElementById('totalSum'),
    cart = document.getElementsByClassName('cart')[0];
    
    
    cart.appendChild(item);

    
    for(var i = 0, sum = 0; i < cart.children.length; i++) {
        sum += parseInt( cart.children[i].getAttribute('value') );
    }

    totalSum.innerHTML = "Сумма покупок : " + sum + " рублей."   

}

*/
