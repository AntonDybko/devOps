const { server } = require("./server.js");
const axios = require("axios");
const PORT =  process.env.PORT || 8000;
const apiUrl = `http://localhost:${PORT}`;

describe("TEST", () => {
  it("test api work", async () => {
    const res = await axios(`${apiUrl}/healthz`);
    expect(res.status).toBe(200);
    //zmiana
  });

  afterAll(() => {
    server.close();
  });
});