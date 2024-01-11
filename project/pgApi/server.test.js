const request = require('supertest');
//const app = require('../mongoApi/server'); 
const axios = require("axios");
const { server } = require("./server.js");
const PORT =  process.env.PORT;
const apiUrl = `http://localhost:${PORT}/games`;

describe('Testy serwera', () => {
  afterAll(() => {
    server.close();
  });
  //GET
  it('Testy dla GET /', async () => {
    const response = await axios.get(`${apiUrl}/`);
    console.log(response.data)
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.body).toEqual(expect.arrayContaining([])); 
  });

  //GET BY ID
  it('Powinien zwrócić grę dla GET /:gameId', async () => {
    const gameId = '1'; 
    const response = await axios.get(`${apiUrl}/${gameId}`)
    //const response = await request(apiUrl).get(`/${gameId}`);
    expect(response.status).toBe(200);
  });
  it('Powinien zwrócić 404, jeśli gra nie istnieje na GET /:gameId', async () => {
    const gameId = '100'; 
  
    try {
      const response = await axios.get(`${apiUrl}/${gameId}`)
    }catch (error){
      expect(error.response.status).toBe(404);
    }
  });

  //POST
  it('Powinien zwrócić status 201 dla POST /', async () => {
    const newGame = {
      title: 'Test Game',
      genre: 'Test Genre',
      releaseYear: 2022,
    };
    const response = await axios.post(`${apiUrl}/`, newGame)
    expect(response.status).toBe(201);
  });
  /*it('Powinien zwrócić status 409, jeśli gra o takim tytułu istnieje dla POST /', async () => {
    const newGame = {
      title: 'Test Game',
      genre: 'Test Genre',
      releaseYear: 2022,
    };
    try{
      const response = await axios.post(`${apiUrl}/`, newGame)
    }catch(error){
      expect(error.response.status).toBe(409);
    }
  });

  //PUT
  it('Powinien zaktualizować grę dla PUT /:gameId', async () => {
    const updatedGame = {
      title: 'Updated Game',
      genre: 'Adventure',
      releaseYear: 2024,
    };
    const gameIdToUpdate = '1'; 
  
    const response = await axios.put(`${apiUrl}/${gameIdToUpdate}`, updatedGame)
  
    expect(response.status).toBe(200);
  });
  it('Powinien zwrócić 404, jeśli gra nie istnieje dla PUT /:gameId', async () => {
    const updatedGame = {
      title: 'Updated Game',
      genre: 'Adventure',
      releaseYear: 2024,
    };
    const gameIdToUpdate = '100'; 
    
    try{
      const response = await axios.put(`${apiUrl}/${gameIdToUpdate}`, updatedGame)
    }catch (error){
      expect(error.response.status).toBe(404);
    }
  });
  it('Powinien zwrócić status 409, jeśli gra o takim tytułu istnieje dla PUT /', async () => {
    const newGame = {
      title: 'Updated Game',
      genre: 'Test Genre',
      releaseYear: 2022,
    };
    try{
      const response = await axios.put(`${apiUrl}/`, newGame)
    }catch(error){
      expect(error.response.status).toBe(409);
    }
  });
  //DELETE
  it('Powinien usunąć grę dla DELETE /:gameId', async () => {
    const gameIdToDelete = '1'; 
  
    const response = await axios.delete(`${apiUrl}/${gameIdToDelete}`)
  
    expect(response.status).toBe(204);
  });
  
  it('Powinien zwrócić 404, jeśli gra nie istnieje dla DELETE /:gameId', async () => {
    const gameIdToDelete = '100'; 
  
    try{
      const response = await axios.delete(`${apiUrl}/${gameIdToDelete}`)
    }catch (error){
      expect(error.response.status).toBe(404);
    }
  });*/
});