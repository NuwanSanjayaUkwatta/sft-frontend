import axios from "axios";

export default axios.create({
    baseURL: 'https://6509-2402-4000-2081-6651-cd3e-50b3-79ce-d760.ngrok-free.app',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
      }
})