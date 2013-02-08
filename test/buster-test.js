if (typeof require === "undefined") {

    // Browser tests

    buster.testCase("A Module", {
        "states the obvious": function() {
            assert(true);
        }
    });

    buster.spec.expose();  // Make some functions global

    describe("B Module", function() {
        it('states the obvious', function() {
                expect(true).toEqual(true);
        });
    });

} else {

    // Node.js tests
    var buster = require('buster');

    buster.testCase("C Module", {
        "states the obvious": function() {
            assert(true);
        }
    });

}
