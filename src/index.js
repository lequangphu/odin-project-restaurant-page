import createHomePage from './odin-restaurant-content.js';
// Get the content container
const contentContainer = document.getElementById('content');

// Create the home page content
const homePageContent = createHomePage();

// Append the home page content to the container
contentContainer.appendChild(homePageContent);
