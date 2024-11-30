import axios from "axios";

export default axios.create({
    baseURL: 'https://350a-2402-4000-b280-575b-98b7-3b21-c05f-dc72.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
      }
})