const request = require('supertest')
const { app } = require('../src/main')
const expect = require('chai').expect

describe('GET /iecho', function () {
  it('return status 200, text "tset", palindrome false', async function () {
    const response = await request(app).get('/api/iecho?text=test')
    console.log(response.body)
    expect(response.status).to.eql(200)
    expect(response.body.text).to.eql('tset')
    expect(response.body.palindrome).to.eql(false)
  })

  it('return status 200, text "tset", palindrome true', async function () {
    const response = await request(app).get('/api/iecho?text=ana')
    console.log(response.body)
    expect(response.status).to.eql(200)
    expect(response.body.text).to.eql('ana')
    expect(response.body.palindrome).to.eql(true)
  })

  it('return status 400, error "no test"', async function () {
    const response = await request(app).get('/api/iecho')
    console.log(response.body)
    expect(response.status).to.eql(400)
    expect(response.body.error).to.eql('no text')
  })
})
