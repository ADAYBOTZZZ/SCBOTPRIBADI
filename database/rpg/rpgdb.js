  const fs = require('fs')
  let _rpgdb = JSON.parse(fs.readFileSync('./database/rpg/rpgdb.json'))
  
  const addInvRpgdb = (sender) => {
        const obj = {id: sender, sword: 0, armor: 0, key: 0, exp: 50, level: 1}
         _rpgdb.push(obj)
        fs.writeFileSync('./database/rpg/rpgdb.json', JSON.stringify(_rpgdb))
   }
  const cekRpgdbJson = (sender) => {
            let status = false
            Object.keys(_rpgdb).forEach((i) => {
                if (_rpgdb[i].id === sender) {
                    status = true
                }
            })
            return status
        }
const addSword = (sender, amount) => {
            let position = false
            Object.keys(_rpgdb).forEach((i) => {
                if (_rpgdb[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _rpgdb[position].sword += amount
                fs.writeFileSync('./database/rpg/rpgdb.json', JSON.stringify(_rpgdb))
            }
        }
   const kurangSword = (sender, amount) => {
            let position = false
            Object.keys(_rpgdb).forEach((i) => {
                if (_rpgdb[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _rpgdb[position].sword -= amount
                fs.writeFileSync('./database/rpg/rpgdb.json', JSON.stringify(_rpgdb))
            }
        }
   const getSword = (sender) => {
            let position = false
            Object.keys(_rpgdb).forEach((i) => {
                if (_rpgdb[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _rpgdb[position].sword
            }
        }            
const addKey = (sender, amount) => {
            let position = false
            Object.keys(_rpgdb).forEach((i) => {
                if (_rpgdb[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _rpgdb[position].key += amount
                fs.writeFileSync('./database/rpg/rpgdb.json', JSON.stringify(_rpgdb))
            }
        }
   const kurangKey = (sender, amount) => {
            let position = false
            Object.keys(_rpgdb).forEach((i) => {
                if (_rpgdb[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _rpgdb[position].key -= amount
                fs.writeFileSync('./database/rpg/rpgdb.json', JSON.stringify(_rpgdb))
            }
        }
   const getKey = (sender) => {
            let position = false
            Object.keys(_rpgdb).forEach((i) => {
                if (_rpgdb[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _rpgdb[position].key
            }
        }                    
const addArmor = (sender, amount) => {
            let position = false
            Object.keys(_rpgdb).forEach((i) => {
                if (_rpgdb[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _rpgdb[position].armor += amount
                fs.writeFileSync('./database/rpg/rpgdb.json', JSON.stringify(_rpgdb))
            }
        }
   const kurangArmor = (sender, amount) => {
            let position = false
            Object.keys(_rpgdb).forEach((i) => {
                if (_rpgdb[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _rpgdb[position].armor -= amount
                fs.writeFileSync('./database/rpg/rpgdb.json', JSON.stringify(_rpgdb))
            }
        }
   const getArmor = (sender) => {
            let position = false
            Object.keys(_rpgdb).forEach((i) => {
                if (_rpgdb[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _rpgdb[position].armor
            }
        }                    
const addExp = (sender, amount) => {
            let position = false
            Object.keys(_rpgdb).forEach((i) => {
                if (_rpgdb[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _rpgdb[position].exp += amount
                fs.writeFileSync('./database/rpg/rpgdb.json', JSON.stringify(_rpgdb))
            }
        }
   const kurangExp = (sender, amount) => {
            let position = false
            Object.keys(_rpgdb).forEach((i) => {
                if (_rpgdb[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _rpgdb[position].exp -= amount
                fs.writeFileSync('./database/rpg/rpgdb.json', JSON.stringify(_rpgdb))
            }
        }
   const getExp = (sender) => {
            let position = false
            Object.keys(_rpgdb).forEach((i) => {
                if (_rpgdb[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _rpgdb[position].exp
            }
        }             
const addLevel = (sender, amount) => {
            let position = false
            Object.keys(_rpgdb).forEach((i) => {
                if (_rpgdb[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _rpgdb[position].level += amount
                fs.writeFileSync('./database/rpg/rpgdb.json', JSON.stringify(_rpgdb))
            }
        }
   const kurangLevel = (sender, amount) => {
            let position = false
            Object.keys(_rpgdb).forEach((i) => {
                if (_rpgdb[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _rpgdb[position].level -= amount
                fs.writeFileSync('./database/rpg/rpgdb.json', JSON.stringify(_rpgdb))
            }
        }
   const getLevel = (sender) => {
            let position = false
            Object.keys(_rpgdb).forEach((i) => {
                if (_rpgdb[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _rpgdb[position].level
            }
        }             
        
        
    module.exports = { cekRpgdbJson,
addInvRpgdb, 
addSword,
kurangSword,
getSword,
addArmor,
kurangArmor,
getArmor,
addKey,
kurangKey,
getKey,
addExp,
kurangExp,
getExp,
addLevel,
kurangLevel,
getLevel
                  }