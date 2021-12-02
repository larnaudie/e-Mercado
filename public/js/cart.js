let articles = {};
let cost = 0;
let quantity = 0;
let quote = 40;



const showCartProductsAndTotalCost = (array) => {
  let htmlToAppend = '';
  for (let i = 0; i < array.length; i++) {
    let art = array[i];
    htmlToAppend = `
        <tr id="arts${i}">
            <td ><img src="` + art.src + `" class="img-thumbnail" style="width:100px"></td>
            <td><p>`+ art.name + `</p></td>
            <td><p>`+ "UYU " + exchangeRate(art) + `</p></td>
            <td><input id="quantity${i}" type="number" min="1" placeholder="` + art.count + `" style="width:50px" min="1" class="form-control text-center cant" ></td>
            <td ><strong id="subT${i}" class="sub">  ` + art.count * exchangeRate(art) + `</strong></td>
            <td><i class="gg-trash remove"></i></td>
        </tr>
        `
    document.getElementById('cart-products').innerHTML += htmlToAppend;
  }

  addEvents(array);
  removeArticle(array)
}


const exchangeRate = (coin) => {
  if (coin.currency == "USD") {
    cost = coin.unitCost * quote
  } else {
    cost = coin.unitCost;
  }
  return cost
}


const addEvents = (articles) => {
  let arrayCant = document.getElementsByClassName('cant');
  for (let i = 0; i < arrayCant.length; i++) {
    let canti = document.getElementById('quantity' + i);
    canti.addEventListener('change', () => {
      quantity = canti.value;
      let subtotal = quantity * exchangeRate(articles[i]);
      document.getElementById('subT' + i).innerHTML = subtotal
      cartTotalCost();
    });
  }
}
 
const removeArticle = () => {
  let trash = document.getElementsByClassName('remove');
  for (let i = 0; i < trash.length; i++) {
    trash[i].addEventListener('click', () => {
      document.getElementById('arts' + i).innerHTML = "";
      cartTotalCost();
    });
  }
}


const cartTotalCost = (shippingCost = 0.15) => {
  let arraySubtotales = document.getElementsByClassName('sub');
  let totalCost = 0;
  for (let i = 0; i < arraySubtotales.length; i++) {
    let subIndividual = arraySubtotales[i];
    totalCost += parseFloat(subIndividual.innerText);
  }
  let shippingAmount = shippingCost * totalCost;
  let withShipping = totalCost * (1 + shippingCost);
  let htmlSub = `<strong class="text-muted">UYU` + " " + Math.round(totalCost) + `</strong>`
  let htmlShipping = `<strong class="text-muted">UYU` + " " + Math.round(shippingAmount) + `</strong>`
  let htmlTotal = `<strong style="color: #000">UYU` + " " + Math.round(withShipping) + `</strong>`

  document.getElementById("subtotal").innerHTML = htmlSub;
  document.getElementById("envio").innerHTML = htmlShipping;
  document.getElementById("total").innerHTML = htmlTotal;
}

$("input").on("click", function() {
// $('#rd3').value)
  if ($('#rd1').is(':checked')) {   $("#total").html(cartTotalCost(0.15))} 
  if ($('#rd2').is(':checked')) {   $("#total").html(cartTotalCost(0.07))} 
  if ($('#rd3').is(':checked')) {   $("#total").html(cartTotalCost(0.05))} 

})

function productSubTotal(product) {
  return product.unitCost * product.count;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
 
// Agregamos en nuestro archivo init.js el link que se nos proporcionó para tomar los datos del nuevo carrito y lo ejecutamos en este evento para desplegar esa nueva información.
document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(CART_INFO_URL2).then(resObj => {
    if (resObj.status === 'ok') {
      let array = resObj.data;
      console.log(array.articles);
      showCartProductsAndTotalCost(array.articles);
      cartTotalCost();
    }
  });
});