//import i18n from "../locales/i18n.ts";

function getTranslatedRoutes(language: string) {
    /*const t = i18n(language);
    return [
        { name: t("home"), href: "/" },
        { name: t("players"), href: "/players" },
        { name: t("stats"), href: "/stats" },
        { name: t("connect"), href: "/auth"}
    ]*/

    return [
        { name: "Acceuil", href: "/" },
        { name: "Joueurs", href: "/players" },
        { name: "Stats", href: "/stats" },
        { name: "Connexion", href: "/auth"}
    ]
}

export default getTranslatedRoutes;