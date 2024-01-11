const pool = require("../dbConfig");
const queries = require("../queries");

const gameController = {
    getGames: (req, res) => {
        pool.query(queries.getGames, (err, results) => {
            if (err) res.status(500).json({ error: "Internal server error" });
            res.status(200).json(results.rows);
        });
    },
    getGame: (req, res) => {
        const gameId = req.params.gameId;
        pool.query(queries.getGame, [gameId], (err, results) => {
            if (err) res.status(500).json({ error: "Internal server error" });
            if (results.rowCount === 1) {
                res.status(200).json(results.rows[0]);
            } else {
                res.status(404).json({ error: "Game not found" });
            }
        });
    },
    postGame: (req, res) => {
        const newGame = req.body;
        pool.query(queries.checkGameExists, [newGame.title], (err, results) => {
            if (err) res.status(500).json({ error: "Internal server error" });
            if(results.rowCount === 1){
                res.status(409).json({error: "Game with this title already exists"})
            }else {
                pool.query(queries.postGame, [newGame.title, newGame.genre, newGame.releaseYear], (err2, results2) => {
                    if (err2) res.status(500).json({ error: "Internal server error" });
                    res.status(201).json(results2.rows[0]);
                });
            }
        })
    },
    putGame: (req, res) => {
        const gameId = req.params.gameId;
        const updatedGame = req.body;
        pool.query(queries.checkGameExists, [newGame.title], (err, results) => {
            if (err) res.status(500).json({ error: "Internal server error" });
            if(results.rowCount === 1){
                res.status(409).json({error: "Game with this title already exists"})
            }else {
                pool.query(queries.updateGame, [updatedGame.title, updatedGame.genre, updatedGame.releaseYear, gameId], (err2, results2) => {
                    if (err2) res.status(500).json({ error: "Internal server error" });
                    if (results2.rowCount === 1) {
                        res.status(200).json(results2.rows[0]);
                    } else {
                        res.status(404).json({ error: "Game not found" });
                    }
                });
            }
        });
    },
    deleteGame: (req, res) => {
        const gameId = req.params.gameId;
        pool.query(queries.deleteGame, [gameId], (err, results) => {
            if (err) res.status(500).json({ error: "Internal server error" });
            if (results.rowCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: "Game not found" });
            }
        });
    }
}

module.exports = gameController;
/*const getGames = (req, res) => {
    //console.log("gameController get games")
    pool.query(gameQueries.getGames, (err, results) => {
        if (err) res.status(500).json({ error: "Internal server error" });
        res.status(200).json(results.rows);
    });
}
const postGame = (req, res) => {
    const newGame = req.body;
    pool.query(gameQueries.checkGameExists, [newGame.title], (err, results) => {
        if (err) res.status(500).json({ error: "Internal server error" });
        if(results.rowCount.length){
            res.status(409).json({error: "This game already exists"})
        }
        pool.query(gameQueries.postGame, [newGame.title, newGame.genre, newGame.releaseYear], (err2, results2) => {
            if (err2) res.status(500).json({ error: "Internal server error" });
            res.status(201).json(results2.rows[0]);
        });
    })
}
const putGame = (req, res) => {
    const gameId = req.params.gameId;
    const updatedGame = req.body;

    pool.query(gameQueries.updateGame, [updatedGame.title, updatedGame.genre, updatedGame.releaseYear, gameId], (err, results) => {
        if (err) res.status(500).json({ error: "Internal server error" });
        if (results.rowCount === 1) {
            res.status(200).json(results.rows[0]);
        } else {
            res.status(404).json({ error: "Game not found" });
        }
    });
}
const deleteGame = (req, res) => {
    const gameId = req.params.gameId;
    pool.query(gameQueries.deleteGame, [gameId], (err, results) => {
        if (err) res.status(500).json({ error: "Internal server error" });
        if (results.rowCount === 1) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: "Game not found" });
        }
    });
}

module.exports = {
    getGames,
    postGame,
    putGame,
    deleteGame
};*/