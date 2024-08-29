// Function to create and return the home page content
function createHomePage() {
  const content = document.createElement('div');
  content.classList.add('home-page');

  const header = document.createElement('h1');
  header.textContent = 'Welcome to Odin Restaurant';
  content.appendChild(header);

  const description = document.createElement('p');
  description.textContent = 'Experience the finest Nordic cuisine in a cozy atmosphere.';
  content.appendChild(description);

  const specialties = document.createElement('ul');
  specialties.innerHTML = `
    <li>Traditional Scandinavian dishes</li>
    <li>Fresh, locally-sourced ingredients</li>
    <li>Exquisite wine selection</li>
  `;
  content.appendChild(specialties);

  const cta = document.createElement('button');
  cta.textContent = 'Make a Reservation';
  content.appendChild(cta);

  return content;
}

// Export the function to be used in index.js
export default createHomePage;
