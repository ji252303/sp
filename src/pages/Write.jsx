import { useEffect, useState } from "react";
import Header from "../components/Header";
import noneImage from "../images/noneimage.svg"
import { isTypeNames } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import Cookies from "js-cookie";
import postBoard from "../service/board/postBoard";
import { useNavigate } from "react-router";

export default function Write() {
    const [thumbnailPreview, setThumbnailPreview] = useState(null);
    const [typeNames, setTypeNames] = useRecoilState(isTypeNames);
    const userId = Cookies.get("userId");
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        type: typeNames,
        user_id: userId,
        file: null,
    });
    const navigate = useNavigate();

    const BoardClick = () => {
        navigate('/board');
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // name이 비어있지 않은 경우에만 처리
        if (name) {
            // 문자열에서 쉼표 제거
            const inputValue = value.replace(/,/g, '');
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: inputValue,
            }));
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFormData({
                ...formData,
                file: file,
            });
            setThumbnailPreview(URL.createObjectURL(file));
        }
    };
    // URL 객체 해제
    useEffect(() => {
        return () => {
            if (thumbnailPreview) {
                URL.revokeObjectURL(thumbnailPreview);
            }
        };
    }, [thumbnailPreview]);

    const isBoardUploadHandler = async () => {
        try {
            console.log(formData)
            await postBoard(formData);
            BoardClick();
        } catch (e) {
            return null;
        }
    }

    return (
        <div className="w-full h-screen bg-[#F7F6ED]">
            <Header />
            <div className="w-full">
                <div className="w-[800px] mx-auto">
                    <div className="w-[800px] h-[600px] flex flex-col bg-white  px-[1rem] mt-[50px] border-2 border-[#B5BBF3] rounded-[10px]">
                        <input className="outline-none text-[30px] mt-[20px] border-b border-black pb-[20px]" type="text" placeholder="제목" name='title' value={formData.title} onChange={handleInputChange} />
                        <div className="flex h-[100px] items-center mt-[1rem]">
                            {thumbnailPreview === null ?
                                <img
                                    className='w-[100px] h-[100px]'
                                    src={noneImage}
                                    width={100}
                                    height={100}
                                    alt="이미지" />
                                :
                                <img
                                    className="w-[100px] h-[100px]"
                                    src={thumbnailPreview}
                                    width={100}
                                    height={100}
                                    alt="이미지" />
                            }
                            <label className="text-[50px] font-semibold cursor-pointer" htmlFor="input-file" >+</label>
                            <input id="input-file" name='file' style={{ display: "none" }} type="file" accept='image/*' onChange={handleFileChange} multiple />
                        </div>
                        <textarea
                            className='w-full h-screen outline-none text-[20px] my-[1rem]'
                            placeholder='내용'
                            name='content'
                            value={formData.content} onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <button className="flex ml-auto w-[210px] h-[60px] text-black bg-[#F9ED32] rounded-[10px] text-[26px] font-mango items-center justify-center mt-[20px]" onClick={isBoardUploadHandler}>등록</button>
                </div>
            </div>
        </div>
    )
}