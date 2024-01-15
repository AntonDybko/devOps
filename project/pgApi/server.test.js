const axios = require("axios");
const { server } = require("./server.js");
const PORT =  process.env.PORT || 8000;
const apiUrl = `http://localhost:${PORT}/games`;

let existingGameId;
let randomString;

describe('Testy serwera', () => {
  beforeAll(() => {
    randomString = Array.from(Array(8), () => Math.floor(Math.random() * 36).toString(36)).join('');
  })
  afterAll(async () => {
    await axios.delete(`${apiUrl}/${existingGameId-1}`);
    server.close();
  });
  
  //GET
  it('Testy dla GET /', async () => {
    const response = await axios.get(`${apiUrl}/`);
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.body).toEqual(expect.arrayContaining([])); 
  });

  //POST
  it('Powinien zwrócić status 201 dla POST /', async () => {
    const newGame = {
      title: `Initial ${randomString}`,
      genre: 'Test Genre',
      releaseYear: 2022,
    };
    const response = await axios.post(`${apiUrl}/`, newGame)
    existingGameId = response.data.id + 1;
    const newGame2 = {
      title: `${existingGameId} Initial ${randomString}`,
      genre: 'Test Genre',
      releaseYear: 2022,
    };
    const response2 = await axios.post(`${apiUrl}/`, newGame2)
    expect(response.status).toBe(201);
    expect(response2.status).toBe(201);
  });
  it('Powinien zwrócić status 409, jeśli gra o takim tytułu istnieje dla POST /', async () => {
    const newGame = {
      title: `${existingGameId} Initial ${randomString}`,
      genre: 'Test Genre',
      releaseYear: 2022,
    };
    try{
      await axios.post(`${apiUrl}/`, newGame)
    }catch(error){
      expect(error.response.status).toBe(409);
    }
  });
  

  //GET BY ID
  it('Powinien zwrócić grę dla GET /:gameId', async () => {
    const response = await axios.get(`${apiUrl}/${existingGameId}`)
    expect(response.status).toBe(200);
  });
  it('Powinien zwrócić 404, jeśli gra nie istnieje na GET /:gameId', async () => {
    const gameId = `${existingGameId + 1}`; 
  
    try {
      await axios.get(`${apiUrl}/${gameId}`)
    }catch (error){
      expect(error.response.status).toBe(404);
    }
  });

  //PUT
  it('Powinien zaktualizować grę dla PUT /:gameId', async () => {
    const updatedGame = {
      title: `${existingGameId} Updated ${randomString}`,
      genre: 'Adventure',
      releaseYear: 2024,
    };
  
    const response = await axios.put(`${apiUrl}/${existingGameId}`, updatedGame)
    expect(response.status).toBe(200);
  });
  it('Powinien zwrócić 404, jeśli gra nie istnieje dla PUT /:gameId', async () => {
    const updatedGame = {
      title: `${existingGameId} UpdatedV2 ${randomString}`,
      genre: 'Adventure',
      releaseYear: 2024,
    };
    const gameIdToUpdate = `${existingGameId + 1}`; 
    
    try{
      await axios.put(`${apiUrl}/${gameIdToUpdate}`, updatedGame)
    }catch (error){
      expect(error.response.status).toBe(404);
    }
  });
  it('Powinien zwrócić status 409, jeśli gra o takim tytułu istnieje dla PUT /', async () => {
    const updatedGame = {
      title: `${existingGameId} Updated ${randomString}`,
      genre: 'Test Genre',
      releaseYear: 2022,
    };
    try{
      await axios.put(`${apiUrl}/${existingGameId}`, updatedGame)
    }catch(error){
      expect(error.response.status).toBe(409);
    }
  });
  //DELETE
  it('Powinien usunąć grę dla DELETE /:gameId', async () => {
    const response = await axios.delete(`${apiUrl}/${existingGameId}`)
    expect(response.status).toBe(204);
  });
  
  it('Powinien zwrócić 404, jeśli gra nie istnieje dla DELETE /:gameId', async () => {
    const gameIdToDelete = `${existingGameId + 1}`; 
  
    try{
      await axios.delete(`${apiUrl}/${gameIdToDelete}`)
    }catch (error){
      expect(error.response.status).toBe(404);
    }
  });
});