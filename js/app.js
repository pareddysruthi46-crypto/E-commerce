let cart=JSON.parse(localStorage.getItem("cart"))||[];

const count=document.getElementById("cart-count");

if(count){

count.innerHTML=cart.length;

}