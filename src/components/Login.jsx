import React, { useState } from 'react';
import postLogin from '../service/login/postLogin';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie"
import Header from './Header';

const Login = () => {

  const [user_id, setUserId] = useState('');
  const [user_pwd, setPassword] = useState('');
  const [mom, setIsParent] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault(); // 폼 제출 방지
    try {
      const response = await postLogin(user_id, user_pwd);

      if (response && response.user) {
        const { status, user } = response;
        Cookies.set("userId", user.id);
        console.log(user);

        if (status === 200) {
          navigate('/');
        }
      } else {
        console.error('userId가 응답에 포함되어 있지 않습니다.');
        setError('로그인 실패: 사용자 정보를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      setError('서버와의 통신 중 오류가 발생했습니다.');
    }
  };

  const registerLink = () => {
    navigate('/register');
  }

  return (
    <div>
      <Header />
      <form className="relative w-full h-screen bg-[#f6f4dd] overflow-hidden" onSubmit={handleLogin} >
        <div className='w-[750px] h-[550px] flex flex-col mx-auto pt-[50px] pl-[20px] mt-[10rem] bg-white rounded-[20px]'>
          <div className=" h-[95px] flex">
            <div className=" h-[65px] items-center flex text-[20px] font-['Poppins'] font-medium text-[#7c838a] whitespace-nowrap mr-[5rem]">Id</div>
            <div className=" left-0 top-[30px] w-[600px] h-[65px] flex">
              <input
                type="text"
                value={user_id}
                onChange={(e) => setUserId(e.target.value)}
                className=" left-0 top-0 w-[600px] h-[65px] bg-[#b0bac366] rounded-[20px] pl-[40px] text-[20px] font-['Poppins'] text-[#00000080]"
                placeholder="Enter your Id here"
              />
            </div>
          </div>
          <div className="h-[95px] flex">
            <div className=" h-[65px] items-center flex text-[20px] font-['Poppins'] font-medium text-[#7c838a] whitespace-nowrap mr-[1rem]">Password</div>
            <div className=" left-0 top-[30px] w-[600px] h-[65px] flex">
              <input
                type="password"
                value={user_pwd}
                onChange={(e) => setPassword(e.target.value)}
                className=" left-0 top-0 w-[600px] h-[65px] bg-[#b0bac366] rounded-[20px] pl-[40px] text-[20px] font-['Poppins'] text-[#00000080]"
                placeholder="Enter your Password here"
              />
            </div>
          </div>
          <div className="flex flex-row items-end justify-start gap-[10px] py-[12px] px-[24px]">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={mom}
                onChange={(e) => setIsParent(e.target.checked)}
                className="w-[24px] h-[24px] shrink-0 bg-[#fff] border-[1px] border-solid border-[#000] mr-[10px]"
              />
              <span className="text-[18px] font-['Poppins'] text-[#7c838a] whitespace-nowrap">Are you parent?</span>
            </label>

          </div>
          <button className='w-[600px] h-[80px] bg-[#f9ed32] ml-[3rem] mt-[20px] rounded-[10rem] font-bold text-[24px]' type='submit'>Login</button>
          <button className='w-[600px] h-[80px] bg-[#EFEFE3] text-[24px] mt-[20px] rounded-[10rem] ml-[3rem] font-bold' onClick={registerLink}>Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default Login;