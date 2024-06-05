  const fs = require('fs')
  let _bahan = JSON.parse(fs.readFileSync('./database/rpg/bahan.json'))
  
  const addInvBahan = (sender) => {
        const obj = {id: sender, pasir: 0, batu: 0, kayu: 0, semen: 0}
         _bahan.push(obj)
        fs.writeFileSync('./database/rpg/bahan.json', JSON.stringify(_bahan))
   }
  const cekBahanJson = (sender) => {
            let status = false
            Object.keys(_bahan).forEach((i) => {
                if (_bahan[i].id === sender) {
                    status = true
                }
            })
            return status
        }
   const addKayu = (sender, amount) => {
            let position = false
            Object.keys(_bahan).forEach((i) => {
                if (_bahan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bahan[position].kayu += amount
                fs.writeFileSync('./database/rpg/bahan.json', JSON.stringify(_bahan))
            }
        }
   const kurangKayu = (sender, amount) => {
            let position = false
            Object.keys(_bahan).forEach((i) => {
                if (_bahan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bahan[position].kayu -= amount
                fs.writeFileSync('./database/rpg/bahan.json', JSON.stringify(_bahan))
            }
        }
   const getKayu = (sender) => {
            let position = false
            Object.keys(_bahan).forEach((i) => {
                if (_bahan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _bahan[position].kayu
            }
        }    
const addBatu = (sender, amount) => {
            let position = false
            Object.keys(_bahan).forEach((i) => {
                if (_bahan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bahan[position].batu += amount
                fs.writeFileSync('./database/rpg/bahan.json', JSON.stringify(_bahan))
            }
        }
   const kurangBatu = (sender, amount) => {
            let position = false
            Object.keys(_bahan).forEach((i) => {
                if (_bahan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bahan[position].batu -= amount
                fs.writeFileSync('./database/rpg/bahan.json', JSON.stringify(_bahan))
            }
        }
   const getBatu = (sender) => {
            let position = false
            Object.keys(_bahan).forEach((i) => {
                if (_bahan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _bahan[position].batu
            }
        }            
const addPasir = (sender, amount) => {
            let position = false
            Object.keys(_bahan).forEach((i) => {
                if (_bahan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bahan[position].pasir += amount
                fs.writeFileSync('./database/rpg/bahan.json', JSON.stringify(_bahan))
            }
        }
   const kurangPasir = (sender, amount) => {
            let position = false
            Object.keys(_bahan).forEach((i) => {
                if (_bahan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bahan[position].pasir -= amount
                fs.writeFileSync('./database/rpg/bahan.json', JSON.stringify(_bahan))
            }
        }
   const getPasir = (sender) => {
            let position = false
            Object.keys(_bahan).forEach((i) => {
                if (_bahan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _bahan[position].pasir
            }
        }           
const addSemen = (sender, amount) => {
            let position = false
            Object.keys(_bahan).forEach((i) => {
                if (_bahan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bahan[position].semen += amount
                fs.writeFileSync('./database/rpg/bahan.json', JSON.stringify(_bahan))
            }
        }
   const kurangSemen = (sender, amount) => {
            let position = false
            Object.keys(_bahan).forEach((i) => {
                if (_bahan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bahan[position].semen -= amount
                fs.writeFileSync('./database/rpg/bahan.json', JSON.stringify(_bahan))
            }
        }
   const getSemen = (sender) => {
            let position = false
            Object.keys(_bahan).forEach((i) => {
                if (_bahan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _bahan[position].semen
            }
        }            
    module.exports = { cekBahanJson,
addInvBahan, 
addKayu,
kurangKayu,
getKayu,
addBatu,
kurangBatu,
getBatu,
addSemen,
kurangSemen,
getSemen,
addPasir,
kurangPasir,
getPasir
                  }