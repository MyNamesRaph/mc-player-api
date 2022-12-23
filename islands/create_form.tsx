import { useState } from "preact/hooks";
import Button from "./button.tsx";
import DropDown from "./dropdown.tsx";
  
export default function CreateForm() {

  const UUIDs = [
    "8c679f09-ef20-4599-84ea-1fbe33428169",
    "22f86287-273f-483c-9436-c8d74e75436e",
    "318d8b19-abdd-499e-b0c3-54934e6597b2"
  ]
  
  const [uuid, setUUID] = useState("");

  async function updatePlayer() {
    if (!UUIDs.includes(uuid)) {
      return;
    }

    try {
      const resp = await fetch("http://localhost:8000/api/players/uuid/parse/"+ uuid,
      {
          method: "PUT"
      });

      setUUID("");
      
      if (resp.status === 404) {
          console.log("Couldnt update player");
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

  return (
      <form class="m-10">
        <div class="mb-6">
          <label for="UUID" class="block mb-2 text-lg text-white">UUID *</label>
          <DropDown class="w-full" id="UUID" onChange={handleUUIDChange} value={uuid} placeholder="" required>
            <option value="" disabled selected>
              Selectionnez un UUID...
            </option>
            {
              UUIDs.map((uuid) => 
                <option value={uuid}>
                  {uuid}
                </option>
            )
            }
            
          </DropDown>
        </div>
        <Button type="button" onClick={updatePlayer}>Mettre à jour</Button>
      </form>
  )
}
  