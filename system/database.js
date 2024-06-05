
let database = 'database.json'
const mongoose = require('mongoose');
const stable = require('json-stable-stringify');
const fs = require('fs');
const path = require('path');
mongoose.set("strictQuery", false)
let Database

const chalk = require('chalk')
const { join, dirname } = require('path')

const dirr = join('./system', './database')

const data = {
user: join(dirr, 'user.db.json'),
};

// database user
try {
fs.existsSync(data.user) ? JSON.parse(fs.readFileSync(data.user)) : fs.writeFileSync(data.user, JSON.stringify({}, null, 2))
} catch (err) {
fs.writeFileSync(data.user, JSON.stringify({}, null, 2));
console.log('FILE DATABASE USER ERROR!')
}

let db = {
user: JSON.parse(fs.readFileSync(data.user)),
}


async function initDatabase() {
setInterval(async() => {
fs.writeFileSync(data.user, JSON.stringify(db.user, null, 2)); //Write from read file db user 
}, 990);
}


if (/mongo/.test(database)) {
Database = class MongoDB {
constructor(url) {
this.url = url

this.options = {
useNewUrlParser: true,
useUnifiedTopology: true,
keepAlive: true,
keepAliveInitialDelay: 30000,
timeout: 30000
}
this.connection = this.url || database
this.model = {
database: {},
}
this.data = {}
}

read = async () => {
mongoose.connect(this.connection, {
...this.options,
})
try {
const schemaData = new mongoose.Schema({
data: {
type: Object,
required: true,
default: {},
},
})
this.model.database = mongoose.model("data", schemaData)
} catch {
this.model.database = mongoose.model("data")
}
this.data = await this.model.database.findOne({})
if (!this.data) {
new this.model.database({
data: {},
}).save()
this.data = await this.model.database.findOne({})
return (this.data = this?.data?.data)
} else return this?.data?.data || this?.data
}

write = async (data) => {
const obj = !!data ? data : global.db
if (this.data && !this.data.data)
return new this.model.database({
data: obj,
}).save()
const document = await this.model.database.findById(this.data._id)
if (!document.data) document.data = {}
document.data = obj
document.save()
}

}
} else if (/json/.test(database)) {
Database = class Database {
data = {}
file = path.join(process.cwd(), 'database', database)

read() {
let data
if (fs.existsSync(this.file)) {
data = JSON.parse(fs.readFileSync(this.file))
} else {
fs.writeFileSync(this.file, JSON.stringify(this.data, null, 2))
data = this.data
}

return data
}

write(data) {
this.data = !!data ? data : global.db
let dirname = path.dirname(this.file)
if (!fs.existsSync(dirname)) fs.mkdirSync(dirname, { recursive: true })
fs.writeFileSync(this.file, JSON.stringify(this.data, null, 2))
return this.file
}
}

}

module.exports = Database, db, initDatabase