  const fs = require('fs')
  let _makanan = JSON.parse(fs.readFileSync('./database/rpg/makanan.json'))
  
  const addInvMakanan = (sender) => {
        const obj = {id: sender, sate: 0, sop: 0, steak: 0, goreng: 0}
         _makanan.push(obj)
        fs.writeFileSync('./database/rpg/makanan.json', JSON.stringify(_makanan))
   }
  const cekMakananJson = (sender) => {
            let status = false
            Object.keys(_makanan).forEach((i) => {
                if (_makanan[i].id === sender) {
                    status = true
                }
            })
            return status
        }
   const addSate = (sender, amount) => {
            let position = false
            Object.keys(_makanan).forEach((i) => {
                if (_makanan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _makanan[position].sate += amount
                fs.writeFileSync('./database/rpg/makanan.json', JSON.stringify(_makanan))
            }
        }
   const kurangSate = (sender, amount) => {
            let position = false
            Object.keys(_makanan).forEach((i) => {
                if (_makanan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _makanan[position].sate -= amount
                fs.writeFileSync('./database/rpg/makanan.json', JSON.stringify(_makanan))
            }
        }
   const getSate = (sender) => {
            let position = false
            Object.keys(_makanan).forEach((i) => {
                if (_makanan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _makanan[position].sate
            }
        }    
const addGoreng = (sender, amount) => {
            let position = false
            Object.keys(_makanan).forEach((i) => {
                if (_makanan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _makanan[position].goreng += amount
                fs.writeFileSync('./database/rpg/makanan.json', JSON.stringify(_makanan))
            }
        }
   const kurangGoreng = (sender, amount) => {
            let position = false
            Object.keys(_makanan).forEach((i) => {
                if (_makanan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _makanan[position].goreng -= amount
                fs.writeFileSync('./database/rpg/makanan.json', JSON.stringify(_makanan))
            }
        }
   const getGoreng = (sender) => {
            let position = false
            Object.keys(_makanan).forEach((i) => {
                if (_makanan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _makanan[position].goreng
            }
        }        
const addSop = (sender, amount) => {
            let position = false
            Object.keys(_makanan).forEach((i) => {
                if (_makanan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _makanan[position].sop += amount
                fs.writeFileSync('./database/rpg/makanan.json', JSON.stringify(_makanan))
            }
        }
   const kurangSop = (sender, amount) => {
            let position = false
            Object.keys(_makanan).forEach((i) => {
                if (_makanan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _makanan[position].sop -= amount
                fs.writeFileSync('./database/rpg/makanan.json', JSON.stringify(_makanan))
            }
        }
   const getSop = (sender) => {
            let position = false
            Object.keys(_makanan).forEach((i) => {
                if (_makanan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _makanan[position].sop
            }
        }            
const addSteak = (sender, amount) => {
            let position = false
            Object.keys(_makanan).forEach((i) => {
                if (_makanan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _makanan[position].steak += amount
                fs.writeFileSync('./database/rpg/makanan.json', JSON.stringify(_makanan))
            }
        }
   const kurangSteak = (sender, amount) => {
            let position = false
            Object.keys(_makanan).forEach((i) => {
                if (_makanan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _makanan[position].steak -= amount
                fs.writeFileSync('./database/rpg/makanan.json', JSON.stringify(_makanan))
            }
        }
   const getSteak = (sender) => {
            let position = false
            Object.keys(_makanan).forEach((i) => {
                if (_makanan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _makanan[position].steak
            }
        }            
    module.exports = { cekMakananJson,
addInvMakanan, 
addSate,
kurangSate,
getSate,
addGoreng,
kurangGoreng,
getGoreng,
addSop,
kurangSop,
getSop,
addSteak,
kurangSteak,
getSteak
                  }