import axios from "axios";

export default axios.create({
    baseURL: 'https://f473-2402-4000-b280-4bb8-e432-8f87-1fda-2de5.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
      }
})