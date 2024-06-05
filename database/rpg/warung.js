  const fs = require('fs')
  let _warung = JSON.parse(fs.readFileSync('./database/rpg/warung.json'))
  
  const addInvWarung = (sender) => {
        const obj = {id: sender, es: 0, ringan: 0, pedas: 0, permen: 0}
         _warung.push(obj)
        fs.writeFileSync('./database/rpg/warung.json', JSON.stringify(_warung))
   }
  const cekWarungJson = (sender) => {
            let status = false
            Object.keys(_warung).forEach((i) => {
                if (_warung[i].id === sender) {
                    status = true
                }
            })
            return status
        }
   const addEs = (sender, amount) => {
            let position = false
            Object.keys(_warung).forEach((i) => {
                if (_warung[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _warung[position].es += amount
                fs.writeFileSync('./database/rpg/warung.json', JSON.stringify(_warung))
            }
        }
   const kurangEs = (sender, amount) => {
            let position = false
            Object.keys(_warung).forEach((i) => {
                if (_warung[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _warung[position].es -= amount
                fs.writeFileSync('./database/rpg/warung.json', JSON.stringify(_warung))
            }
        }
   const getEs = (sender) => {
            let position = false
            Object.keys(_warung).forEach((i) => {
                if (_warung[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _warung[position].es
            }
        }    
const addPermen = (sender, amount) => {
            let position = false
            Object.keys(_warung).forEach((i) => {
                if (_warung[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _warung[position].Permen += amount
                fs.writeFileSync('./database/rpg/warung.json', JSON.stringify(_warung))
            }
        }
   const kurangPermen = (sender, amount) => {
            let position = false
            Object.keys(_warung).forEach((i) => {
                if (_warung[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _warung[position].Permen -= amount
                fs.writeFileSync('./database/rpg/warung.json', JSON.stringify(_warung))
            }
        }
   const getPermen = (sender) => {
            let position = false
            Object.keys(_warung).forEach((i) => {
                if (_warung[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _warung[position].Permen
            }
        }        
const addRingan = (sender, amount) => {
            let position = false
            Object.keys(_warung).forEach((i) => {
                if (_warung[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _warung[position].ringan += amount
                fs.writeFileSync('./database/rpg/warung.json', JSON.stringify(_warung))
            }
        }
   const kurangRingan = (sender, amount) => {
            let position = false
            Object.keys(_warung).forEach((i) => {
                if (_warung[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _warung[position].ringan -= amount
                fs.writeFileSync('./database/rpg/warung.json', JSON.stringify(_warung))
            }
        }
   const getRingan = (sender) => {
            let position = false
            Object.keys(_warung).forEach((i) => {
                if (_warung[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _warung[position].ringan
            }
        }            
const addPedas = (sender, amount) => {
            let position = false
            Object.keys(_warung).forEach((i) => {
                if (_warung[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _warung[position].pedas += amount
                fs.writeFileSync('./database/rpg/warung.json', JSON.stringify(_warung))
            }
        }
   const kurangPedas = (sender, amount) => {
            let position = false
            Object.keys(_warung).forEach((i) => {
                if (_warung[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _warung[position].pedas -= amount
                fs.writeFileSync('./database/rpg/warung.json', JSON.stringify(_warung))
            }
        }
   const getPedas = (sender) => {
            let position = false
            Object.keys(_warung).forEach((i) => {
                if (_warung[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _warung[position].pedas
            }
        }            
    module.exports = { cekWarungJson,
addInvWarung, 
addEs,
kurangEs,
getEs,
addPermen,
kurangPermen,
getPermen,
addRingan,
kurangRingan,
getRingan,
addPedas,
kurangPedas,
getPedas
                  }