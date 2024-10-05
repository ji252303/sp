import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Chatbot = ({ onBackButtonClick }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const initialBotMessage = {
      sender: 'bot',
      text: '국적취득 여부를 확인하기 위해 아래 여부에 답을 보내주세요\n1. 부모의 국적은 무엇인가요?\n2. 아이가 태어난 나라는 어디인가요?\n3. 아이가 태어난 국가에서는 이중국적을 허용하나요?\n4. 아이가 출생한 후 거주하고 있는 나라는 어디인가요?\n5. 각 국가의 법률에 따르면, 아이가 특정 연령에 도달했을 때 이중국적을 포기해야 하나요?'
    };

    setMessages([initialBotMessage]);
  }, []);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post('https://port-0-sprout-chatbot-1ffi5z2alr4l8in6.sel5.cloudtype.app/api/chat', { prompt: input });

      const combinedResponse = `Chinese: ${response.data.chinese_response}\nKorean: ${response.data.korean_response}`;
      const botMessage = { sender: 'bot', text: combinedResponse };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { sender: 'bot', text: 'There was an error. Please try again.' };
      setMessages([...messages, userMessage, errorMessage]);
    }

    setInput('');
  };

  const handleBackButtonClick = () => {
    navigate('/');
  };

  const addLineBreaks = (text) => {
    return text.split('\n').map((str, index) => (
      <React.Fragment key={index}>
        {str}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="relative w-[1440px] h-[1024px] bg-[#f6f4dd] overflow-hidden">
      <div className="absolute left-0 top-0 w-[1440px] h-[1024px] bg-[#f4f6dd]"></div>
      <button
        className="absolute left-[253px] top-[36px] w-[179px] h-[60px] bg-[#d2deff] rounded-[10px]"
        onClick={handleBackButtonClick}
      >
        <div className="text-[26px] font-['Poppins'] font-medium text-[#000]">Main</div>
      </button>
      <div className="absolute right-[253px] top-[121px] w-[934px] h-[813px] bg-[#fcfeff] border-[3px] border-solid border-[#b5bbf3] overflow-y-scroll">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-4 my-2 mx-4 rounded-lg ${message.sender === 'user' ? 'bg-blue-200 self-end' : 'bg-gray-200 self-start'}`}
            style={{ whiteSpace: 'pre-wrap' }} // 줄바꿈 처리를 위한 스타일
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="absolute left-[349px] top-[850px] w-[742px] h-[46px] flex items-center bg-[#fcfeff] border-[1px] border-solid border-[#b5bbf3] rounded-full px-4">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="w-full h-full border-none focus:outline-none"
          placeholder="챗봇에게 궁금한점을 질문해주세요!"
        />
        <button onClick={handleSendMessage} className="ml-4 text-[#000]">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;