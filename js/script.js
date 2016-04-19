//What in the basket
var productNames = []; 		
var productSizes = []; 		
var productPrices = []; 	
var productQuantities = []; 

//our default products
var allProductNames = ["Oodji куртка утепленная",
"Ebound футболка",
"SELA Куртка утепленная",
"RIVER ISLAND куртка джинсовая",
"ADIDAS куртка",
"Deblasio рубажка"];
var allProductDescriptions = ["Демисезонная куртка oodji выполнена из быстросохнущего нейлона , синтепоновый утеплитель. Детали: прямой крой; застежка на молнию; боковые карманы на молнии.",
"Состав Хлопок - 100%, Длина рукава 24 см, Длина 68 см, Размер модели на фото 48/50, Рост модели на фото 187, Параметры модели 98-80-99, Цвет мультиколор, Страна производства Бангладеш.",
"Стеганая куртка Sela выполнена из водоотталкивающего и ветрозащитного текстиля. Детали: тонкий капюшон складывается в воротник, застежка на молнию и клапан на кнопках, один внутренний и два внешних кармана, карман на рукаве.",
"Куртка джинсовая River Island синяя для мужчин Весна-лето 2015. Цвет исполнения изделия: синий. Сезон: Весна-лето 2015. Состав: Материал 1: Хлопок - 100%. Параметры изделия: 100-80-95. Рост модели на фото: 189.",
"Куртка из ветронепроницаемого текстиля adidas Performance. Детали: прямой крой, капюшон, небольшая застежка на молнию, эластичные низ и манжеты.",
"Рубашка Deblasio выполнена из хлопкового текстиля. Детали: прямой крой, застежка на пуговицы, отложной воротник, короткие рукава, закругленный низ, один карман."];
var allProductPrices = [16000,6700,29800,32000,18000,8000];
var all_pic_urls = [["good1_1.jpg","good1_2.jpg","good1_3.jpg","good1_4.jpg"],
					["good2_1.jpg","good2_2.jpg","good2_3.jpg","good2_4.jpg"],
					["good3_1.jpg","good3_2.jpg","good3_3.jpg","good3_4.jpg"],
					["good4_1.jpg","good4_2.jpg","good4_3.jpg","good4_4.jpg"],
					["good5_1.jpg","good5_2.jpg","good5_3.jpg","good5_4.jpg"],
					["good6_1.jpg","good6_2.jpg","good6_3.jpg","good6_4.jpg"]];
//which product is chosen now(id)
var cur_product_id = 1;
//dialog window is open or not
var dialog_is_open = 0;
//items in the cart
var cart_items = 0;
//total price of cart items
var cart_total = 0;
//is main page(1) or page with table(0)
var is_main = 1;
function generateTable(){
	var total = 0;
	var table = [];
	table["name"] = productNames;
	table["price"] = productPrices;
	table["quantity"] = productQuantities;
	table["size"] = productSizes;
	table["subtotal"] = [];
	var myTable = "<table class='table table-striped' id='myTable'> ";
	myTable += "<tr><th>№</th><th>Item name</th><th>Size</th><th>Quantity</th><th>Price</th><th>Subtotal</th></tr>";
	
	for(var i = 0; i < productNames.length; i++){
		table["subtotal"][i] = table["price"][i]*table["quantity"][i];
		myTable += "<tr class='rows'>";
			// TODO add appropriate table data
			myTable += "<td>";
				myTable += (i+1);
			myTable += "</td>";
			myTable += "<td>";
				myTable += table["name"][i];
			myTable += "</td>";
			myTable += "<td>";
				myTable += table["size"][i];
			myTable += "</td>";
			myTable += "<td>";
				myTable += table["quantity"][i];
			myTable += "</td>";
			myTable += "<td>";
				myTable += table["price"][i] + " KZT";
			myTable += "</td>";
			myTable += "<td>";
				myTable += table["subtotal"][i] + " KZT";
			myTable += "</td>";
		myTable += "</tr>";
		// TODO update total
		total += table["subtotal"][i]; 
	}
	myTable += "</table>";
	myTable += "<h3>Total cost: " + total + " KZT </h3>";
	document.getElementById('myTable').innerHTML = myTable;}

function addProduct(){
	var newProductName = allProductNames[cur_product_id];
	var newProductPrice = allProductPrices[cur_product_id];
	var newProductSize = document.getElementById('selected_size').value;
	var newProductQuantity = 1*document.getElementById('selected_quantity').value;
	var arrayLength = productNames.length;
	productNames[arrayLength] = newProductName;
	productPrices[arrayLength] = newProductPrice;
	productSizes[arrayLength] = newProductSize;
	productQuantities[arrayLength] = newProductQuantity;
	cart_items += newProductQuantity;
	cart_total += newProductPrice*newProductQuantity;
	document.getElementById('cart_items').innerHTML = cart_items;
	document.getElementById('cart_total').innerHTML = cart_total;
}
function checkout(){
	generateTable();
	document.getElementById('main_page').innerHTML = "";	
}

function changePhoto(pic_id = 0){
	var main_pic = document.getElementById('main_pic');
	main_pic.src = "images/" + all_pic_urls[cur_product_id][pic_id];	}


function showProduct(cur_id){
	cur_product_id = cur_id;
	var dialog = document.getElementById('dialog');
	changePhoto(0);
	document.getElementById('pic_1').src = "images/" + all_pic_urls[cur_product_id][0];
	document.getElementById('pic_2').src = "images/" + all_pic_urls[cur_product_id][1];
	document.getElementById('pic_3').src = "images/" + all_pic_urls[cur_product_id][2];
	document.getElementById('pic_4').src = "images/" + all_pic_urls[cur_product_id][3];
	document.getElementById('product_description').innerHTML = "&emsp;" + allProductDescriptions[cur_product_id];
	document.getElementById('selected_quantity').value = 1;
	document.getElementById('product_title').innerHTML = allProductNames[cur_id] + ' [' + allProductPrices[cur_id] + 'тг]';
	
	if(dialog_is_open == 0)
		dialog.show(); 	

	dialog_is_open = 1; }


function closeProduct(){
	var dialog = document.getElementById('dialog');
	dialog.close();	
	dialog_is_open = 0;	}
