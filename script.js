let cart = [];
let total = 0;

function addToCart(book, price) {
    cart.push({ book, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.book} - $${item.price}`;
        cartList.appendChild(li);
    });

    document.getElementById("cart-count").textContent = cart.length;
    document.getElementById("total-price").textContent = total;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for your purchase!");
        cart = [];
        total = 0;
        updateCart();
    }
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will contact you soon.");
});
