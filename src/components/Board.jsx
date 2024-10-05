import React, { useState, useEffect } from 'react';
import Header from './Header';
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import BoardSidebar from './board/boardSidebar';
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import getTypeBoard from '../service/board/getTypeBoard';
import getUser from '../service/user/getUser';
import { isTypeNames } from '../recoil/atoms';
import { useRecoilState } from 'recoil';

const Board = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [typeNames, setTypeNames] = useRecoilState(isTypeNames);
  const userId = Cookies.get("userId");

  const { data: boardData, refetch: boardRefetch } = useQuery({
    queryKey: ['boardData'],
    queryFn: () => getTypeBoard(typeNames),
    enabled: !!typeNames
  })

  console.log(typeNames)
  console.log(boardData)
  return (
    <div className="relative w-full h-screen bg-[#f6f4dd]">
      <Header />
      <div className='mt-[1rem] h-screen bg-[#f6f4dd]'>
        <BoardSidebar boardRefetch={boardRefetch}>
          <div className='w-full h-[30rem] flex flex-col mt-[10px]'>
            {boardData?.chatting_logs
              ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // createdAt 기준으로 내림차순 정렬
              .map((posts, index) => {
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
                const createdAt = posts.createdAt;
                const formattedDate = formatDate(createdAt);

                console.log(posts)
                return (
                  <Link to={`/board/${posts.id}`} className='border-b border-black mb-[10px]' key={index}>
                    <h1 className='font-bold text-[20px]'>{posts.title}</h1>
                    <span>{posts.user.name}</span>
                    <span className='ml-[1rem]'>{formattedDate}</span>
                  </Link>
                )
              })}
          </div>
          {userId ? (
            <Link to='/write'>
              <button className='flex ml-auto p-[10px] bg-[#F6F4DD] mt-[3rem] rounded-[10px]'>글쓰기</button>
            </Link>
          ) : (
            <></>
          )}

        </BoardSidebar>
        {searchOpen ? (
          <div className='w-[500px] h-[44px] border-2 border-[#0067DD] rounded-[10px] bg-white flex items-center ml-[24rem] mt-[1rem]'>
            <IoMdSearch className='flex ml-auto mr-[10px] w-[30px] h-[30px]' />
            <input className='w-[450px] outline-none text-[14px] pl-[10px]' placeholder='search..' type='text' />
          </div>
        ) : (
          <div className='h-[44px] flex items-center'>
            <IoMdSearch className='flex ml-[24.5rem] mt-[2rem] w-[30px] h-[30px]' onClick={() => setSearchOpen(true)} />
          </div>
        )}

      </div>
    </div>
  );
};

export default Board;
