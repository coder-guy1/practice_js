async function fetchData() {
  // Define the API endpoint URL for fetching all products
  const apiUrl = "https://fakestoreapi.com/products";

  try {
    // Use the fetch() function to make a GET request to the API endpoint
    const response = await fetch(apiUrl);

    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    // Parse the JSON data from the response
    const data = await response.json();

    // Store the array of products in a variable
    const products = data;

    console.log(products);
    products.forEach((element) => {
      const card = document.createElement("div");

      card.innerHTML = `
      <div class="product-card">
      <div class="product-image">
        <img src="${element.image}" alt="Product Image" />
      </div>
      <div class="product-details">
        <h2 class="product-title">${element.title}</h2>
        <h4 class="product-price">${element.price}</h4>
        <button class="add-to-cart-btn">Add to Cart</button>
        <button class="view-btn">View</button>
      </div>
      </div>
    `;
      const container = document.querySelector(".container");

      container.appendChild(card);
    });

    // Handle the products array here

    // You can now use the 'products' variable to work with the data further
  } catch (error) {
    // Handle errors here, such as network errors or invalid JSON in the response
    console.error("There has been a problem with your fetch operation:", error);
  }
}

// Call the async function to fetch and store the data
fetchData();

var loginForm = document.getElementById("loginForm");
var loginBtn = document.getElementById("loginBtn");

loginForm.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var username = document.getElementById("UserName").value;
  var password = document.getElementById("lname").value;

  // Simple validation: Check if username and password are not empty
  if (username.trim() === "" || password.trim() === "") {
    alert("Please enter both username and password.");
  } else {
    // Perform your login logic here (send data to server, etc.)
    // For demonstration purposes, let's just show an alert
    alert("Logged in successfully!");
  }
});

var forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
forgotPasswordBtn.addEventListener("click", function () {
  // Handle forgot password functionality here
  alert("Forgot Password button clicked!");
});
