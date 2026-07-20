const products = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    image: "laptop.png"
  },
  {
    id: 2,
    name: "Smart Phone",
    price: 25000,
    image: "mobile.png"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 4500,
    image: "watch.png"
  },
  {
    id: 4,
    name: "Headphones",
    price: 3000,
    image: "headphones.png"
  }
];

const container = document.getElementById("products");

if (container) {
  products.forEach(product => {
    container.innerHTML += `
      <div class="card">
        <img src="images/${product.image}" width="200">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">
          Add To Cart
        </button>
      </div>
    `;
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart");
}
