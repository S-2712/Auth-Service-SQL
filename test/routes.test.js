const request = require('supertest')
const app = require('../server')
describe('User Endpoints', () => {
  it('should create a new User', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({
            "username": "sample",
            "email": "sample@ursc.gov.in",
            "password": "example12345",
            "role": "student"
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
})