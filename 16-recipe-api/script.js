const API_KEY="sk_live_FM9gwpiK0GlysgyHwHCO7OlIa9OPNKf4mhVEmflv193e748b"; // for testing, do not copy this method of including key
const BASE_API_URL="https://recipeapi.io/api/v1";

async function searchRecipes(cuisine, meal_type, difficulty) {
    // https://recipeapi.io/docs/resources/recipes/
    // the endpoint requires us to provide search terms and the API key
    const response = await axios.get(`${BASE_API_URL}/recipes`, {
        params: {
            "cuisine": cuisine,
            "meal_type":meal_type,
            "difficulty":difficulty
        },
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    })
    return response.data;
}

document.querySelector("#searchBtn").addEventListener("click", async function(){
    const name = document.querySelector("#name").value;
    const mealType = document.querySelector("#mealType").value;
    const difficulty = document.querySelector("#difficulty").value;
    const recipes = await searchRecipes(name, mealType, difficulty);
    console.log(recipes);
})