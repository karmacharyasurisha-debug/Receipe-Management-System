const addRecipeForm = document.getElementById("addRecipeForm");

addRecipeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const newRecipe = {
    title: document.getElementById("title").value,
    category: document.getElementById("category").value,
    image: document.getElementById("image").value,
    ingredients: document.getElementById("ingredients").value.split("\n"),
    steps: document.getElementById("steps").value.split("\n")
  };

  // TODO: Replace this with a real API call to your backend, e.g:
  // fetch("http://localhost:3000/api/recipes", { method: "POST", body: JSON.stringify(newRecipe) ... })

  console.log("New recipe:", newRecipe);
  alert("Recipe saved! (This will connect to the backend next.)");
  window.location.href = "index.html";
});