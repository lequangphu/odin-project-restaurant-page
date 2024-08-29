// Home tab content
const createHomeContent = () => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home-content');

  const title = document.createElement('h1');
  title.textContent = 'Welcome to Odin Restaurant';
  homeDiv.appendChild(title);

  const description = document.createElement('p');
  description.textContent = 'Experience the finest Nordic cuisine in a cozy atmosphere.';
  homeDiv.appendChild(description);

  return homeDiv;
};

// Menu tab content
const createMenuContent = () => {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-content');

  const title = document.createElement('h2');
  title.textContent = 'Our Menu';
  menuDiv.appendChild(title);

  const menuItems = [
    { name: 'Viking Feast Platter', price: '$25' },
    { name: 'Odin\'s Salmon', price: '$22' },
    { name: 'Thor\'s Thunder Burger', price: '$18' },
  ];

  const menuList = document.createElement('ul');
  menuItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - ${item.price}`;
    menuList.appendChild(listItem);
  });

  menuDiv.appendChild(menuList);
  return menuDiv;
};

// About tab content
const createAboutContent = () => {
  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('about-content');

  const title = document.createElement('h2');
  title.textContent = 'About Odin Restaurant';
  aboutDiv.appendChild(title);

  const story = document.createElement('p');
  story.textContent = 'Odin Restaurant was founded in 2023 with a passion for bringing authentic Nordic flavors to your table. Our chefs use traditional techniques and locally-sourced ingredients to create unforgettable dining experiences.';
  aboutDiv.appendChild(story);

  return aboutDiv;
};

// Export the modules
export { createHomeContent, createMenuContent, createAboutContent };