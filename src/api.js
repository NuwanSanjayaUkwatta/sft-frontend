import axios from "axios";

export default axios.create({
    baseURL: 'https://cd5b-2402-4000-2180-e7fb-6c8f-7026-cd52-d435.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
      }
})