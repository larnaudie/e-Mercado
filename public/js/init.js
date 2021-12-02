const CATEGORIES_URL = "../../category/all.json";
const PUBLISH_PRODUCT_URL = "../../product/publish.json";
const CATEGORY_INFO_URL = "../../category/1234.json";
const PRODUCTS_URL = "../../product/all.json";
const PRODUCT_INFO_URL = "../../product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "../../product/5678-comments.json";
const CART_INFO_URL = "../../cart/987.json";
const CART_BUY_URL = "../../cart/buy.json";
const CART_INFO_URL2 = "../../cart/654.json";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
  if (localStorage.getItem("GuardarUsuario")!= null) {
    document.getElementById("menuUsuario").innerHTML += localStorage.getItem("GuardarUsuario");
  }
});

function cerrarsesion(){
  localStorage.removeItem("menuUsuario")
  window.location.href = "index.html"
}