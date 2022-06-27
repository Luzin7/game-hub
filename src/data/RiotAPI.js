import { KEY } from "../utils/keyAPI";

const fetchValorantCharacters = async () => {
  try {
    const fetchRequest = await fetch(
      `https://br.api.riotgames.com/val/content/v1/contents?locale=pt-BR&api_key=${KEY}`
    );
    const data = await fetchRequest.json();
    return await data.characters;
  } catch (error) {
    console.log(error.message);
  }
};
export default fetchValorantCharacters;
