import axios from "axios";

const backendUri = process.env.REACT_APP_BECKEND_API_KEY;
export default async function postBoard(formData) {
    const data = new FormData();

    // 주어진 파라미터 추가
    data.append('user_id', formData.user_id);
    data.append('type', formData.type);
    data.append('title', formData.title);
    data.append('content', formData.content);
    // 파일은 아래와 같이 추가, 'file'은 input type="file"의 name 속성과 일치해야 함
    if (formData.file) {
        data.append('file', formData.file);
    }
    try {
        const res = await axios.post(`${backendUri}/notice/`, data);
        return res.data;
    } catch (e) {
        return null;
    }
}