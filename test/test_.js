const chai = require("chai")
const assert = chai.assert
const expect = chai.expect
const chaiAsPromised = require("chai-as-promised")
// const chaiJestMock = require('chai-jest-mocks')

chai.use(chaiAsPromised)
// chai.use(chaiJestMock)

const UCC = require("../index.js")

let currencyConverter = new UCC({from:"USD", to:"BDT", amount:100, isDecimalComma:true})

// currencyConverter.convert().then((response) => {
//     console.log(response) //or do something else
// })
// console.log(currencyConverter)

// currencyConverter.rates().then((response) => {
//     console.log(response) //or do something else
// })
currencyConverter.convert(1).then((response) => {
    console.log(response) //or do something else
})


// console.log(c.currencies)