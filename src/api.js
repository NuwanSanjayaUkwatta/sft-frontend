import axios from "axios";

export default axios.create({
    baseURL: 'https://3ad2-2402-4000-2200-b1ce-e08c-6cee-abbb-3f45.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
      }
})