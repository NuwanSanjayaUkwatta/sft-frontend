import axios from "axios";

export default axios.create({
    baseURL: 'https://be90-2402-4000-b282-8e1-359a-c34-2003-c57.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
      }
})