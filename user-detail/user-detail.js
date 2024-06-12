document.addEventListener("DOMContentLoaded", function() {
    const userData = {
        username: "bali02",
        email: "aleksandre@gmail.com",
        password: "password123",
        recipes: [
            {
                id: 1,
                title: "Soko Kecze",
                image: "/Images/premium-1.png",
                description: "Mushrooms with traditional Georgian cheese Sulguni on top baked in oven."
            },
            {
                id: 2,
                title: "Khinkali",
                image: "/Images/premium-2.png",
                description: "Traditional Georgian meat dumplings with a mix of some greens and soup inside."
            },
            {
                id: 3,
                title: "Nigvziani Badrijani",
                image: "/Images/premium-3.png",
                description: "Eggplants cooked with walnut stuffing and fresh pomegranate on top."
            },
            {
                id: 4,
                title: "Qababi",
                image: "/Images/premium-4.png",
                description: "Traditional georgian food, mixed meat grilled and wrapped in lavashi bread."
            },
        ]
    };

    document.getElementById('username').innerText = userData.username;
    document.getElementById('email').innerText = userData.email;
    document.getElementById('password').innerText = '••••••••'; // temp

    const recipesContainer = document.getElementById('user-recipes');
    userData.recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <a href="/recipe-detail/?id=${recipe.id}">
                <img src="${recipe.image}" alt="${recipe.title}">
                <h4>${recipe.title}</h4>
                <p>${recipe.description}</p>
            </a>
        `;
        recipesContainer.appendChild(recipeCard);
    });
});
