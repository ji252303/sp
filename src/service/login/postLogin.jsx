import axios from "axios";

const backendUri = process.env.REACT_APP_BECKEND_API_KEY;


export default async function postLogin(userId, userPwd) {
    try {
        const res = await axios.post(`${backendUri}/user/login?user_id=${userId}&user_pwd=${userPwd}`);
        console.log(res.data);
        return res.data;
    } catch (e) {
        console.error(e); // 오류를 콘솔에 출력
        return null;
    }
}
