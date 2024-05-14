import axios from "axios";

export default axios.create({
    baseURL: 'https://dba6-2402-4000-2200-3d04-b9c4-5ef-7f08-123a.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
      }
})