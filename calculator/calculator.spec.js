const { add } = require('./calculator.js');

// test away!
describe('calculator.js', () => {

  it('should run tests without errors', () => {
      //arrange -- set up the world

      // act -- execute the code were testing

      //assert check our assumptions
        expect(true).toBeTruthy();
  });

    describe('.add()', function(){
        it('should add two numbers', function(){
            expect(add(2,2)).toBe(4)
            expect(add(1,3)).toBe(4)
        });
        it('should return 0 when called with no arguments', function(){
            expect(add()).toBe(0)
        });

        it("should return the number when called with a single number", function (){
            expect(add(3)).toBe(3)
        })

        it("should sum a list of numbers seperated by a comma", function(){
            expect(add(1,2,3)).toBe(6)
        })

        it('should support an array of numbers', function(){
            expect(add([1, 2, 3])).toBe(6);
        })
    })

})