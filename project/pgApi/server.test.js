const axios = require("axios");
const apiUrl = "http://localhost:8000";

describe('Testy serwera', () => {
  //GET
  it('Powinien zwrócić status 200 dla GET /', async () => {
    const response = await axios.get(`${apiUrl}/healthz`);
    console.log(response.data)
    expect(response.status).toBe(200);
  });
});