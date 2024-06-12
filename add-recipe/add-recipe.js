document.getElementById('add-recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('recipe-title').value;
    const image = document.getElementById('recipe-image').files[0];
    const description = document.getElementById('recipe-description').value;
    const ingredients = document.getElementById('recipe-ingredients').value.split('\n');
    const steps = document.getElementById('recipe-steps').value.split('\n');

    const recipeData = {
        title,
        image,
        description,
        ingredients,
        steps
    };

    console.log('Recipe Data:', recipeData);

    //aqedan gaushvi es recipeData, backendshi ro sheqmna axali recepti
});
