const axios = require("axios");
const { server } = require("./server.js");
const PORT = process.env.PORT;
const apiUrl = `http://localhost:${PORT}`;

describe('Testy serwera', () => {
  //GET
  it('Powinien zwrócić status 200 dla GET /healthz', async () => {
    const response = await axios.get(`${apiUrl}/healthz`);
    expect(response.status).toBe(200);
  });

  it('Powinien zwrócić status 200 dla GET /db-check', async () => {
    const response = await axios.get(`${apiUrl}/db-check`);
    expect(response.status).toBe(200);
  });
  
  afterAll(() => {
    server.close();
  });
});