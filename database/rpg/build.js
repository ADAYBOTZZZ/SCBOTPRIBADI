  const fs = require('fs')
  let _build = JSON.parse(fs.readFileSync('./database/rpg/build.json'))
  
  const addInvBuild = (sender) => {
        const obj = {id: sender, rumah: 0, warung: 0, pertanian: 0}
         _build.push(obj)
        fs.writeFileSync('./database/rpg/build.json', JSON.stringify(_build))
   }
  const cekBuildJson = (sender) => {
            let status = false
            Object.keys(_build).forEach((i) => {
                if (_build[i].id === sender) {
                    status = true
                }
            })
            return status
        }
   const addRumah = (sender, amount) => {
            let position = false
            Object.keys(_build).forEach((i) => {
                if (_build[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _build[position].rumah += amount
                fs.writeFileSync('./database/rpg/build.json', JSON.stringify(_build))
            }
        }
   const kurangRumah = (sender, amount) => {
            let position = false
            Object.keys(_build).forEach((i) => {
                if (_build[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _build[position].rumah -= amount
                fs.writeFileSync('./database/rpg/build.json', JSON.stringify(_build))
            }
        }
   const getRumah = (sender) => {
            let position = false
            Object.keys(_build).forEach((i) => {
                if (_build[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _build[position].rumah
            }
        }    
const addPertanian = (sender, amount) => {
            let position = false
            Object.keys(_build).forEach((i) => {
                if (_build[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _build[position].pertanian += amount
                fs.writeFileSync('./database/rpg/build.json', JSON.stringify(_build))
            }
        }
   const kurangPertanian = (sender, amount) => {
            let position = false
            Object.keys(_build).forEach((i) => {
                if (_build[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _build[position].pertanian -= amount
                fs.writeFileSync('./database/rpg/build.json', JSON.stringify(_build))
            }
        }
   const getPertanian = (sender) => {
            let position = false
            Object.keys(_build).forEach((i) => {
                if (_build[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _build[position].pertanian
            }
        }        
const addWarung = (sender, amount) => {
            let position = false
            Object.keys(_build).forEach((i) => {
                if (_build[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _build[position].warung += amount
                fs.writeFileSync('./database/rpg/build.json', JSON.stringify(_build))
            }
        }
   const kurangWarung = (sender, amount) => {
            let position = false
            Object.keys(_build).forEach((i) => {
                if (_build[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _build[position].warung -= amount
                fs.writeFileSync('./database/rpg/build.json', JSON.stringify(_build))
            }
        }
   const getWarung = (sender) => {
            let position = false
            Object.keys(_build).forEach((i) => {
                if (_build[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _build[position].warung
            }
        }            
    module.exports = { cekBuildJson,
addInvBuild, 
addRumah,
kurangRumah,
getRumah,
addPertanian,
kurangPertanian,
getPertanian,
addWarung,
kurangWarung,
getWarung
                  }