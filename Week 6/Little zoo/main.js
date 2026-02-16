let animals = [
    { name: 'Fox', type: 'Mammal' },
    { name: 'Bear', type: 'Mammal' },
    { name: 'Eagle', type: 'Bird' },
    { name: 'Owl', type: 'Bird' },
    { name: 'Snake', type: 'Reptile' },
    { name: 'Frog', type: 'Amphibian' },
    { name: 'Shark', type: 'Fish' }
  ];

const animalList = document.getElementById('animalList');
const searchInput = document.getElementById('searchAnimal');
const filterType = document.getElementById('filterType');
const sortButton = document.getElementById('sortAnimals');
const newAnimalName = document.getElementById('newAnimalName');
const newAnimalType = document.getElementById('newAnimalType');
const addAnimalButton = document.getElementById('addAnimal');

  // Function to display the animal list

  const displayAnimals = (filteredAnimals) => {
    // Clear the existing list
    animalList.textContent = '';
 
    if (filteredAnimals.length == 0) {
      animalList.textContent = 'No animals found';
    } else {
      filteredAnimals.forEach((animal) => {
        const list = document.createElement('li');
        list.innerHTML = `<span>${animal.name} (${animal.type})</span><button class="remove" data-name="${animal.name}">Remove</button>`;
        // Add remove functionality
        list.querySelector('.remove').addEventListener('click', removeAnimal);
        animalList.appendChild(list);
      });
    }
  }
  
  // Remove animal function
  const removeAnimal = (event) =>  {
    const animalName = event.target.getAttribute('data-name');
    animals = animals.filter((animal) => animal.name !== animalName);
    applyFilters();
  }
  
  // Add new animal function
  const addNewAnimal = () => {
    const name = newAnimalName.value.trim();
    const type = newAnimalType.value;
  
    if (name && type) {
      animals.push({ name, type });
      newAnimalName.value = '';
      newAnimalType.value = '';
      applyFilters();
    }
  }
  
  // Filter animals by type
  const filterAnimals = () => {
    const type = filterType.value;
    let filteredAnimals = animals;
  
    if (type !== 'All') {
      filteredAnimals = animals.filter((animal) => animal.type === type);
    }
  
    applyFilters(filteredAnimals);
  }
  
  // Apply search and filter functionality
  const applyFilters = () => {
    const searchValue = searchInput.value.trim().toLowerCase();
    let filteredAnimals = animals;
  
    // Filter by search term
    if (searchValue) {
      filteredAnimals = filteredAnimals.filter((animal) =>
        animal.name.toLowerCase().includes(searchValue)
      );
    }
  
    // Filter by selected animal type
    filteredAnimals = filteredAnimals.filter((animal) => {
      const type = filterType.value;
      return type === 'All' || animal.type === type;
    });
  
    // Display filtered list
    displayAnimals(filteredAnimals);
  }
  
  // Sort animals alphabetically
  const sortAnimals = () => {
    animals.sort((a, b) => a.name.localeCompare(b.name));
    applyFilters();
  }

  searchInput.addEventListener('input', applyFilters);
  filterType.addEventListener('change', filterAnimals);
  addAnimalButton.addEventListener('click', addNewAnimal);
  sortButton.addEventListener('click', sortAnimals);
  
  displayAnimals(animals);