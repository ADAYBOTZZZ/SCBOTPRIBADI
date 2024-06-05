  const fs = require('fs')
  let _bar = JSON.parse(fs.readFileSync('./database/rpg/bar.json'))

  const addInvBar = (sender, bar) => {
        const obj = {id: sender, bar: 100}
         _bar.push(obj)
        fs.writeFileSync('./database/rpg/bar.json', JSON.stringify(_bar))
   }
  const cekBarJson = (sender) => {
            let status = false
            Object.keys(_bar).forEach((i) => {
                if (_bar[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  const addBar = (sender, amount) => {
            let position = false
            Object.keys(_bar).forEach((i) => {
                if (_bar[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bar[position].bar += amount
                fs.writeFileSync('./database/rpg/bar.json', JSON.stringify(_bar))
            }
        }
   const kurangBar = (sender, amount) => {
            let position = false
            Object.keys(_bar).forEach((i) => {
                if (_bar[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bar[position].bar -= amount
                fs.writeFileSync('./database/rpg/bar.json', JSON.stringify(_bar))
            }
        }
   const getBar = (sender) => {
            let position = false
            Object.keys(_bar).forEach((i) => {
                if (_bar[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _bar[position].bar
            }
        }     
        
   module.exports = { addInvBar, cekBarJson, addBar, kurangBar, getBar }   