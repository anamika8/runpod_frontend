import axios from "axios";
import home_gif from '../assets/home.gif';

const API_KEY = process.env.REACT_APP_API_KEY;
const DEFAULT_IMAGE_TO_SHOW = home_gif;
const RUNPOD_HOST_URL = `https://api.runpod.ai/v2/gjdoc8hrhwvpnf/run`;
const STATUS_URL = `https://api.runpod.ai/v2/gjdoc8hrhwvpnf/status`; 
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
        // Step 1: Trigger job by making a POST request
        const response = await axios.post(RUNPOD_HOST_URL, data, { headers });
        console.log(`Job triggered with ID: ${response.data.job_id}`);
        const jobId = response.data.id;

        // Step 2: Poll job status
        let jobStatusResponse;
        let retries = 10;  // Maximum retries to check job status
        let imageBase64;

        while (retries > 0) {
            console.log(`Checking job status for job ID: ${jobId}`);
            jobStatusResponse = await axios.get(`${STATUS_URL}/${jobId}`, { headers });
            console.log(`Current status - ${jobStatusResponse.data.status}`);
            if (jobStatusResponse.data.status === 'COMPLETED') {
                console.log("Job completed successfully.");
                imageBase64 = jobStatusResponse.data.output.body;
                break;
            } else if (jobStatusResponse.data.status === 'FAILED') {
                console.error("Job failed.");
                return DEFAULT_IMAGE_TO_SHOW;
            }
            retries--;
            console.log(`Job is still processing. Retries left: ${retries}`);
            await delay(2000);  // Wait for 2 seconds before checking again (adjust delay as needed)
        }

        if (imageBase64) {
            return `data:image/png;base64, ${imageBase64}`;
        } else {
            console.log("Job did not complete successfully within the retries.");
            return DEFAULT_IMAGE_TO_SHOW;
        }
    } catch (error) {
        console.error('Caught Error:', error);
        return DEFAULT_IMAGE_TO_SHOW;
    }
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}