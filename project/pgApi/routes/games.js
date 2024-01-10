
const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

/**
 * @swagger
 * components:
 *  schemas:
 *      Game:
 *          type: object
 *          required:
 *              - title
 *              - genre
 *              - releaseYear
 *          properties:
 *              id:
 *                  type: int
 *                  description: generated by mongodb
 *              title:
 *                  type: string
 *                  description: the book title
 *              genre:
 *                  type: string
 *                  description: the book genre
 *              releaseYear:
 *                  type: int
 *                  description: release year of the book
 *          example:
 *              id: 1
 *              title: Some Game
 *              genre: MOBA
 *              releaseYear: 2020
 */

/**
 * @swagger
 * tags:
 *      name: Games
 *      description: the games managing API
 */

/**
 * @swagger
 * /games:
 *      get:
 *          summary: returns the list of all games
 *          tags: [Games]
 *          responses:
 *              200:
 *                  description: the list of the games
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Game'
 *              500:
 *                  description: internal server error
 */
router.get("/", gameController.getGames);

/**
 * @swagger
 * /games/{gameId}:
 *      get:
 *          summary: get an existing game
 *          tags: [Games]
 *          parameters:
 *            - in: path
 *              name: gameId
 *              schema:
 *                  type: string
 *              required: true
 *              description: the game id
 *          responses:
 *              200:
 *                  description: game successfully found
 *                  content:
 *                      application/json:
 *                          schema: 
 *                              $ref: '#/components/schemas/Game'
 *              404:
 *                  description: game not found
 *              500:
 *                  description: internal server error
 * 
 */
 router.get("/:gameId", gameController.getGame);

/**
 * @swagger
 * /games:
 *      post:
 *          summary: create a new game
 *          tags: [Games]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Game'
 *          responses:
 *              201:
 *                  description: the game was successfully created
 *                  content:
 *                      application/json:
 *                          schema: 
 *                              $ref: '#/components/schemas/Game'
 *              500:
 *                  description: internal server error
 *                              
 */
router.post("/", gameController.postGame);

/**
 * @swagger
 * /games/{gameId}:
 *      put:
 *          summary: edit an existing game
 *          tags: [Games]
 *          parameters:
 *              - in: path
 *                name: gameId
 *                schema:
 *                  type: string
 *                required: true
 *                description: the game id
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Game'
 *          responses:
 *              200:
 *                  description: successfully edited game
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Game'
 *              404:
 *                  description: game not found
 *              500:
 *                  description: internal server error
 *                  
 */
router.put("/:gameId", gameController.putGame);

/**
 * @swagger
 * /games/{gameId}:
 *      delete:
 *          summary: delete an existing game
 *          tags: [Games]
 *          parameters:
 *            - in: path
 *              name: gameId
 *              schema:
 *                  type: string
 *              required: true
 *              description: the game id
 *          responses:
 *              204:
 *                  description: game successfully deleted
 *              404:
 *                  description: game not found
 *              500:
 *                  description: internal server error
 * 
 */
router.delete("/:gameId", gameController.deleteGame);

module.exports = router;