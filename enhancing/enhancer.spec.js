// const enhancer = require('./enhancer.js');
const { repair, succeed } = require('./enhancer.js');

// test away!
describe("enhancer", () => {
    describe("repair()", () => {

      it("brings durability cuteness to 100", () => {
       const meowItem = {
           name: 'cute sword',
           durability: 13,
           enchancement: 7
       }
    //    console.log(repair(meowItem))
       expect(repair(meowItem).durability).toBe(100)
      });
    });
  });

  describe("enhancer", () => {
    describe("succeed()", () => {

      it("brings enhancement prettiness to 20", () => {
       const prettyItem = {
           name: 'pretty sword',
           durability: 13,
           enchancement: 20
       }
       console.log(succeed(prettyItem))
       expect(succeed(prettyItem).enchancement).toEqual(20)
      });
    });
  });