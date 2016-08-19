<p align="center">
  <br>Replace <code>switch</code> with <strong>switchy</strong>. <br>http://chimera.labs.oreilly.com/books/1234000000262/apa.html#dont_use_switch
</p>

<p align="center">
  <a href="https://npmjs.com/package/switchy"><img src="https://img.shields.io/npm/v/switchy.svg?style=flat-square" alt="NPM version"></a>
  <a href="https://npmjs.com/package/switchy"><img src="https://img.shields.io/npm/dm/switchy.svg?style=flat-square" alt="NPM downloads"></a>
  <a href="https://circleci.com/gh/egoist/switchy"><img src="https://img.shields.io/circleci/project/egoist/switchy/master.svg?style=flat-square" alt="Build Status"></a>
</p>


## Install

```bash
$ npm install --save switchy
```

## Usage

```js
const switchy = require('switchy')

const chooseFruit = switchy({
  apple() {
    console.log('apple')
  },
  peach() {
    console.log('peach')
  },
  default() {
    console.log('no idea what you want')
  }
})

chooseFruit('apple')
//=> apple
chooseFruit('watermelon')
//=> no idea what you want
```

## License

MIT © [EGOIST](https://github.com/egoist)
