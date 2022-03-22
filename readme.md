<div align="center">
<h1>Uni Currency Converter NodeJS</h1>


## Getting started

### Installation

This package can be installed using `npm`

```bash
npm install uni-convert-currency
```

or, `yarn`

```bash
yarn add uni-convert-currency
```

### Usage

Import `uni-convert-currency`.

```javascript
const UCC = require('uni-convert-currency')
```

Then instantiate with either the empty constructor

```javascript
let currencyConverter = new UCC()
```

Or, with a json object

```javascript
let currencyConverter = new UCC({from:"USD", to:"JPY", amount:100})
```


```javascript
let currencyConverter = new UCC({from:"USD", to:"JPY", amount:100, isDecimalComma:true})
```


The convert method will return the conversion based on the last conversion rate and can be used as a promise.

```javascript
currencyConverter.convert().then((response) => {
    console.log(response) //or do something else
})
```

`convert` can also take the amount as a parameter.

```javascript
currencyConverter.convert(100).then((response) => {
    console.log(response) //or do something else
})
```

To find the rates use the `rates` method.

```javascript
currencyConverter.rates().then((response) => {
    console.log(response) //or do something else
})
```

Chaining is also supported.

```javascript
currencyConverter.from("USD").to("GBP").amount(125).convert().then((response) => {
    console.log(response) //or do something else
})
```

## License

This project is licensed under the [MIT](LICENSE) license.
