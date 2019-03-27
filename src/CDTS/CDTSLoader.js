import * as CDTSConstants from './CDTSConstants';

export default class CDTSLoader {

    static getCDTSInstructions(theWindow) {
        return new Promise((resolve, reject) => {
            if (theWindow[CDTSConstants.CDTS_INLINE_INSTRUCTIONS] != undefined) {
                resolve(theWindow[CDTSConstants.CDTS_INLINE_INSTRUCTIONS]);
            } else if (theWindow[CDTSConstants.CDTS_URL_INSTRUCTIONS] != undefined) {
                CDTSLoader.fetchJson(theWindow[CDTSConstants.CDTS_URL_INSTRUCTIONS], theWindow)
                    .then( data => resolve(data))
                    .catch(error => reject(error));
            } else {
                reject(new Error(CDTSConstants.CDTS_INSTRUCTIONS_NOT_FOUND_MESSAGE));
            }
        });
    }

    static fetchJson(url, theWindow) {
        //check for 'fetch' support in browser
        if (theWindow.fetch) {
            return fetch(url)
            .then(response => {
                console.log(response);
                if(response.ok){
                    if(response.status >= 200 && response.status < 300){
                        return response.json()
                    } 
                    throw new Error(response.statusText);
                }
                throw new Error(response.statusText);
            });
        } else {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.onload = () => {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(new Error(xhr.statusText));
                    }
                };
                xhr.onerror = () => reject(new Error(xhr.statusText));
                xhr.send();
            });
        }
    }
}