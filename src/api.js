import axios from "axios";

export default axios.create({
    baseURL: 'https://2ca5-2402-4000-2080-8f51-2145-acdb-4e25-5530.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
      }
})