import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { isTypeNames } from "../../recoil/atoms";

export default function BoardSidebar({ children, boardRefetch }) {

    const [typeNames, setTypeNames] = useRecoilState(isTypeNames);
    const navigate = useNavigate();

    const BoardClick = () => {
        navigate('/board');
    }

    return (
        <div className='flex'>
            <div className='flex flex-col w-[300px] border-r border-[#8A8A8A] space-y-10 mt-[3rem]'>
                <div className="h-[50px] flex items-center justify-center cursor-pointer" onClick={() => {
                    setTimeout(() => {
                        BoardClick();
                    }, 300)
                    setTypeNames('정보및뉴스');
                    setTimeout(() => {
                        boardRefetch()
                    }, 100)
                }}>
                    <h2 className="text-[20px] font-bold text-[#000]">정보 및 뉴스</h2>
                </div>
                <div className="h-[50px] flex items-center justify-center cursor-pointer" onClick={() => {
                    setTimeout(() => {
                        BoardClick();
                    }, 300)
                    setTypeNames("문화학습"); setTimeout(() => {
                        boardRefetch()
                    }, 100)
                }}>
                    <h2 className="text-[20px] font-bold text-[#000]">문화 학습</h2>
                </div>
                <div className="h-[50px] flex items-center justify-center cursor-pointer" onClick={() => {
                    setTimeout(() => {
                        BoardClick();
                    }, 300)
                    setTypeNames('학사일정');
                    setTimeout(() => {
                        boardRefetch()
                    }, 100)
                }}>
                    <h2 className="text-[20px] font-bold text-[#000]">학사 일정</h2>
                </div>
            </div>
            <div className="flex flex-col ml-[5rem] mt-[3rem] w-[934px] min-h-[37rem] bg-[#fcfeff] border-[3px] border-solid border-[#b5bbf3] rounded-[10px] px-[20px]">
                {/*게시글 컴포넌트 넣을 예정*/}
                {children}
            </div>
        </div>
    )
}