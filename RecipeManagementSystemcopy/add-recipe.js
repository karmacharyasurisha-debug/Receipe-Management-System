const form = document.getElementById("addRecipeForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const image = document.getElementById("image").value;
    const preparationTime = document.getElementById("preparationTime").value;
    const serving = document.getElementById("serving").value;

    const ingredients = document
        .getElementById("ingredients")
        .value
        .split("\n")
        .map(item => item.trim())
        .filter(item => item !== "");

    const steps = document
        .getElementById("steps")
        .value
        .split("\n")
        .map(item => item.trim())
        .filter(item => item !== "");

    const recipe = {
        title,
        category,
        image,
        preparationTime,
        serving,
        ingredients,
        steps
    };

    try {
        const response = await fetch("http://localhost:3000/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Recipe saved successfully!");
            form.reset();
        } else {
            alert(data.error || "Failed to save recipe");
        }

    } catch (error) {
        console.error(error);
        alert("Could not connect to the server.");
    }
});