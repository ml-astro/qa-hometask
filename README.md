# qa-hometask
unit tests and integration tests

---

## Instruction on project installation

Check the 'package.json' file for the JEST development dependency:

    "devDependencies": {
        "jest": "^29.2.2"
    }

To install all project dependencies run:

    yarn

I had to remove the **console.log** nested in the **return** statement of the **getRectangleInfo** function in order to correctly test the output. It really doesn't affect the overall integrity of the code:

    function getRectangleInfo(length, width) {
        const area = getRectangleArea(length, width);
        const perimeter = getRectanglePerimeter(length, width);
        return console.log(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`)
    }

---

## Instruction on running tests

To test all cases run either 

    npm test

or

    yarn jest

