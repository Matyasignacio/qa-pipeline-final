const request = require('supertest');
const app = require('./index');

describe('Prueba de Endpoints', () => {
  it('Debe devolver Hola Mundo en la ruta principal', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Hola Mundo');
  });
});
