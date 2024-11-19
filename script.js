// Initialize cart as an empty array
let cart = []

// Buy Now button functionality
document.querySelectorAll('.buy-now').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productTitle = document.querySelectorAll('.product-title')[index].textContent;
        alert(`You bought ${productTitle}`);
    });
});

// Add to Cart button functionality
document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productTitle = document.querySelectorAll('.product-title')[index].textContent;
        const productPrice = document.querySelectorAll('.product-price')[index].textContent;

        // Add product to cart
        cart.push({ title: productTitle, price: productPrice });
        updateCartCount();

        alert(`${productTitle} has been added to your cart.`);
    });
});

// Update Cart Count Display
function updateCartCount() {
    const cartCount = document.querySelector('.cart-icon');
    cartCount.textContent = cart.length;
}

// Display Cart Items on Cart Icon Click
document.querySelector('.cart-icon a').addEventListener('click', (e) => {
    e.preventDefault();
    if (cart.length === 0) {
        alert("Your cart is empty!")
    }
    else {
        let cartItems = "Items in your cart:\n";
        cart.forEach((item, index) => {
            cartItems += `${index + 1}. ${item.title} - ${item.price}\n`;
        });
        alert(cartItems);
    }
});

// Search Bar Functionality
document.querySelector('.search-bar button').addEventListener('click', (e) => {
    e.preventDefault();
    const searchQuery = document.querySelector('.search-bar input[type="text"]').value.toLowerCase();
    const products = document.querySelectorAll('.product-container');

    products.forEach(product => {
        const productTitle = product.querySelector('.product-title').textContent.toLowerCase();
        if (productTitle.includes(searchQuery)) {
            product.style.display = "flex" // Show matching products 
        }
        else {
            product.style.display = "none" // Hide non-matching products 
        }
    });
});

