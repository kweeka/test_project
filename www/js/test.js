
describe("test", function () {
   it("test true", function (done) {
       assert.equal(accum.read(), 30);
       done();
   });
});

mocha.run();