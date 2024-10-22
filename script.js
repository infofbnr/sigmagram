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
            <input type="number" id="followers-quantity" placeholder="Qty (e.g., 5000)" min="1">
            <button class="add-to-cart" onclick="addToCart('TikTok Followers', 2, document.getElementById('followers-quantity').value)">Add to Cart</button><br>
            - TikTok Likes: 0.45$ / 1,000 
            <input type="number" id="likes-quantity" placeholder="Qty (e.g., 2000)" min="1">
            <button class="add-to-cart" onclick="addToCart('TikTok Likes', 0.45, document.getElementById('likes-quantity').value)">Add to Cart</button><br>
            - TikTok Views: 0.0012$ / 1,000 
            <input type="number" id="views-quantity" placeholder="Qty (e.g., 10000)" min="1">
            <button class="add-to-cart" onclick="addToCart('TikTok Views', 0.0012, document.getElementById('views-quantity').value)">Add to Cart</button>`;
    } else if (selectedService === 'instagram') {
        serviceText = `
            <strong>Instagram Services:</strong><br>
            - Instagram Followers: 2$ / 1,000 
            <input type="number" id="followers-quantity-instagram" placeholder="Qty (e.g., 5000)" min="1">
            <button class="add-to-cart" onclick="addToCart('Instagram Followers', 2, document.getElementById('followers-quantity-instagram').value)">Add to Cart</button><br>
            - Instagram Likes: 0.08$ / 1,000 
            <input type="number" id="likes-quantity-instagram" placeholder="Qty (e.g., 2000)" min="1">
            <button class="add-to-cart" onclick="addToCart('Instagram Likes', 0.08, document.getElementById('likes-quantity-instagram').value)">Add to Cart</button><br>
            - Instagram Views: 0.045$ / 1,000 
            <input type="number" id="views-quantity-instagram" placeholder="Qty (e.g., 10000)" min="1">
            <button class="add-to-cart" onclick="addToCart('Instagram Views', 0.045, document.getElementById('views-quantity-instagram').value)">Add to Cart</button>`;
    } else {
        serviceText = "Select a service to see details.";
    }

    descriptionElement.innerHTML = `<p>${serviceText}</p>`;
}

function addToCart(serviceName, pricePerThousand, quantity) {
    quantity = parseInt(quantity); // Convert the quantity to an integer
    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }
    
    const totalFollowers = quantity; // The total followers entered directly
    const cost = (pricePerThousand / 1000) * totalFollowers; // Cost based on total followers
    cart.push({ serviceName, totalFollowers, pricePerThousand, quantity, cost });
    totalCost += cost;

    updateCartSummary();
}

function updateCartSummary() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalCostElement = document.getElementById('total-cost');
    
    cartItemsElement.innerHTML = ''; // Clear the cart items before adding new ones
    
    cart.forEach((item, index) => {
        cartItemsElement.innerHTML += `<li>${item.serviceName}: ${item.totalFollowers}  | Cost: $${item.cost.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button></li>`;
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
