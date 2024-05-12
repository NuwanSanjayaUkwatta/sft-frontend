import axios from "axios";

export default axios.create({
    baseURL: 'https://e264-2402-4000-2082-52e9-944e-d052-76-5d79.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
      }
})