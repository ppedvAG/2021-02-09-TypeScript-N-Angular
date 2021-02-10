"use strict";
const teilnehmerGegangen = false;
const teilnehmerIstImHandy = false;
// Promise erst ab ES2015, target lib also anpassen!
function learnTS() {
    return new Promise((resolve, reject) => {
        if (teilnehmerGegangen) {
            reject({
                name: 'hatte kein Bock und ist gegangen',
                message: 'Motivation kommt nicht von allein'
            });
        }
        else if (teilnehmerIstImHandy) {
            reject({
                name: 'teilnehmer im Handy',
                message: 'Insta VS TS: Insta wins'
            });
        }
        else {
            resolve('teilnehmer ist fleißig am Lernen'); //Deklaration: resolve: (value: unknown) => void
        }
    });
}
learnTS()
    .then((message) => { console.log('Erfolreich: ' + message); })
    .catch((reason) => { console.log('Fail: ' + reason.message); });
