
const fortunesObj = require('./fortunes.json')

const getFortune = () => {
    const rand = Math.floor(Math.random() * fortunesObj.fortunes.length)
    return fortunesObj.fortunes[rand]
}

module.exports = { getFortune }