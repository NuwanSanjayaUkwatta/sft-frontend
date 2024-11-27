import axios from "axios";

export default axios.create({
    baseURL: 'https://5743-2402-4000-2200-a29e-f537-ce2b-9f71-a32c.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
      }
})