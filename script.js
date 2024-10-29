
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
            <button class="add-to-cart" onclick="addToCart('TikTok Views', 0.0012, document.getElementById('views-quantity').value)">Add to Cart</button><br>
            - TikTok Saves: 0.45$ / 1,000 
            <input type="number" id="saves-quantity" placeholder="Qty (e.g., 10000)" min="1"  oninput="updatePrice('TikTok Saves', 0.45, 'saves-quantity')">
            <span class="price-display" id="price-saves">Price: $0.00</span>
            <button class="add-to-cart" onclick="addToCart('TikTok Saves', 0.45, document.getElementById('saves-quantity').value)">Add to Cart</button><br>
            - TikTok Shares: 0.30$ / 1,000 
            <input type="number" id="shares-quantity" placeholder="Qty (e.g., 10000)" min="1"  oninput="updatePrice('TikTok Shares', 0.3, 'shares-quantity')">
            <span class="price-display" id="price-shares">Price: $0.00</span>
            <button class="add-to-cart" onclick="addToCart('TikTok Shares', 0.3, document.getElementById('shares-quantity').value)">Add to Cart</button>            
            
            
            
            `;
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
            <button class="add-to-cart" onclick="addToCart('Instagram Views', 0.045, document.getElementById('views-quantity-instagram').value)">Add to Cart</button><br>
            - Instagram Saves: 0.20$ / 1,000 
            <input type="number" id="saves-quantity-instagram" placeholder="Qty (e.g., 10000)" min="1"  oninput="updatePrice('Instagram Saves', 0.2, 'saves-quantity-instagram')">
            <span class="price-display" id="price-saves-instagram">Price: $0.00</span>
            <button class="add-to-cart" onclick="addToCart('Instagram Saves', 0.2, document.getElementById('saves-quantity-instagram').value)">Add to Cart</button><br>
            - Instagram Shares: 0.90$ / 1,000 
            <input type="number" id="shares-quantity-instagram" placeholder="Qty (e.g., 10000)" min="1"  oninput="updatePrice('Instagram Shares', 0.9, 'shares-quantity-instagram')">
            <span class="price-display" id="price-shares-instagram">Price: $0.00</span>
            <button class="add-to-cart" onclick="addToCart('Instagram Shares', 0.9, document.getElementById('shares-quantity-instagram').value)">Add to Cart</button>
            `
            
            ;
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

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}
let itemCount = 0;

function addToCart(serviceName, price, quantity) {
    if (quantity <= 0) return;

    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(item => item.name === serviceName);
    
    if (existingItemIndex === -1) {
        // Item doesn't exist, add new item
        const item = {
            name: serviceName,
            price: price,
            quantity: parseInt(quantity),
        };
        cart.push(item);
        itemCount++; // Increase the unique item count
    } else {
        // Item exists, update its quantity
        cart[existingItemIndex].quantity += parseInt(quantity);
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalCostElement = document.getElementById('total-cost');
    const itemCountElement = document.getElementById('item-count');
    
    cartItemsElement.innerHTML = '';
    let totalCost = 0;

    cart.forEach(item => {
        const itemTotal = (item.price * item.quantity) / 1000; // Correct calculation
        totalCost += itemTotal;
        cartItemsElement.innerHTML += `<li>${item.name}: ${item.quantity} @ $${item.price.toFixed(2)} / 1000 - Total: $${itemTotal.toFixed(2)}</li>`;
    });

    totalCostElement.innerHTML = `Total: $${totalCost.toFixed(2)}`;
    itemCountElement.innerHTML = itemCount; // Update the item count display
}
function addToCart(serviceName, price, quantity) {
    if (quantity <= 0) return;

    const existingItemIndex = cart.findIndex(item => item.name === serviceName);
    
    if (existingItemIndex === -1) {
        // Item doesn't exist, add new item
        const item = {
            name: serviceName,
            price: price,
            quantity: parseInt(quantity),
        };
        cart.push(item);
        itemCount++; // Increase the unique item count
    } else {
        // Item exists, update its quantity
        cart[existingItemIndex].quantity += parseInt(quantity);
    }

    updateCartDisplay();
}

function removeFromCart(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1); // Remove item from the cart
        itemCount--; // Decrease the unique item count
    }
    
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalCostElement = document.getElementById('total-cost');
    const itemCountElement = document.getElementById('item-count');
    
    cartItemsElement.innerHTML = '';
    let totalCost = 0;

    cart.forEach(item => {
        const itemTotal = (item.price * item.quantity) / 1000; // Correct calculation
        totalCost += itemTotal;
        cartItemsElement.innerHTML += `
            <li>
                ${item.name}: ${item.quantity} @ $${item.price.toFixed(2)} / 1000 - Total: $${itemTotal.toFixed(2)} 
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            </li>`;
    });

    totalCostElement.innerHTML = `Total: $${totalCost.toFixed(2)}`;
    itemCountElement.innerHTML = itemCount; // Update the item count display
}

let userBalance = 0.00; // Example starting balance

function displayBalance() {
    const balanceElement = document.getElementById('balance-display');
    balanceElement.innerText = `Balance: $${userBalance.toFixed(2)}`;
}

function updateBalance(amount) {
    userBalance += amount; // Modify balance by amount (positive or negative)
    displayBalance(); // Update balance display in profile modal
}

// Call displayBalance() when the profile modal opens
function toggleProfile() {
    const profileModal = document.getElementById('profile-modal');
    profileModal.style.display = profileModal.style.display === 'block' ? 'none' : 'block';
    if (profileModal.style.display === 'block') {
        displayBalance();
    }
}