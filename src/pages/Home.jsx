import React from 'react';
import { useNavigate } from 'react-router-dom';

import groupImage from '../images/Group.png';
import group2Image from '../images/Group2.png';
import group3Image from '../images/Group3.png';

import chatIcon from '../images/Icon/icons.png';
import './App.css';
import Header from '../components/Header';
import HomeComponent from '../components/home/HomeComponent';

const Home = () => {
  const navigate = useNavigate();

  const ChatbotClick = () => {
    navigate('/Chatbot');
  }

  return (
    <div className="w-full bg-[#F7F6ED]">
      <div className=" w-full"></div>
      <Header />
      <HomeComponent />
      {/*챗봇바*/}
      <div className="w-[282px] h-[74px] flex cursor-pointer">
        <div className='fixed right-[62px] bottom-[54px] w-[281px] h-[74px] flex bg-[#232427] rounded-[50px] items-center justify-center hover:bg-[#353535]'>
          <img className="" width="38" height="40" src={chatIcon} alt="Chat icon" />
          <button className="ml-[1rem] text-[26px] font-mango text-white text-center" onClick={ChatbotClick}>Let’s Chat</button>
        </div>

      </div>
      {/*바텀바*/}
      <div className="w-full h-[20rem] flex flex-row items-center justify-between px-[120px]">
        <div className="w-[125px] h-[33px] text-[25px] font-mango text-black text-center">오손도손</div>
        <div className="flex flex-row items-start justify-start gap-9">
          <div className="text-[14px] font-['Inter'] font-medium text-[#212121]">Terms</div>
          <div className="text-[14px] font-['Inter'] font-medium text-[#212121]">Privacy</div>
          <div className="text-[14px] font-['Inter'] font-medium text-[#212121]">Cookies</div>
        </div>
        <div className="flex flex-row items-start justify-start gap-4">
          <img width="35" height="35" src={groupImage} alt="Social media icon 1" />
          <img width="35" height="35" src={group2Image} alt="Social media icon 2" />
          <img width="35" height="35" src={group3Image} alt="Social media icon 3" />
        </div>
      </div>
    </div>
  );
};

export default Home;
