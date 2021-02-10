const teilnehmerGegangen = false
const teilnehmerIstImHandy = false

// Promise erst ab ES2015, target lib also anpassen!

function learnTS() {
    return new Promise((resolve, reject) => { // resolve ist gedacht fer Erfolg, reject für Misserfolg
        if (teilnehmerGegangen) {
            reject({ // Deklaration: reject(reason?: any): void
                name: 'hatte kein Bock und ist gegangen',
                message: 'Motivation kommt nicht von allein'
            })
        } else if (teilnehmerIstImHandy) {
            reject({
                name: 'teilnehmer im Handy',
                message: 'Insta VS TS: Insta wins'
            })
        } else {
            resolve('teilnehmer ist fleißig am Lernen') //Deklaration: resolve: (value: unknown) => void
        }
    }) 
}

learnTS()
.then((message)=>{console.log('Erfolreich: ' + message)})
.catch((reason)=>{console.log('Fail: ' + reason.message)})