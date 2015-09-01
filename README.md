<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [Vulcanize](https://github.com/Polymer/vulcanize) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage
> Check out the
[documentation](https://github.com/Polymer/vulcanize#using-vulcanize-programmatically)
to see the available options.

### Install

```a
npm install -D fly-vulcanize
```

### Example

#### ES6
```js
export default function* () {
  yield this.clear("app")
  yield this
  .source("elements/elements.html")
  .vulcanize({
    abspath: '',
    inlineScripts: true,
    inlineCss: true,
    stripComments: true
  })
  .target("app")
}
```

# License

[MIT][mit] © [Kazuhiro Kubota][author] et [al][contributors]


[mit]:          http://opensource.org/licenses/MIT
[author]:       http://github.com/k2wanko
[contributors]: https://github.com/k2wanko/fly-vulcanize/graphs/contributors
[releases]:     https://github.com/k2wanko/fly-vulcanize/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]: https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]: https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-vulcanize
[npm-ver-link]: https://img.shields.io/npm/v/fly-vulcanize.svg?style=flat-square
[dl-badge]: http://img.shields.io/npm/dm/fly-vulcanize.svg?style=flat-square
[travis-link]:  https://travis-ci.org/k2wanko/fly-vulcanize
[travis-badge]: http://img.shields.io/travis/k2wanko/fly-vulcanize.svg?style=flat-square
