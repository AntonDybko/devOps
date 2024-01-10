
const gameQueries = {
    getGames: "SELECT * FROM games",
    getGame: "SELECT g FROM games g WHERE g.id = $1",
    checkGameExists: "SELECT g FROM games g WHERE g.title = $1",
    postGame: "INSERT INTO games (title, genre, release_year) VALUES ($1, $2, $3) RETURNING *",
    updateGame: "UPDATE games SET title = $1, genre = $2, release_year = $3 WHERE id = $4 RETURNING *",
    deleteGame: "DELETE FROM games WHERE id = $1"
}

module.exports = gameQueries;