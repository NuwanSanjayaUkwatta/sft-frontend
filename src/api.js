import axios from "axios";

export default axios.create({
    baseURL: 'https://3ad7-2402-4000-2082-52e9-3d85-f911-e2ca-366d.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
      }
})