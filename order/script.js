const cart = [];
let totalCost = 0;

function showService() {
    const descriptionElement = document.getElementById('service-description');
    const selectedService = document.getElementById('services').value;

    const tiktokDropdown = document.getElementById('tiktok-select');
    const instagramDropdown = document.getElementById('instagram-select');
    
    // Hide both service-specific dropdowns initially
    tiktokDropdown.style.display = 'none';
    instagramDropdown.style.display = 'none';

    // Show the appropriate dropdown based on the selected service
    if (selectedService === 'tiktok') {
        tiktokDropdown.style.display = 'block';
        updateServiceDropdown('tiktok');
    } else if (selectedService === 'instagram') {
        instagramDropdown.style.display = 'block';
        updateServiceDropdown('instagram');
    } else {
        descriptionElement.innerHTML = "Select a service to see details.";
    }
}

function updateServiceDropdown(service) {
    const tiktokServices = [
        { name: "TikTok Followers", price: 3.44 }, //3.85
        { name: "TikTok Likes", price: 0.32 }, //0.4
        { name: "TikTok Views", price: 0.0016 }, //0.0035
        { name: "TikTok Saves", price: 0.62 }, //0.65
        { name: "TikTok Shares", price: 0.62 } //0.65
    ];
    const instagramServices = [
        { name: "Instagram Followers", price: 2.15 },
        { name: "Instagram Likes", price: 0.2 },
        { name: "Instagram Views", price: 0.06 },
        { name: "Instagram Saves", price: 0.2 },
        { name: "Instagram Shares", price: 0.35 }
    ];

    const serviceList = service === 'tiktok' ? tiktokServices : instagramServices;
    const dropdown = service === 'tiktok' ? document.getElementById('tiktok-select') : document.getElementById('instagram-select');

    dropdown.innerHTML = `
    <option value="none">Select a service</option>
    `; // Clear existing options

    serviceList.forEach(service => {
        const option = document.createElement('option');
        option.value = service.name.toLowerCase().replace(/\s+/g, '-');
        option.textContent = service.name;
        dropdown.appendChild(option);
    });
}

function showServiceDetails(service) {
    const selectedService = document.getElementById(service + '-select').value;
    const descriptionElement = document.getElementById('service-description');
    
    const tiktokServices = [
        { name: "TikTok Followers", price: 3.44 }, //3.2
        { name: "TikTok Likes", price: 0.32 }, //0.3
        { name: "TikTok Views", price: 0.0016 }, //0.0035
        { name: "TikTok Saves", price: 0.62 }, //0.65
        { name: "TikTok Shares", price: 0.62 } //0.65
    ];
    const instagramServices = [
        { name: "Instagram Followers", price: 2.15 }, //2.5
        { name: "Instagram Likes", price: 0.2 }, //0.2
        { name: "Instagram Views", price: 0.06 }, //0.06
        { name: "Instagram Saves", price: 0.2 }, //0.15
        { name: "Instagram Shares", price: 0.35 } //0.35
    ];

    const serviceList = service === 'tiktok' ? tiktokServices : instagramServices;
    const selectedServiceDetails = serviceList.find(s => s.name.toLowerCase().replace(/\s+/g, '-') === selectedService);

    if (selectedServiceDetails) {
        descriptionElement.innerHTML = `
            <strong>${selectedServiceDetails.name}</strong><br>
            Price: $${selectedServiceDetails.price} / 1,000<br>
            <input type="number" id="${selectedService}-quantity" placeholder="Qty (e.g., 1000)" min="1" oninput="updatePrice('${selectedServiceDetails.name}', ${selectedServiceDetails.price}, '${selectedService}-quantity')">
            <span class="price-display" id="price-${selectedService}">Price: $0.00</span>
            <button class="add-to-cart" onclick="addToCart('${selectedServiceDetails.name}', ${selectedServiceDetails.price}, document.getElementById('${selectedService}-quantity').value)">Add to Cart</button>
        `;
    } else {
        descriptionElement.innerHTML = "Select a valid service option.";
    }
}



function updatePrice(serviceName, pricePerUnit, quantityId) {
    const quantity = parseInt(document.getElementById(quantityId).value) || 0;
    const totalPrice = (pricePerUnit * quantity) / 1000;
    document.getElementById(`price-${quantityId.replace('-quantity', '')}`).innerText = `Price: $${totalPrice.toFixed(2)}`;
}

function addToCart(serviceName, price, quantity) {
    quantity = parseInt(quantity) || 0;
    if (quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    const existingItem = cart.find(item => item.name === serviceName);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name: serviceName, price, quantity });
    }

    updateCartDisplay();
}

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalCostElement = document.getElementById('total-cost');

    cartItemsElement.innerHTML = '';
    totalCost = 0;

    cart.forEach((item, index) => {
        const itemTotal = (item.price * item.quantity) / 1000;
        totalCost += itemTotal;
        cartItemsElement.innerHTML += `<li>${item.name}: ${item.quantity} @ $${item.price.toFixed(2)} / 1000 - Total: $${itemTotal.toFixed(2)}
            <button onclick="removeFromCart(${index})">Remove</button></li>`;
    });

    totalCostElement.innerText = `Total: $${totalCost.toFixed(2)}`;
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}

function whatsApp() {
    const phoneNumber = "+96181243405";
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let message = "Hello! I would like to order:\n";
    cart.forEach(item => {
        const itemTotal = (item.price * item.quantity) / 1000;
        message += `${item.name}: ${item.quantity} units for $${itemTotal.toFixed(2)}\n`;
    });

    message += `\nTotal Cost: $${totalCost.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
}

const audio = document.getElementById('bgm');
const playPauseButton = document.getElementById('play-pause-btn');

// Play/Pause Button
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause Music';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play Music';
    }
});
function start () {
    // (PART A) GET SPLASH SCREEN 
    let splash = document.getElementById("splash");
  
    // (PART B) PLAY BGM & REMOVE SPLASH SCREEN AFTER FADE IN
    splash.addEventListener("transitionend", () => {
      document.getElementById("bgm").play();
      splash.remove();
    });
  
    // (PART C) GO!
    splash.classList.add("hide");
  }