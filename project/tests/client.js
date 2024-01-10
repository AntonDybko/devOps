const axios = require("axios");

// Podstawowy URL twojego API
const apiUrl = "http://localhost:8000"; // Zaktualizuj URL, jeśli jest inny

// GET request - Pobranie danych
/*axios.get(`${apiUrl}/`)
  .then((response) => {
    console.log("GET Response:", response.data);
    console.log(response.status)
    //console.log(response)
    console.log(JSON.parse(response))
  })
  .catch((error) => {
    console.error("GET Error:", error);
  });
*/
const newGame = {
  title: "New Game",
  genre: "Action",
  releaseYear: 2023,
};
axios.post(`${apiUrl}/`, newGame)
.then((response) => {
    console.log("POST Response:", response.body);
})
.catch((error) => {
    console.error("POST Error:", error);
});

/*const gameIdToUpdate = "653070409d3b2e4cb6ebded4"; // Zaktualizuj zgodnie z rzeczywistym identyfikatorem gry
const updatedGame = {
  title: "Updated Game x3",
  genre: "Adventure",
  releaseYear: 2024,
};
axios.put(`${apiUrl}/${gameIdToUpdate}`, updatedGame)
  .then((response) => {
    console.log("PUT Response:", response.data);
  })
  .catch((error) => {
    console.error("PUT Error:", error);
  });*/

// DELETE request - Usunięcie zasobu (gra)
/*const gameIdToDelete = "65306f558c4ab7f57879fad8"; // Zaktualizuj zgodnie z rzeczywistym identyfikatorem gry
axios.delete(`${apiUrl}/${gameIdToDelete}`)
  .then(() => {
    console.log("DELETE Success: Game deleted.");
  })
  .catch((error) => {
    console.error("DELETE Error:", error);
  });*/