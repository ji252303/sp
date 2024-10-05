import axios from "axios";

const backendUri = process.env.REACT_APP_BECKEND_API_KEY;

export default async function getUser(userId) {
    try {
        const res = await axios.get(`${backendUri}/user/profile?user_id=${userId}`);
        return res.data;
    } catch (e) {
        return null;
    }
}