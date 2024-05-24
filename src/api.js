import axios from "axios";

export default axios.create({
    baseURL: 'https://c27d-2402-4000-2180-9180-e8a1-3349-f84e-ab18.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
      }
})