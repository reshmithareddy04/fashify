async function getWeatherData(location) {
    const weatherData = {
      'Amaravati': { temperature: 30, condition: 'Hot and Humid', climate: 'Tropical' },
      'Itanagar': { temperature: 15, condition: 'Cool and Rainy', climate: 'Temperate' },
      'Dispur': { temperature: 25, condition: 'Humid and Rainy', climate: 'Subtropical' },
      'Patna': { temperature: 32, condition: 'Hot and Dry', climate: 'Tropical' },
      'Raipur': { temperature: 33, condition: 'Hot and Humid', climate: 'Tropical' },
      'Panaji': { temperature: 29, condition: 'Warm and Humid', climate: 'Tropical Coastal' },
      'Gandhinagar': { temperature: 34, condition: 'Hot and Dry', climate: 'Arid' },
      'Chandigarh': { temperature: 28, condition: 'Warm and Dry', climate: 'Semi-Arid' },
      'Shimla': { temperature: 10, condition: 'Cold and Snowy', climate: 'Alpine' },
      'Ranchi': { temperature: 31, condition: 'Hot and Humid', climate: 'Tropical' },
      'Bengaluru': { temperature: 28, condition: 'Warm and Pleasant', climate: 'Tropical' },
      'Thiruvananthapuram': { temperature: 29, condition: 'Hot and Rainy', climate: 'Tropical Monsoon' },
      'Bhopal': { temperature: 32, condition: 'Hot and Dry', climate: 'Tropical' },
      'Mumbai': { temperature: 30, condition: 'Hot and Humid', climate: 'Tropical' },
      'Imphal': { temperature: 20, condition: 'Cool and Rainy', climate: 'Subtropical' },
      'Shillong': { temperature: 18, condition: 'Cool and Rainy', climate: 'Temperate' },
      'Aizawl': { temperature: 22, condition: 'Mild and Rainy', climate: 'Subtropical' },
      'Kohima': { temperature: 20, condition: 'Cool and Humid', climate: 'Subtropical' },
      'Bhubaneswar': { temperature: 31, condition: 'Hot and Humid', climate: 'Tropical' },
      'Jaipur': { temperature: 35, condition: 'Hot and Dry', climate: 'Arid' },
      'Gangtok': { temperature: 12, condition: 'Cold and Rainy', climate: 'Alpine' },
      'Chennai': { temperature: 32, condition: 'Hot and Humid', climate: 'Tropical' },
      'Hyderabad': { temperature: 33, condition: 'Hot and Dry', climate: 'Tropical' },
      'Agartala': { temperature: 26, condition: 'Humid and Rainy', climate: 'Subtropical' },
      'Lucknow': { temperature: 30, condition: 'Hot and Dry', climate: 'Tropical' },
      'Dehradun': { temperature: 15, condition: 'Cool and Pleasant', climate: 'Temperate' },
      'Kolkata': { temperature: 29, condition: 'Hot and Humid', climate: 'Tropical' },
      'Port Blair': { temperature: 28, condition: 'Warm and Rainy', climate: 'Tropical' },
      'Silvassa': { temperature: 30, condition: 'Hot and Humid', climate: 'Tropical' },
      'Daman': { temperature: 29, condition: 'Warm and Humid', climate: 'Tropical Coastal' },
      'Kavaratti': { temperature: 29, condition: 'Warm and Rainy', climate: 'Tropical' },
      'New Delhi': { temperature: 30, condition: 'Hot and Dry', climate: 'Semi-Arid' },
      'Puducherry': { temperature: 31, condition: 'Hot and Humid', climate: 'Tropical' },
      'Srinagar': { temperature: 10, condition: 'Cold and Snowy', climate: 'Alpine' },
      'Leh': { temperature: 5, condition: 'Cold and Dry', climate: 'High-Altitude Desert' },
      'UK': { temperature: 15, condition: 'Cool and Rainy', climate: 'Temperate Oceanic' },
      'USA': { temperature: 20, condition: 'Varied', climate: 'Continental' },
      'California': { temperature: 22, condition: 'Warm and Sunny', climate: 'Mediterranean' },
      'New York': { temperature: 18, condition: 'Mild and Humid', climate: 'Humid Continental' },
      'Europe': { temperature: 16, condition: 'Mild and Varied', climate: 'Temperate' },
      'Paris': { temperature: 17, condition: 'Mild and Rainy', climate: 'Temperate Oceanic' },
      'Antarctica': { temperature: -30, condition: 'Freezing and Windy', climate: 'Polar' },
    };
    return weatherData[location] || { temperature: 20, condition: 'Sunny', climate: 'Temperate' };
  }
  
  async function getWeatherOutfits(condition, temperature, location) {
    const outfits = {
      'Amaravati': [
        { imageUrl: '/assets/kurta.jpg', description: 'Light cotton kurta and churidar' },
        { imageUrl: '/assets/saree.jpg', description: 'Breathable silk saree with short-sleeve blouse' },
      ],
      'Shimla': [
        { imageUrl: '/assets/sweater.jpg', description: 'Woolen sweater and thermal pants' },
        { imageUrl: '/assets/jacket.jpg', description: 'Padded jacket and scarf' },
      ],
      'Jaipur': [
        { imageUrl: '/assets/turban.jpg', description: 'Light turban and loose cotton kurta' },
        { imageUrl: '/assets/angrakha.jpg', description: 'Angrakha with breathable dhoti' },
      ],
      'Thiruvananthapuram': [
        { imageUrl: '/assets/mundu.jpg', description: 'White mundu and cotton shirt' },
        { imageUrl: '/assets/saree2.jpg', description: 'Light cotton saree with minimal jewelry' },
      ],
      'New Delhi': [
        { imageUrl: '/assets/salwar.jpg', description: 'Cotton salwar kameez with dupatta' },
        { imageUrl: '/assets/kurta2.jpg', description: 'Light kurta with palazzo pants' },
      ],
      'Mumbai': [
        { imageUrl: '/assets/kurti.jpg', description: 'Short kurti with jeans' },
        { imageUrl: '/assets/saree3.jpg', description: 'Georgette saree with sleeveless blouse' },
      ],
      'Chennai': [
        { imageUrl: '/assets/outfit1.jpg', description: 'Light T-shirt and Shorts' },
        { imageUrl: '/assets/outfit2.jpg', description: 'Sunglasses and Hat' },
      ],
      'Port Blair': [
        { imageUrl: '/assets/tshirt.jpg', description: 'Light T-shirt and cotton shorts' },
        { imageUrl: '/assets/sarong.jpg', description: 'Cotton sarong and tank top' },
      ],
      'UK': [
        { imageUrl: '/assets/raincoat.jpg', description: 'Waterproof raincoat and boots' },
        { imageUrl: '/assets/sweater2.jpg', description: 'Knit sweater and jeans' },
      ],
      'California': [
        { imageUrl: '/assets/tshirt.jpg', description: 'Casual T-shirt and shorts' },
        { imageUrl: '/assets/sunglasses.jpg', description: 'Sunglasses and light jacket' },
      ],
      'New York': [
        { imageUrl: '/assets/coat.jpg', description: 'Trench coat and scarf' },
        { imageUrl: '/assets/boots.jpg', description: 'Ankle boots and layered outfit' },
      ],
      'Paris': [
        { imageUrl: '/assets/beret.jpg', description: 'Beret and tailored coat' },
        { imageUrl: '/assets/dress.jpg', description: 'Chic dress with cardigan' },
      ],
      'Antarctica': [
        { imageUrl: '/assets/parka.jpg', description: 'Insulated parka and thermal layers' },
        { imageUrl: '/assets/gloves.jpg', description: 'Heavy gloves and snow boots' },
      ],
    };
  
    const defaultOutfits = [
      { imageUrl: '/assets/outfit1.jpg', description: 'Light T-shirt and Shorts' },
      { imageUrl: '/assets/outfit2.jpg', description: 'Sunglasses and Hat' },
    ];
  
    if (temperature > 30) {
      return outfits[location]?.filter(outfit => outfit.description.includes('Light') || outfit.description.includes('Cotton')) || defaultOutfits;
    } else if (temperature < 10) {
      return outfits[location]?.filter(outfit => outfit.description.includes('Woolen') || outfit.description.includes('Insulated')) || defaultOutfits;
    }
    return outfits[location] || defaultOutfits;
  }
  
  async function classifyOutfit(image) {
    return {
      imageUrl: image || '/assets/sample-outfit.jpg',
      style: 'Casual',
      suggestion: 'Add a denim jacket for a trendy look.',
    };
  }
  
  async function getLocationStyles(location) {
    const styles = {
      'New Delhi': {
        style: 'Modern Indian',
        description: 'Anarkali suit with statement jewelry.',
        imageUrl: '/assets/anarkali.jpg',
      },
      'Mumbai': {
        style: 'Bollywood Chic',
        description: 'Bright lehenga with crop top.',
        imageUrl: '/assets/lehenga.jpg',
      },
      'Kolkata': {
        style: 'Traditional Bengali',
        description: 'Handwoven saree with gold jewelry.',
        imageUrl: '/assets/bengali-saree.jpg',
      },
      'Paris': {
        style: 'French Chic',
        description: 'Tailored blazer, skinny jeans, and heels.',
        imageUrl: '/assets/paris-style.jpg',
      },
      'New York': {
        style: 'Urban Trendy',
        description: 'Leather jacket, sneakers, and graphic tee.',
        imageUrl: '/assets/ny-style.jpg',
      },
      'Antarctica': {
        style: 'Expedition Gear',
        description: 'Thermal layers, insulated parka, and goggles.',
        imageUrl: '/assets/antarctica-style.jpg',
      },
    };
    return styles[location] || {
      style: 'Urban Casual',
      description: 'Jeans, sneakers, and a graphic tee.',
      imageUrl: '/assets/urban-style.jpg',
    };
  }
  
  async function matchColors(image) {
    return {
      primaryColor: '#ff4b5c',
      complementary: '#4bffc5',
      suggestion: 'Pair with green accessories for a vibrant look.',
    };
  }
  
  async function getCoordinates(location) {
    const coordinates = {
      'Amaravati': { latitude: 16.51, longitude: 80.52 },
      'Itanagar': { latitude: 27.08, longitude: 93.61 },
      'Dispur': { latitude: 26.14, longitude: 91.78 },
      'Patna': { latitude: 25.59, longitude: 85.13 },
      'Raipur': { latitude: 21.25, longitude: 81.63 },
      'Panaji': { latitude: 15.49, longitude: 73.82 },
      'Gandhinagar': { latitude: 23.22, longitude: 72.63 },
      'Chandigarh': { latitude: 30.73, longitude: 76.77 },
      'Shimla': { latitude: 31.10, longitude: 77.17 },
      'Ranchi': { latitude: 23.34, longitude: 85.30 },
      'Bengaluru': { latitude: 12.97, longitude: 77.59 },
      'Thiruvananthapuram': { latitude: 8.52, longitude: 76.93 },
      'Bhopal': { latitude: 23.25, longitude: 77.40 },
      'Mumbai': { latitude: 19.07, longitude: 72.88 },
      'Imphal': { latitude: 24.81, longitude: 93.93 },
      'Shillong': { latitude: 25.57, longitude: 91.89 },
      'Aizawl': { latitude: 23.73, longitude: 92.71 },
      'Kohima': { latitude: 25.67, longitude: 94.11 },
      'Bhubaneswar': { latitude: 20.29, longitude: 85.82 },
      'Jaipur': { latitude: 26.91, longitude: 75.78 },
      'Gangtok': { latitude: 27.33, longitude: 88.61 },
      'Chennai': { latitude: 13.08, longitude: 80.27 },
      'Hyderabad': { latitude: 17.38, longitude: 78.46 },
      'Agartala': { latitude: 23.83, longitude: 91.28 },
      'Lucknow': { latitude: 26.84, longitude: 80.94 },
      'Dehradun': { latitude: 30.31, longitude: 78.03 },
      'Kolkata': { latitude: 22.57, longitude: 88.36 },
      'Port Blair': { latitude: 11.62, longitude: 92.72 },
      'Silvassa': { latitude: 20.27, longitude: 73.00 },
      'Daman': { latitude: 20.39, longitude: 72.83 },
      'Kavaratti': { latitude: 10.56, longitude: 72.63 },
      'New Delhi': { latitude: 28.61, longitude: 77.21 },
      'Puducherry': { latitude: 11.91, longitude: 79.81 },
      'Srinagar': { latitude: 34.08, longitude: 74.79 },
      'Leh': { latitude: 34.15, longitude: 77.57 },
      'New York': { latitude: 40.71, longitude: -74.01 },
      'Paris': { latitude: 48.86, longitude: 2.35 },
      'Antarctica': { latitude: -90.00, longitude: 0.00 },
    };
    return coordinates[location] || { latitude: 40.71, longitude: -74.01 };
  }