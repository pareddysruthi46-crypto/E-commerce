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

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartDiv = document.getElementById("cartItems");
let total = 0;

cart.forEach(id => {
  const p = products.find(x => x.id === id);

  if (p) {
    total += p.price;

    cartDiv.innerHTML += `
      <div class="card">
        <img src="images/${p.image}" width="150">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
      </div>
    `;
  }
});

document.getElementById("total").innerHTML = "Total : ₹" + total;
