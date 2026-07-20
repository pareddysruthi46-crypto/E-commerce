const API = "http://localhost:5001/api/products";

fetch(API)

.then(res => res.json())

.then(products => {

    const container = document.getElementById("products");

    if(!container) return;

    products.forEach(product => {

        container.innerHTML += `

        <div class="card">

            <img src="image/${product.image}" width="200">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>

        </div>

        `;

    });

});


function addToCart(id){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(id);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to Cart");

}