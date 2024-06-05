const fs = require('fs')
const crypto = require('crypto')

/**
 * GET db
**/
const _Join = JSON.parse(fs.readFileSync('./database/rpg/join.json'))

/**
 * GET random user from db
 * return {string}
**/
const getJoinRandomId = () => {
    return _Join[Math.floor(Math.random() * _Join.length)].id
}

/**
 * add user to db
 * @param {String} userId 
 * @param {String} name 
 * @param {String} age 
 * @param {String} time 
 * @param {String} serial 
**/
const addJoinUser = (userid, name, age, time, serials) => {
    const obj = { id: userid, name: name, age: age, time: time, serial: serials }
    _Join.push(obj)
    fs.writeFileSync('./database/join.json', JSON.stringify(_Join))
}

/**
 * GET random serial
 * params {number} size
 * return {string}
**/
const createSerialJoin = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}

/**
 * cek user from db
 * params {string} userid
 * return {true/false}
**/
const checkJoinUser = (userid) => {
    let status = false
    Object.keys(_Join).forEach((i) => {
        if (_Join[i].id === userid) {
            status = true
        }
    })
    return status
}

module.exports = {
	getJoinRandomId,
	addJoinUser,
	createSerialJoin,
	checkJoinUser
}