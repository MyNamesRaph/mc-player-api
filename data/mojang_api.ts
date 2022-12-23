const MOJANG_API_URL = "https://sessionserver.mojang.com/session/minecraft/";

import { decode } from "base-64";


export function getProfile(uuid: string) : Promise<any> {
    return new Promise( (resolve, reject) => {
        // Fetch the profile from the Mojang API
        fetch(MOJANG_API_URL + "profile/" + uuid).then( (resp) => {
            if (resp.status == 200) {
                resp.text().then( (text) => {
                    // Parse the response as JSON
                    const playerinfo = JSON.parse(text);
                    const playerinfoValue = JSON.parse(
                        // Decode the base64 encoded value
                        new TextDecoder().decode(
                            decode(playerinfo.properties[0].value)
                        )
                    );
                    // Replace the encoded value with the decoded value
                    playerinfo.properties[0].value = playerinfoValue;
                    
                    resolve(playerinfo);
                });
            }
            else if (resp.status == 404){
                reject({error: 404, errorMessage: "L'api Mojang est possiblement hors-service."});
            }
            else {
                resp.text().then( (text) => {
                    reject(text);
                });
            }
        });
    });
}