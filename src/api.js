import axios from "axios";

export default axios.create({
    baseURL: 'https://69f8-2402-4000-b280-a3e7-d814-6e5c-1efd-ea17.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
      }
})