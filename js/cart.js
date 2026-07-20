const API="http://localhost:5001/api/products";

let cart=JSON.parse(localStorage.getItem("cart"))||[];

fetch(API)

.then(res=>res.json())

.then(products=>{

const cartDiv=document.getElementById("cartItems");

let total=0;

cart.forEach(id=>{

const p=products.find(x=>x.id===id);

if(p){

total+=p.price;

cartDiv.innerHTML+=`

<div class="card">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

</div>

`;

}

});

document.getElementById("total").innerHTML=

"Total : ₹"+total;

});