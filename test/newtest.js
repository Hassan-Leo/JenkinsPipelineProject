const chai = require("chai");
const expect = require("chai").expect;
const chaihttp = require("chai-http");

chai.should();
chai.use(chaihttp);

describe("Testing API Testing by Faizan",()=> {
    it("Json placeholder APi todo test by Faizan",(done)=> {
        chai.request("https://jsonplaceholder.typicode.com")
        .get("/todos/1")
        .end((err,resp)=> {
            resp.should.have.status(200);
        })
        done();
    })
})