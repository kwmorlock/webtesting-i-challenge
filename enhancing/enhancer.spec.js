// const enhancer = require('./enhancer.js');
const { repair } = require('./enhancer.js');

// test away!
describe("enhancer", () => {
    describe("repair()", () => {

      it("brings durability cuteness to 100", () => {
       const meowItem = {
           name: 'cute sword',
           durability: 13,
           enchancement: 7
       }
       console.log(repair(meowItem))
       expect(repair(meowItem).durability).toBe(100)
      });
    });
  });