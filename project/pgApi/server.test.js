const axios = require("axios");
const { server } = require("./server.js");
const apiUrl = "http://localhost:8000";

describe('Testy serwera', () => {
  //GET
  it('Powinien zwrócić status 200 dla GET /healthz', async () => {
    const response = await axios.get(`${apiUrl}/healthz`);
    expect(response.status).toBe(200);
  });
  
  afterAll(() => {
    console.log('hello')
    server.close();
  });
});