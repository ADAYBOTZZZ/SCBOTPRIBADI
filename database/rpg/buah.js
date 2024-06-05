  const fs = require('fs')
  let _buah = JSON.parse(fs.readFileSync('./database/rpg/buah.json'))
  
  const addInvBuah = (sender) => {
        const obj = {id: sender, bibitbuah: 0, bibitapel: 0, buah: 0, apel: 0, ditanam: 0, ditanam1: 0}
         _buah.push(obj)
        fs.writeFileSync('./database/rpg/buah.json', JSON.stringify(_buah))
   }
  const cekBuahJson = (sender) => {
            let status = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    status = true
                }
            })
            return status
        }
   const addBibitBuah = (sender, amount) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _buah[position].bibitbuah += amount
                fs.writeFileSync('./database/rpg/buah.json', JSON.stringify(_buah))
            }
        }
   const kurangBibitBuah = (sender, amount) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _buah[position].bibitbuah -= amount
                fs.writeFileSync('./database/rpg/buah.json', JSON.stringify(_buah))
            }
        }
   const getBibitBuah = (sender) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _buah[position].bibitbuah
            }
        }    
const addApel = (sender, amount) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _buah[position].apel += amount
                fs.writeFileSync('./database/rpg/buah.json', JSON.stringify(_buah))
            }
        }
   const kurangApel = (sender, amount) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _buah[position].apel -= amount
                fs.writeFileSync('./database/rpg/buah.json', JSON.stringify(_buah))
            }
        }
   const getApel = (sender) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _buah[position].apel
            }
        }        
const addBibitApel = (sender, amount) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _buah[position].bibitapel += amount
                fs.writeFileSync('./database/rpg/buah.json', JSON.stringify(_buah))
            }
        }
   const kurangBibitApel = (sender, amount) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _buah[position].bibitapel -= amount
                fs.writeFileSync('./database/rpg/buah.json', JSON.stringify(_buah))
            }
        }
   const getBibitApel = (sender) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _buah[position].bibitapel
            }
        }            
const addBuah = (sender, amount) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _buah[position].buah += amount
                fs.writeFileSync('./database/rpg/buah.json', JSON.stringify(_buah))
            }
        }
   const kurangBuah = (sender, amount) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _buah[position].buah -= amount
                fs.writeFileSync('./database/rpg/buah.json', JSON.stringify(_buah))
            }
        }
   const getBuah = (sender) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _buah[position].buah
            }
        }            
const addDitanam = (sender, amount) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _buah[position].ditanam += amount
                fs.writeFileSync('./database/rpg/buah.json', JSON.stringify(_buah))
            }
        }
   const kurangDitanam = (sender, amount) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _buah[position].ditanam -= amount
                fs.writeFileSync('./database/rpg/buah.json', JSON.stringify(_buah))
            }
        }
   const getDitanam = (sender) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _buah[position].ditanam
            }
        }   
const addDitanam1 = (sender, amount) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _buah[position].ditanam1 += amount
                fs.writeFileSync('./database/rpg/buah.json', JSON.stringify(_buah))
            }
        }
   const kurangDitanam1 = (sender, amount) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _buah[position].ditanam1 -= amount
                fs.writeFileSync('./database/rpg/buah.json', JSON.stringify(_buah))
            }
        }
   const getDitanam1 = (sender) => {
            let position = false
            Object.keys(_buah).forEach((i) => {
                if (_buah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _buah[position].ditanam1
            }
        }                     
    module.exports = { cekBuahJson,
addInvBuah, 
addBibitBuah,
kurangBibitBuah,
getBibitBuah,
addApel,
kurangApel,
getApel,
addBibitApel,
kurangBibitApel,
getBibitApel,
addBuah,
kurangBuah,
getBuah,
addDitanam,
kurangDitanam,
getDitanam,
addDitanam1,
kurangDitanam1,
getDitanam1
                  }