const Vulcanize = require('vulcanize');
const path = require('path');

module.exports = function () {
    const vulcanize = (_, opts, cb) => {
        return this.unwrap((files) => {
            var target = files.find((file) => path.basename(file) === opts.filename);
            new Vulcanize(opts).process(target, cb);
        });
    };
    return this.filter("vulcanize", (data, options) => {
        return this.defer(vulcanize.bind(this))(data, options);
    });
}
