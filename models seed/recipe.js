{
    "id"; "ObjectId",
    "title"; "String",
    "cuisineTypeId"; "ObjectId", 
      {
        "name": "String",
        "quantity": "Number",
        "unit": { 
          "type": "String", 
          "enum": ["oz", "tsp", "tbs", "gms"]
        }
      }
    
    "prepTime"; "Number", 
    "cookTime"; "Number", 
    "servings"; "Number",
    "ovenTemperature"; "Number", 
      {
        "label": "String", 
        "enum": ["Vegan", "Gluten Free", "Kosher", "Halal"]
      }
    
    "directions"; [ 
        "stepNumber", "Number",
        "instruction", "String"
      ,
    ]
  }

  [
    {
      "id": "1",
      "title": "Spaghetti Carbonara",
      "cuisineTypeId": "1",
      "ingredients": [
        { "name": "spaghetti", "quantity": 400, "unit": "gms" },
        { "name": "eggs", "quantity": 4, "unit": "pcs" },
        { "name": "pancetta", "quantity": 150, "unit": "gms" },
        { "name": "Parmesan cheese", "quantity": 100, "unit": "gms" },
        { "name": "black pepper", "quantity": 1, "unit": "tsp" }
      ],
      "prepTime": 10,
      "cookTime": 15,
      "servings": 4,
      "ovenTemperature": null, 
      "dietaryLabels": [],
      "directions": [
        { "stepNumber": 1, "instruction": "Cook spaghetti according to package instructions." },
        { "stepNumber": 2, "instruction": "In a bowl, whisk together eggs and Parmesan cheese." },
        { "stepNumber": 3, "instruction": "In a pan, cook pancetta until crispy." },
        { "stepNumber": 4, "instruction": "Mix everything together and serve." }
      ]
    },
    {
      "id": "2",
      "title": "Tacos",
      "cuisineTypeId": "2",
      "ingredients": [
        { "name": "corn tortillas", "quantity": 8, "unit": "pcs" },
        { "name": "ground beef", "quantity": 500, "unit": "gms" },
        { "name": "lettuce", "quantity": 1, "unit": "cup" },
        { "name": "cheddar cheese", "quantity": 100, "unit": "gms" },
        { "name": "salsa", "quantity": 1, "unit": "cup" }
      ],
      "prepTime": 15,
      "cookTime": 20,
      "servings": 4,
      "ovenTemperature": null,
      "dietaryLabels": ["Gluten Free"],
      "directions": [
        { "stepNumber": 1, "instruction": "Cook ground beef in a skillet." },
        { "stepNumber": 2, "instruction": "Warm tortillas in a separate pan." },
        { "stepNumber": 3, "instruction": "Assemble tacos with beef, lettuce, and cheese." },
        { "stepNumber": 4, "instruction": "Serve with salsa." }
      ]
    },
    {
      "id": "3",
      "title": "Chana Masala",
      "cuisineTypeId": "3",
      "ingredients": [
        { "name": "chickpeas", "quantity": 400, "unit": "gms" },
        { "name": "onion", "quantity": 1, "unit": "pcs" },
        { "name": "tomato", "quantity": 2, "unit": "pcs" },
        { "name": "ginger", "quantity": 1, "unit": "tbs" },
        { "name": "garam masala", "quantity": 1, "unit": "tsp" }
      ],
      "prepTime": 10,
      "cookTime": 30,
      "servings": 4,
      "ovenTemperature": null,
      "dietaryLabels": ["Vegan", "Gluten Free"],
      "directions": [
        { "stepNumber": 1, "instruction": "Sauté onions and ginger in a pot." },
        { "stepNumber": 2, "instruction": "Add tomatoes and cook until soft." },
        { "stepNumber": 3, "instruction": "Stir in chickpeas and spices." },
        { "stepNumber": 4, "instruction": "Simmer and serve with rice." }
      ]
    }
  ]