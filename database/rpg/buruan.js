  const fs = require('fs')
  let _hasilBuruan = JSON.parse(fs.readFileSync('./database/rpg/hasil_buruan.json'))
  
  const addInventoriBuruan = (sender) => {
        const obj = {id: sender, ikan: 0, ayam: 0, kelinci: 0, domba: 0, sapi: 0, gajah: 0, botol: 0, kaleng: 0, kardus: 0, cm: 0, cl: 0, cu: 0}
         _hasilBuruan.push(obj)
        fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
   }
  const cekDuluHasilBuruanNya = (sender) => {
            let status = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    status = true
                }
            })
            return status
        }
   const addAyam = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].ayam += amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangAyam = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].ayam -= amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getAyam = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].ayam
            }
        }    
  const addIkan = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].ikan += amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangIkan = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].ikan -= amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getIkan = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].ikan
            }
        }              
const getBotol = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].botol
            }
        }      
const addBotol = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].botol += amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangBotol = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].botol -= amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
const getKardus = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].kardus
            }
        }      
const addKardus = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].kardus += amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangKardus = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].kardus -= amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
const getKaleng = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].kaleng
            }
        }      
const addKaleng = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].kaleng += amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangKaleng = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].kaleng -= amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
  const addKelinci = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].kelinci += amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangKelinci = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].kelinci -= amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getKelinci = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].kelinci
            }
        }     
  const addDomba = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].domba += amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangDomba = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].domba -= amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getDomba = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].domba
            }
        } 
    const addSapi = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].sapi += amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangSapi = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].sapi -= amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getSapi = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].sapi
            }
        }     
  const addGajah = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].gajah += amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangGajah = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].gajah -= amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const getGajah = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].gajah
            }
        }
const getCM = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].cm
            }
        }      
const addCM = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].cm += amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangCM = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].cm -= amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }        
const getCL = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].cl
            }
        }      
const addCL = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].cl += amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangCL = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].cl -= amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }        
const getCU = (sender) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].cu
            }
        }      
const addCU = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].cu += amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
   const kurangCU = (sender, amount) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].cu -= amount
                fs.writeFileSync('./database/rpg/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }             
        
    module.exports = { cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,
addGajah,
addBotol,
kurangIkan,
kurangAyam, 
kurangBotol,
addKaleng,
kurangKaleng,
getKaleng,
addKardus,
kurangKardus,
getKardus,
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah,
getBotol,
getCM,
kurangCM,
addCM,
getCU,
kurangCU,
addCU,
getCL,
kurangCL,
addCL
                  }
  