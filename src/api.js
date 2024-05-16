import axios from "axios";

export default axios.create({
    baseURL: 'https://f2f5-2402-4000-b281-e953-585c-de06-8aa9-69e8.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
      }
})