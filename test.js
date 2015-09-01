const test = require('tape').test
const vulcan = require('./')

test("fly-vulcanize", (t) => {
    vulcan.call({
        filter: function(name, transform) {
            console.log(name, transform);
            t.equal(name, "vulcanize", "add vulcanize filter");
            t.end();
        }
    })
});
