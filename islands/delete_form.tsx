import { useState } from "preact/hooks";
import ButtonRed from "./button_red.tsx";
import Input from "./input.tsx";
  
export default function DeleteForm() {

    const [uuid, setUUID] = useState("");
    const [apiKey, setApiKey] = useState("");

    async function deletePlayer() {
      try {
        const resp = await fetch("http://localhost:8000/api/players/uuid/delete/"+ uuid + "/" + apiKey,
        {
            method: "DELETE"
        });

        setUUID("");
        setApiKey("");
        
        if (resp.status === 404) {
            console.log("Couldnt delete player");
            return;
        }
      }
      catch (e) {
        console.log("ERROR: ", e)
      }
        
    }

    const handleUUIDChange = (e: any) => {
      setUUID(e.target.value);
    }

    const handleApiKeyChange = (e: any) => {
      setApiKey(e.target.value);
    }

    return (
        <form class="m-10">
          <div class="mb-6">
            <label for="UUID" class="block mb-2 text-lg text-white">UUID *</label>
            <Input type="text" class="w-full" id="UUID" placeholder="8c679f09-ef20-4599-84ea-1fbe33428169" onChange={handleUUIDChange} value={uuid} required/>
          </div>
          <div class="mb-6">
            <label for="api-key" class="block mb-2 text-lg text-white">Clef d'api *</label>
            <Input type="text" class="w-full" id="api-key" placeholder="Entrez votre clef d'API..." onChange={handleApiKeyChange} value={apiKey} required/>
          </div>
          <ButtonRed type="button" onClick={deletePlayer}>Supprimer</ButtonRed>
        </form>
    )
}
  