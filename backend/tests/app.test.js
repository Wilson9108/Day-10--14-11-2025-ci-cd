const request = require('supertest')
const {app} = require('../app')

describe('Get all user routes',()=>{
    it('should return hello ',async()=>{
        const res = await request(app).get('/')
        expect(res.text).toBe("hello")
    })
})