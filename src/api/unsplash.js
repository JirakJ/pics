import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1B3D8n1Dw8KTwnhFJomtOolGxNnCULLIGZKfyS9RT_w'
    }
});
