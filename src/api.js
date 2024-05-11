import axios from "axios";

export default axios.create({
    baseURL: 'https://448b-2402-4000-2080-973a-f4ff-fb66-174f-a81d.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
      }
})