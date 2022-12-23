import { useState } from "preact/hooks";
import Button from "./button.tsx";
import Input from "./input.tsx";


type Token = {
    token: string,
    lifetime: string
}
  

export default function ApiKeyForm() {

    const [apiKey, setApiKey] = useState("");
    const [lifetime,setLifetime] = useState("");

    async function getKey() {
        const resp = await fetch(`http://localhost:8000/api/auth`);
        if (resp.status === 404) {
            console.log("Couldnt fetch API key");
            return;
        }

        const token: Token = await resp.json();

        console.log(token.token);

        setApiKey(token.token);
        setLifetime(token.lifetime);
    }



    return (
        <div class="flex gap-1">
            <Button onClick={getKey}>{/*i18next.t("apiKey")*/"Obtenir une clef d'API"}</Button>
            <Input value={apiKey}></Input>
        </div>
    )
}
  