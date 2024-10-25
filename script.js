<<<<<<< Updated upstream
const cart = [];
let totalCost = 0;

function showService() {
    const descriptionElement = document.getElementById('service-description');
    const selectedService = document.getElementById('services').value;

    let serviceText;

    if (selectedService === 'tiktok') {
        serviceText = `
            <strong>TikTok Services:</strong><br>
            - TikTok Followers: 2$ / 1,000 
            <input type="number" id="followers-quantity" placeholder="Qty (e.g., 5000)" min="1" oninput="updatePrice('TikTok Followers', 2, 'followers-quantity')">
            <span class="price-display" id="price-followers">Price: $0.00</span>
            <button class="add-to-cart" onclick="addToCart('TikTok Followers', 2, document.getElementById('followers-quantity').value)">Add to Cart</button><br>
            - TikTok Likes: 0.45$ / 1,000 
            <input type="number" id="likes-quantity" placeholder="Qty (e.g., 2000)" min="1" oninput="updatePrice('TikTok Likes', 0.45, 'likes-quantity')">
            <span class="price-display" id="price-likes">Price: $0.00</span>
            <button class="add-to-cart" onclick="addToCart('TikTok Likes', 0.45, document.getElementById('likes-quantity').value)">Add to Cart</button><br>
            - TikTok Views: 0.0012$ / 1,000 
            <input type="number" id="views-quantity" placeholder="Qty (e.g., 10000)" min="1" oninput="updatePrice('TikTok Views', 0.0012, 'views-quantity')">
            <span class="price-display" id="price-views">Price: $0.00</span>
            <button class="add-to-cart" onclick="addToCart('TikTok Views', 0.0012, document.getElementById('views-quantity').value)">Add to Cart</button>`;
    } else if (selectedService === 'instagram') {
        serviceText = `
            <strong>Instagram Services:</strong><br>
            - Instagram Followers: 2$ / 1,000 
            <input type="number" id="followers-quantity-instagram" placeholder="Qty (e.g., 5000)" min="1"  oninput="updatePrice('Instagram Followers', 2, 'followers-quantity-instagram')">
            <span class="price-display" id="price-followers-instagram">Price: $0.00</span>
            <button class="add-to-cart" onclick="addToCart('Instagram Followers', 2, document.getElementById('followers-quantity-instagram').value)">Add to Cart</button><br>
            - Instagram Likes: 0.08$ / 1,000 
            <input type="number" id="likes-quantity-instagram" placeholder="Qty (e.g., 2000)" min="1"  oninput="updatePrice('Instagram Likes', 0.08, 'likes-quantity-instagram')">
            <span class="price-display" id="price-likes-instagram">Price: $0.00</span>
            <button class="add-to-cart" onclick="addToCart('Instagram Likes', 0.08, document.getElementById('likes-quantity-instagram').value)">Add to Cart</button><br>
            - Instagram Views: 0.045$ / 1,000 
            <input type="number" id="views-quantity-instagram" placeholder="Qty (e.g., 10000)" min="1"  oninput="updatePrice('Instagram Views', 0.045, 'views-quantity-instagram')">
            <span class="price-display" id="price-views-instagram">Price: $0.00</span>
            <button class="add-to-cart" onclick="addToCart('Instagram Views', 0.045, document.getElementById('views-quantity-instagram').value)">Add to Cart</button>`;
    } else {
        serviceText = "Select a service to see details.";
    }

    descriptionElement.innerHTML = `<p>${serviceText}</p>`;
}
function whatsApp() {
    const phoneNumber = "+96181243405"; // Replace with your WhatsApp number
    let message = "Hello! I would like to order:\n";

    cart.forEach(item => {
        message += `${item.serviceName}: ${item.totalFollowers} followers for $${item.cost.toFixed(2)}\n`;
    });

    message += `\nTotal Cost: $${totalCost.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsAppURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp link
    window.open(whatsAppURL, "_blank");
}
function updatePrice(serviceName, pricePerUnit, quantityId) {
    const quantityInput = document.getElementById(quantityId);
    const quantity = parseInt(quantityInput.value) || 0;
    const priceDisplay = document.getElementById(`price-${quantityId.replace(/-quantity/, '')}`) || document.getElementById(`price-${quantityId.replace(/-quantity-instagram/, '')}`);
    
    const totalPrice = (pricePerUnit * quantity) / 1000; // Calculate total price for the quantity
    priceDisplay.innerText = `Price: $${totalPrice.toFixed(2)}`;
}

function addToCart(serviceName, pricePerUnit, quantity) {
    const quantityNum = parseInt(quantity) || 0;
    if (quantityNum <= 0) {
        alert('Please enter a valid quantity.');
        return;
    }

    const totalFollowers = quantityNum;
    const cost = (pricePerUnit * quantityNum) / 1000; // Calculate total cost
    cart.push({ serviceName, totalFollowers, cost });
    totalCost += cost;
    updateCartSummary();
}

function updateCartSummary() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalCostElement = document.getElementById('total-cost');
    
    cartItemsElement.innerHTML = ''; // Clear current cart items
    cart.forEach((item, index) => {
        cartItemsElement.innerHTML += `<li>${item.serviceName}: ${item.totalFollowers} | Cost: $${item.cost.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button></li>`;
    });
    
    totalCostElement.innerText = `Total: $${totalCost.toFixed(2)}`;
}

function removeFromCart(index) {
    const itemCost = cart[index].cost; // Get the cost of the item to be removed
    totalCost -= itemCost; // Update total cost by subtracting the item cost
    cart.splice(index, 1); // Remove the item from cart
    updateCartSummary(); // Refresh the cart display
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}
=======
const cart = [];
let totalCost = 0;

function showService() {
    const descriptionElement = document.getElementById('service-description');
    const selectedService = document.getElementById('services').value;

    let serviceText;

    if (selectedService === 'tiktok') {
        serviceText = `
            <strong>TikTok Services:</strong><br>
            - TikTok Followers: 2$ / 1,000 
            <input type="number" id="followers-quantity" placeholder="Qty (e.g., 5000)" min="1" oninput="updatePrice('TikTok Followers', 2, 'followers-quantity')">
            <span class="price-display" id="price-followers">Price: $0.00</span>
            <button class="add-to-cart" onclick="addToCart('TikTok Followers', 2, document.getElementById('followers-quantity').value)">Add to Cart</button><br>
            - TikTok Likes: 0.45$ / 1,000 
            <input type="number" id="likes-quantity" placeholder="Qty (e.g., 2000)" min="1" oninput="updatePrice('TikTok Likes', 0.45, 'likes-quantity')">
            <span class="price-display" id="price-likes">Price: $0.00</span>
            <button class="add-to-cart" onclick="addToCart('TikTok Likes', 0.45, document.getElementById('likes-quantity').value)">Add to Cart</button><br>
            - TikTok Views: 0.0012$ / 1,000 
            <input type="number" id="views-quantity" placeholder="Qty (e.g., 10000)" min="1" oninput="updatePrice('TikTok Views', 0.0012, 'views-quantity')">
            <span class="price-display" id="price-views">Price: $0.00</span>
            <button class="add-to-cart" onclick="addToCart('TikTok Views', 0.0012, document.getElementById('views-quantity').value)">Add to Cart</button>`;
    } else if (selectedService === 'instagram') {
        serviceText = `
            <strong>Instagram Services:</strong><br>
            - Instagram Followers: 2$ / 1,000 
            <input type="number" id="followers-quantity-instagram" placeholder="Qty (e.g., 5000)" min="1"  oninput="updatePrice('Instagram Followers', 2, 'followers-quantity-instagram')">
            <span class="price-display" id="price-followers-instagram">Price: $0.00</span>
            <button class="add-to-cart" onclick="addToCart('Instagram Followers', 2, document.getElementById('followers-quantity-instagram').value)">Add to Cart</button><br>
            - Instagram Likes: 0.08$ / 1,000 
            <input type="number" id="likes-quantity-instagram" placeholder="Qty (e.g., 2000)" min="1"  oninput="updatePrice('Instagram Likes', 0.08, 'likes-quantity-instagram')">
            <span class="price-display" id="price-likes-instagram">Price: $0.00</span>
            <button class="add-to-cart" onclick="addToCart('Instagram Likes', 0.08, document.getElementById('likes-quantity-instagram').value)">Add to Cart</button><br>
            - Instagram Views: 0.045$ / 1,000 
            <input type="number" id="views-quantity-instagram" placeholder="Qty (e.g., 10000)" min="1"  oninput="updatePrice('Instagram Views', 0.045, 'views-quantity-instagram')">
            <span class="price-display" id="price-views-instagram">Price: $0.00</span>
            <button class="add-to-cart" onclick="addToCart('Instagram Views', 0.045, document.getElementById('views-quantity-instagram').value)">Add to Cart</button>`;
    } else {
        serviceText = "Select a service to see details.";
    }

    descriptionElement.innerHTML = `<p>${serviceText}</p>`;
}
function whatsApp() {
    const phoneNumber = "+96181243405"; // Replace with your WhatsApp number
    let message = "Hello! I would like to order:\n";

    cart.forEach(item => {
        message += `${item.serviceName}: ${item.totalFollowers} followers for $${item.cost.toFixed(2)}\n`;
    });

    message += `\nTotal Cost: $${totalCost.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsAppURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp link
    window.open(whatsAppURL, "_blank");
}
function updatePrice(serviceName, pricePerUnit, quantityId) {
    const quantityInput = document.getElementById(quantityId);
    const quantity = parseInt(quantityInput.value) || 0;
    const priceDisplay = document.getElementById(`price-${quantityId.replace(/-quantity/, '')}`) || document.getElementById(`price-${quantityId.replace(/-quantity-instagram/, '')}`);
    
    const totalPrice = (pricePerUnit * quantity) / 1000; // Calculate total price for the quantity
    priceDisplay.innerText = `Price: $${totalPrice.toFixed(2)}`;
}

function addToCart(serviceName, pricePerUnit, quantity) {
    const quantityNum = parseInt(quantity) || 0;
    if (quantityNum <= 0) {
        alert('Please enter a valid quantity.');
        return;
    }

    const totalFollowers = quantityNum;
    const cost = (pricePerUnit * quantityNum) / 1000; // Calculate total cost
    cart.push({ serviceName, totalFollowers, cost });
    totalCost += cost;
    updateCartSummary();
}

function updateCartSummary() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalCostElement = document.getElementById('total-cost');
    
    cartItemsElement.innerHTML = ''; // Clear current cart items
    cart.forEach((item, index) => {
        cartItemsElement.innerHTML += `<li>${item.serviceName}: ${item.totalFollowers} | Cost: $${item.cost.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button></li>`;
    });
    
    totalCostElement.innerText = `Total: $${totalCost.toFixed(2)}`;
}

function removeFromCart(index) {
    const itemCost = cart[index].cost; // Get the cost of the item to be removed
    totalCost -= itemCost; // Update total cost by subtracting the item cost
    cart.splice(index, 1); // Remove the item from cart
    updateCartSummary(); // Refresh the cart display
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}
>>>>>>> Stashed changes
