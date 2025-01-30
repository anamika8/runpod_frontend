import axios from "axios";
import home_gif from '../assets/home.gif'

const API_KEY = process.env.REACT_APP_API_KEY;
const DEFAULT_IMAGE_TO_SHOW = home_gif;
const RUNPOD_HOST_URL = `https://api.runpod.ai/v2/t66yn9dzz7jydx/run`;
const DEFAULT_SEARCH_TEXT = `an astronaut riding a horse, digital art, epic lighting, highly-detailed masterpiece trending HQ`;

// public function that can be called by the UI or other services
export async function callRunpodApiWithSearchText(searchText = "") {
    console.log(`Hitting the URL ${RUNPOD_HOST_URL} and API key - ${API_KEY}`);
    if (searchText === "") {
        searchText = DEFAULT_SEARCH_TEXT;
    }
    const data = {
        input: {
            prompt: searchText,
        },
    };

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
    };
    try {
        const response = await axios.post(RUNPOD_HOST_URL, data, { headers });
        console.log(response.status);

        if (response.data && response.data.output) {
            const imageBase64 = response.data.output.body;
            return `data:image/png;base64, ${imageBase64}`;
        } else {
            console.log("Invalid response structure. Returning default image.");
            return DEFAULT_IMAGE_TO_SHOW;
        }
    } catch (error) {
        console.error('Caught Error:', error);
        return DEFAULT_IMAGE_TO_SHOW;
    }
}
