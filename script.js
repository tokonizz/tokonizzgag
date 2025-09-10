let cart = [];

function addToCart(productName, price) {
    cart.push({name: productName, price: price});
    alert(productName + " ditambahkan ke keranjang!");
    console.log(cart);
}

function getTotal() {
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    alert("Total belanja: Rp" + total);
}
