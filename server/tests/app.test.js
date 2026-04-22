import request from 'supertest';
import app from '../server.js';

describe('GET /health', () => {
  it('should return status 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
  });
});