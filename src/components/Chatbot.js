import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Chatbot = ({ onBackButtonClick }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const initialBotMessage = { sender: 'bot', text: '궁금한 점이 있으신가요?' };
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
        <div className="text-[26px] font-['Poppins'] font-medium text-[#000] font-mango">Main</div>
      </button>
      <div className="absolute left-[253px] top-[121px] w-[534px] h-[703px] bg-[#fcfeff] border-[3px] border-solid border-[#b5bbf3] overflow-y-scroll">
        <div className="flex flex-col">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-4 my-2 mx-4 w-fit font-mango rounded-lg ${message.sender === 'user' ? 'bg-blue-200 self-end' : 'bg-gray-200 self-start'}`}
              style={{
                whiteSpace: 'pre-wrap',
                alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start' // 정렬 설정
              }}
            >
              {message.text}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-[250px] top-[830px] w-[542px] h-[46px] flex items-center bg-[#fcfeff]  border-[1px] border-solid border-[#b5bbf3] rounded-full px-4">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
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