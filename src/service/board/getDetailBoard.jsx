import axios from "axios";

const backendUri = process.env.REACT_APP_BECKEND_API_KEY;
export default async function getDetailBoard(notificationId) {
    try {
        const res = await axios.get(`${backendUri}/notice/one?notification_id=${notificationId}`);
        return res.data;
    } catch (e) {
        return null;
    }
}