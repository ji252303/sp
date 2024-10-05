import axios from "axios";

const backendUri = process.env.REACT_APP_BECKEND_API_KEY;
export default async function getTypeBoard(typeName) {
    try {
        const res = await axios.get(`${backendUri}/notice/many/type?type=${typeName}`);
        return res.data;
    } catch (e) {
        return null;
    }
}