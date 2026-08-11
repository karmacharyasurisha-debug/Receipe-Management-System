// Placeholder recipe data — this will later come from your backend/database
const recipes = [
  {
    id: 1,
    title: "Masala Chai",
    category: "Breakfast",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5laxz67YFORKBHO7Gqa9W8osNfMiSy8iap8KzRYMFsA&s=10text=Masala+Chai",
    description: "Spiced milk tea, perfect for a warm morning start.",
    ingredients: ["2 cups water", "1 cup milk", "2 tbsp tea leaves", "1 tsp ginger", "2 cardamom pods", "Sugar to taste"],
    steps: ["Boil water with ginger and cardamom", "Add tea leaves and simmer", "Pour in milk and bring to a boil", "Strain and add sugar to taste"]
  },
  {
    id: 2,
    title: "Sel Roti",
    category: "Breakfast",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bCLbVIewQFgCVRDRvm9ZWfEYMNsC0N_Y3yUU0IFgXQ&s=10text=Sel+Roti",
    description: "Sweet, ring-shaped rice bread, crispy outside and soft inside.",
    ingredients: ["2 cups rice flour", "1 banana", "Sugar to taste", "Cardamom powder", "Oil for frying"],
    steps: ["Blend rice flour, banana, sugar and cardamom into a batter", "Rest the batter for an hour", "Pipe into rings in hot oil", "Fry until golden brown on both sides"]
  },
  {
    id: 3,
    title: "Vegetable Paratha",
    category: "Lunch",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqKMkWBrdg4zIAS0B8oKZHYuwIumbu3oWqfBQZj0H6Q&s=10text=Paratha",
    description: "Flatbread stuffed with spiced mashed vegetables.",
    ingredients: ["2 cups flour", "1 cup mixed vegetables", "1 tsp cumin", "Salt to taste", "Ghee for cooking"],
    steps: ["Knead dough with flour and water", "Prepare spiced vegetable filling", "Stuff dough with filling and roll flat", "Cook on a hot pan with ghee until golden"]
  },
  {
    id: 4,
    title: "Dal Bhat",
    category: "Lunch",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmbbXW0xYrDtxHFzGXWMKNWVcOtr5exxu3vimt_7mb6Q&s=10text=Dal+Bhat",
    description: "Traditional lentil soup served with steamed rice.",
    ingredients: ["1 cup lentils", "2 cups rice", "1 onion", "2 tomatoes", "Turmeric", "Cumin", "Salt to taste"],
    steps: ["Cook rice separately until fluffy", "Boil lentils with turmeric until soft", "Prepare a tempering with onion, tomato and cumin", "Mix tempering into lentils and simmer", "Serve hot with rice"]
  },
  {
    id: 5,
    title: "Chicken Curry",
    category: "Lunch",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjc6wyq0CLuPnaX8NQGsEqdqz0ypbU_bSSLv9fYePlQ&s=10text=Chicken+Curry",
    description: "Rich and spiced chicken curry cooked with onion-tomato gravy.",
    ingredients: ["500g chicken", "2 onions", "2 tomatoes", "Ginger-garlic paste", "Curry spices", "Oil"],
    steps: ["Saute onions until golden", "Add ginger-garlic paste and spices", "Add tomatoes and cook into a gravy", "Add chicken and simmer until cooked", "Garnish and serve"]
  },
  {
    id: 6,
    title: "Vegetable Momo",
    category: "Dinner",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3nMpSO5Hr7L7d8ij2ncZK6f-MM6nB2qJ6_cE4MIRNQ&s=10text=Momo",
    description: "Steamed dumplings filled with fresh vegetables and spices.",
    ingredients: ["2 cups flour", "2 cups chopped vegetables", "1 onion", "Ginger-garlic paste", "Salt and pepper"],
    steps: ["Make a soft dough with flour and water", "Mix vegetables with spices for filling", "Roll dough into small circles and fill", "Fold into dumplings and steam for 15 minutes"]
  },
  {
    id: 7,
    title: "Grilled Fish",
    category: "Dinner",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVtFpKnrWehIDTuMnihtkkl6LzSekfSp9yLSwA9bTJw&s=10text=Grilled+Fish",
    description: "Marinated fish fillets grilled to smoky perfection.",
    ingredients: ["2 fish fillets", "1 lemon", "2 tbsp olive oil", "Garlic", "Herbs and spices"],
    steps: ["Marinate fish with lemon, oil, garlic and herbs", "Let it rest for 30 minutes", "Grill on each side until cooked through", "Serve with a side salad"]
  },
  {
    id: 8,
    title: "Vegetable Fried Rice",
    category: "Dinner",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeu-FsD4YeJtbtxmjg9N5XyaM2YpBP2aTdhyMUEsjWjw&s=10text=Fried+Rice",
    description: "Stir-fried rice loaded with colorful vegetables.",
    ingredients: ["2 cups cooked rice", "1 cup mixed vegetables", "2 tbsp soy sauce", "Spring onion", "Garlic"],
    steps: ["Heat oil and saute garlic", "Add vegetables and stir-fry until tender", "Add rice and soy sauce", "Toss well and garnish with spring onion"]
  },
  
  {
    id: 9,
    title: "Chocolate Cake",
    category: "Dessert",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Su3m8FqUkgBYihLF9CsKJ2y7_1oavsaVZ6qDnGCPnw&s=10text=Chocolate+Cake",
    description: "Soft, rich chocolate cake perfect for any celebration.",
    ingredients: ["2 cups flour", "1 cup cocoa powder", "2 eggs", "1 cup sugar", "1 cup milk", "Butter"],
    steps: ["Mix dry ingredients together", "Whisk eggs, sugar, milk and butter separately", "Combine both mixtures into a smooth batter", "Bake at 180°C for 30-35 minutes"]
  },
  {
    id: 10,
    title: "Fruit Custard",
    category: "Dessert",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9BI0kwu5Y1VimBpcLdaKoHvXTw64L7zCKm50GeH4bw&s=10text=Fruit+Custard",
    description: "Creamy custard mixed with fresh seasonal fruits.",
    ingredients: ["2 cups milk", "2 tbsp custard powder", "Sugar to taste", "Mixed fruits (apple, banana, grapes)"],
    steps: ["Boil milk and dissolve custard powder in a little cold milk", "Add custard mixture to boiling milk and stir until thick", "Let it cool completely", "Mix in chopped fruits and chill before serving"]
  }
];