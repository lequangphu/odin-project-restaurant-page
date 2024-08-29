import { createHomeContent, createMenuContent, createAboutContent } from './odin-restaurant-content.js';

const contentContainer = document.getElementById('content');

function loadContent(contentCreator) {
  contentContainer.innerHTML = '';
  contentContainer.appendChild(contentCreator());
}

document.addEventListener('DOMContentLoaded', () => {
  const homeButton = document.querySelector('button:nth-child(1)');
  const menuButton = document.querySelector('button:nth-child(2)');
  const aboutButton = document.querySelector('button:nth-child(3)');

  homeButton.addEventListener('click', () => loadContent(createHomeContent));
  menuButton.addEventListener('click', () => loadContent(createMenuContent));
  aboutButton.addEventListener('click', () => loadContent(createAboutContent));

  // Load home content by default
  loadContent(createHomeContent);
});