import i18next from "i18next";

export async function initTranslations() {
    /*await i18next.use(Backend).init({
        debug: true,
        fallbackLng: "en",
        ns: "translation",
        defaultNS: "translation",
        ressources: {
            en: {
                translation: {
                    "home": "Acceuil",
                    "players": "Joueurs",
                    "stats": "Stats",
                    "apiKey": "Obtenir une clef d'api"
                }
                
            },
            fr: {
                translation: frTranslation,
            },
        } 
    });*/

    await i18next.use(Backend).init({
        //debug: true,
        initImmediate: false,
        fallbackLng: "en",
        preload: ['en', 'fr'],
        backend: {
            loadPath: "static/locales/{{lng}}/{{ns}}.json",
        },
    });
}

export default i18next;
//export default (lng: string | undefined | null) => i18next.getFixedT(lng || systemLocale);