import { useNavigate, useParams } from "react-router"
import Header from "../components/Header";
import BoardSidebar from "../components/board/boardSidebar";
import getDetailBoard from "../service/board/getDetailBoard";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import getTypeBoard from "../service/board/getTypeBoard";
import { useRecoilState } from "recoil";
import { isTypeNames } from "../recoil/atoms";

export default function BoardDetail() {
    const { id } = useParams();
    const [typeNames, setTypeNames] = useRecoilState(isTypeNames);

    const { data: boardDetailData } = useQuery({
        queryKey: ['boardDetailData'],
        queryFn: () => getDetailBoard(id),
        enabled: !!id
    })

    const { data: boardData, refetch: boardRefetch } = useQuery({
        queryKey: ['boardData'],
        queryFn: () => getTypeBoard(typeNames),
        enabled: !!typeNames
    })

    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    }
    const createdAt = boardDetailData?.notification.createdAt;
    const formattedDate = formatDate(createdAt);

    const imagesrc = boardDetailData?.notification.image_url;

    return (
        <div className="w-full min-h-screen bg-[#F7F6ED] pb-[5rem]">
            <Header />
            <div>
                <BoardSidebar boardRefetch={boardRefetch}>
                    <div className="p-[1rem]">
                        <h1 className="text-[30px] font-['inter'] font-bold border-b border-gary-400">{boardDetailData?.notification.title}</h1>
                        <div className=" border-b border-gary-400">
                            <span className="text-[#C3C3C3] font-semibold">{boardDetailData?.notification.user.name}</span>
                            <span className="ml-[1rem] text-[#C3C3C3] font-semibold">{formattedDate}</span>
                        </div>
                        <div>
                            <img className="w-fit" src={imagesrc} alt="" />
                        </div>
                        <span style={{ whiteSpace: 'pre-wrap' }}>{boardDetailData?.notification.content}</span>
                    </div>
                </BoardSidebar>
            </div>
        </div>
    )
}