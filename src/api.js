import axios from "axios";

export default axios.create({
    baseURL: 'https://835b-2402-4000-2080-f53f-458b-5c37-6e56-be1d.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
      }
})