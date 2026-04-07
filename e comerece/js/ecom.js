let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;

    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ₹${item.price}
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;
        cartItems.appendChild(li);
    });

    document.getElementById("totalPrice").innerText = "Total: ₹" + total;
    document.getElementById("cartCount").innerText = cart.length;
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);

    updateCart();
}

function clearCart() {
    cart = [];
    total = 0;
    updateCart();
}