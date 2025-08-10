import axios from "axios";

export default axios.create({
    baseURL: 'https://020e597e71a9.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
      }
})