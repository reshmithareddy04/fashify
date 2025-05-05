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

async function getDressingTips(condition, temperature, climate, location) {
  const tips = {
    'Hot and Humid': [
      'Choose lightweight, breathable fabrics like cotton or linen to stay cool.',
      'Opt for loose-fitting clothing such as kurtas, sarees, or T-shirts with shorts.',
      'Use bright colors to reflect sunlight and add sunglasses for UV protection.',
      'Wear sandals or open-toe shoes to keep feet cool.',
      location === 'New Delhi' || location === 'Mumbai' ? 'Incorporate traditional styles like a cotton salwar kameez or short kurti with jeans.' : 'Avoid tight clothing to prevent discomfort in humid conditions.'
    ],
    'Hot and Dry': [
      'Wear UV-protective fabrics like cotton or bamboo to shield from the sun.',
      'Go for loose, light-colored clothing like turbans, angrakhas, or long tunics.',
      'Add a wide-brimmed hat or dupatta for extra sun protection.',
      'Choose breathable sandals or loafers.',
      location === 'Jaipur' ? 'Try a light turban with a cotton kurta for cultural flair.' : 'Stay hydrated and avoid heavy accessories.'
    ],
    'Hot and Rainy': [
      'Select quick-drying fabrics like cotton blends or lightweight synthetics.',
      'Wear short-sleeve sarees or mundus with minimal layers to stay comfortable.',
      'Carry a compact umbrella or wear a waterproof hat.',
      'Opt for water-resistant sandals.',
      location === 'Thiruvananthapuram' ? 'A white mundu with a cotton shirt is perfect for rainy days.' : 'Avoid heavy jewelry that can get damaged in rain.'
    ],
    'Warm and Humid': [
      'Choose breathable cotton or chambray for comfort in sticky weather.',
      'Wear relaxed outfits like kurtis, T-shirts, or sarongs with shorts.',
      'Use sunglasses and a light scarf for sun and humidity protection.',
      'Pick sandals or sneakers for versatility.',
      location === 'Panaji' ? 'A white mundu with a cotton shirt adds coastal charm.' : 'Keep outfits simple to avoid overheating.'
    ],
    'Warm and Pleasant': [
      'Opt for cotton or light synthetics for a balance of style and comfort.',
      'Wear casual T-shirts, dresses, or kurtis with chinos or skirts.',
      'Add a light jacket or cardigan for evening coolness.',
      'Choose sneakers or loafers for a polished look.',
      location === 'Bengaluru' ? 'Pair a graphic tee with denim shorts for a trendy vibe.' : 'Layer lightly for temperature changes.'
    ],
    'Warm and Sunny': [
      'Wear lightweight cotton or linen outfits like T-shirts and shorts.',
      'Add sunglasses and a cap for sun protection.',
      'Choose breathable sneakers or sandals.',
      'Keep outfits vibrant to match the sunny vibe.',
      location === 'California' ? 'A casual T-shirt with shorts and sunglasses is perfect for the Mediterranean climate.' : 'Avoid dark colors that absorb heat.'
    ],
    'Warm and Rainy': [
      'Select quick-drying cotton blends or lightweight waterproof fabrics.',
      'Wear light T-shirts, sarongs, or dresses with a waterproof layer.',
      'Carry a small umbrella or wear a water-resistant hat.',
      'Opt for water-resistant sandals or shoes.',
      location === 'Port Blair' ? 'A cotton sarong with a tank top is ideal for rainy tropical weather.' : 'Ensure footwear has good grip for wet surfaces.'
    ],
    'Cool and Rainy': [
      'Layer with water-resistant materials like treated cotton or light wool.',
      'Wear hoodies, long-sleeve shirts, or chic dresses with tights.',
      'Carry a compact umbrella and wear a waterproof jacket.',
      'Choose waterproof boots or closed-toe shoes.',
      location === 'Paris' ? 'A tailored coat with a beret adds French chic to rainy days.' : 'Use bright colors to lift the mood.'
    ],
    'Cool and Pleasant': [
      'Wear breathable layers like cotton sweaters or long-sleeve tees.',
      'Opt for jeans, trousers, or skirts with light jackets.',
      'Add a scarf or hat for style and slight warmth.',
      'Choose sneakers or loafers for comfort.',
      location === 'Dehradun' ? 'A long-sleeve tee with jeans and a light jacket is perfect for temperate weather.' : 'Keep a light layer handy for cool breezes.'
    ],
    'Cool and Humid': [
      'Choose breathable, moisture-wicking fabrics like cotton or blends.',
      'Wear relaxed hoodies, tees, or kurtas with trousers.',
      'Add a light waterproof jacket for potential rain.',
      'Opt for closed-toe shoes or sneakers.',
      location === 'Kohima' ? 'A relaxed hoodie with trousers suits the humid subtropical climate.' : 'Avoid heavy layers to stay comfortable.'
    ],
    'Cold and Snowy': [
      'Layer with insulating fabrics like wool, fleece, or thermal synthetics.',
      'Wear thermal shirts, sweaters, and padded jackets with insulated pants.',
      'Add wool scarves, beanies, and gloves for warmth.',
      'Choose insulated, waterproof snow boots.',
      location === 'Shimla' ? 'Layer a pashmina shawl over a woolen sweater for extra warmth.' : 'Use a base, mid, and outer layer to trap heat.'
    ],
    'Cold and Dry': [
      'Wear heavy wool or thermal layers to combat dry cold.',
      'Opt for insulated jackets, thermal tops, and wool trousers.',
      'Add sunglasses for glare and a beanie for warmth.',
      'Choose insulated boots with good traction.',
      location === 'Leh' ? 'A heavy wool jacket with thermal layers suits the high-altitude desert.' : 'Moisturize skin to prevent dryness.'
    ],
    'Cold and Rainy': [
      'Use waterproof outer layers with wool or fleece underneath.',
      'Wear thermal tops, sweaters, and waterproof jackets.',
      'Add a scarf, beanie, and waterproof gloves.',
      'Choose waterproof boots with insulation.',
      location === 'Gangtok' ? 'A waterproof jacket over a fleece sweater is ideal for alpine rain.' : 'Ensure all layers are breathable to avoid overheating.'
    ],
    'Mild and Humid': [
      'Wear breathable cotton or denim with light layers.',
      'Opt for trench coats, tees, or dresses with jeans.',
      'Add a light scarf or sunglasses for style.',
      'Choose ankle boots or sneakers.',
      location === 'New York' ? 'A leather jacket with a graphic tee adds urban flair.' : 'Keep a light jacket for humidity changes.'
    ],
    'Mild and Rainy': [
      'Use water-resistant fabrics with breathable layers.',
      'Wear cardigans, tailored coats, or hoodies with jeans.',
      'Carry an umbrella and wear a waterproof hat.',
      'Choose waterproof ankle boots or shoes.',
      location === 'Paris' ? 'A chic dress with a cardigan and tailored coat is perfect for rainy days.' : 'Use neutral colors with pops of color.'
    ],
    'Mild and Varied': [
      'Wear versatile cotton blends or denim for adaptability.',
      'Opt for blazers, hoodies, or layered tees with chinos.',
      'Add a light scarf or foldable umbrella for weather changes.',
      'Choose loafers or sneakers for comfort.',
      location === 'Europe' ? 'A tailored blazer with skinny jeans suits the temperate climate.' : 'Keep outfits flexible for sudden changes.'
    ],
    'Varied': [
      'Wear adaptable layers like cotton tees with denim jackets.',
      'Opt for jeans, chinos, or skirts with light coats.',
      'Add sunglasses, scarves, or hats for variable weather.',
      'Choose versatile sneakers or ankle boots.',
      location === 'USA' ? 'A denim jacket with sneakers works for continental climates.' : 'Always have a removable layer handy.'
    ],
    'Freezing and Windy': [
      'Use expedition-grade fabrics like insulated synthetics or heavy wool.',
      'Wear thermal layers, insulated parkas, and windproof pants.',
      'Add heavy gloves, goggles, and insulated beanies.',
      'Choose heavy-duty snow boots with grip.',
      location === 'Antarctica' ? 'Prioritize thermal layers and an insulated parka for polar conditions.' : 'Ensure all exposed skin is covered.'
    ],
    'Sunny': [
      'Wear lightweight cotton or linen for breathability.',
      'Opt for T-shirts, shorts, or light dresses.',
      'Add sunglasses and a hat for sun protection.',
      'Choose sandals or breathable sneakers.',
      'Keep outfits bright and airy to match the sunny weather.'
    ]
  };

  return tips[condition] || [
    'Wear versatile cotton or denim for comfort.',
    'Opt for T-shirts, jeans, or light dresses.',
    'Add a light jacket or scarf for slight temperature changes.',
    'Choose sneakers or loafers for a casual look.',
    'Keep a foldable umbrella handy for unexpected weather.'
  ];
}
