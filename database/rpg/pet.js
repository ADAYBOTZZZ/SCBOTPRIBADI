  const fs = require('fs')
  let _pet = JSON.parse(fs.readFileSync('./database/rpg/pet.json'))
  
  const addInvPet = (sender) => {
        const obj = {id: sender, anjing: 0, kucing: 0, naga: 0, kyubi: 0}
         _pet.push(obj)
        fs.writeFileSync('./database/rpg/pet.json', JSON.stringify(_pet))
   }
  const cekPetJson = (sender) => {
            let status = false
            Object.keys(_pet).forEach((i) => {
                if (_pet[i].id === sender) {
                    status = true
                }
            })
            return status
        }
   const addKucing = (sender, amount) => {
            let position = false
            Object.keys(_pet).forEach((i) => {
                if (_pet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pet[position].kucing += amount
                fs.writeFileSync('./database/rpg/pet.json', JSON.stringify(_pet))
            }
        }
   const kurangKucing = (sender, amount) => {
            let position = false
            Object.keys(_pet).forEach((i) => {
                if (_pet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pet[position].kucing -= amount
                fs.writeFileSync('./database/rpg/pet.json', JSON.stringify(_pet))
            }
        }
   const getKucing = (sender) => {
            let position = false
            Object.keys(_pet).forEach((i) => {
                if (_pet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _pet[position].kucing
            }
        }    
const addAnjing = (sender, amount) => {
            let position = false
            Object.keys(_pet).forEach((i) => {
                if (_pet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pet[position].anjing += amount
                fs.writeFileSync('./database/rpg/pet.json', JSON.stringify(_pet))
            }
        }
   const kurangAnjing = (sender, amount) => {
            let position = false
            Object.keys(_pet).forEach((i) => {
                if (_pet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pet[position].anjing -= amount
                fs.writeFileSync('./database/rpg/pet.json', JSON.stringify(_pet))
            }
        }
   const getAnjing = (sender) => {
            let position = false
            Object.keys(_pet).forEach((i) => {
                if (_pet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _pet[position].anjing
            }
        }    
const addKyubi = (sender, amount) => {
            let position = false
            Object.keys(_pet).forEach((i) => {
                if (_pet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pet[position].kyubi += amount
                fs.writeFileSync('./database/rpg/pet.json', JSON.stringify(_pet))
            }
        }
   const kurangKyubi = (sender, amount) => {
            let position = false
            Object.keys(_pet).forEach((i) => {
                if (_pet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pet[position].kyubi -= amount
                fs.writeFileSync('./database/rpg/pet.json', JSON.stringify(_pet))
            }
        }
   const getKyubi = (sender) => {
            let position = false
            Object.keys(_pet).forEach((i) => {
                if (_pet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _pet[position].kyubi
            }
        }    
const addNaga = (sender, amount) => {
            let position = false
            Object.keys(_pet).forEach((i) => {
                if (_pet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pet[position].naga += amount
                fs.writeFileSync('./database/rpg/pet.json', JSON.stringify(_pet))
            }
        }
   const kurangNaga = (sender, amount) => {
            let position = false
            Object.keys(_pet).forEach((i) => {
                if (_pet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pet[position].naga -= amount
                fs.writeFileSync('./database/rpg/pet.json', JSON.stringify(_pet))
            }
        }
   const getNaga = (sender) => {
            let position = false
            Object.keys(_pet).forEach((i) => {
                if (_pet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _pet[position].naga
            }
        }                                
    module.exports = { cekPetJson,
addInvPet, 
addKucing,
kurangKucing,
getKucing,
addNaga,
kurangNaga,
getNaga,
addAnjing,
kurangAnjing,
getAnjing,
addKyubi,
kurangKyubi,
getKyubi
                  }