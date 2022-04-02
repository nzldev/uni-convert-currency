const chai = require("chai")
const assert = chai.assert
const expect = chai.expect
const chaiAsPromised = require("chai-as-promised")
// const chaiJestMock = require('chai-jest-mocks')

chai.use(chaiAsPromised)
// chai.use(chaiJestMock)

const UCC = require("../index.js")

let currencyConverter = new UCC({from:"AUD", to:"BDT", amount:4000000, isDecimalComma:true})

// currencyConverter.convert().then((response) => {
//     console.log(response) //or do something else
// })
// console.log(currencyConverter)

// currencyConverter.rates().then((response) => {
//     console.log(response) //or do something else
// })
currencyConverter.convert(4000000).then((response) => {
    console.log(response) //or do something else
})


// console.log(c.currencies)