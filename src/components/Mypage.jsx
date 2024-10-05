import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Mypage = () => {
  const [school_name, setSchoolName] = useState('');
  const [user_pwd, setPassword] = useState('');
  const [new_pwd, setNewPassword] = useState('');
  const [school_language, setSchoolLanguage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // 사용자 정보를 백엔드에서 불러오기
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user');
        const { school_name, school_language } = response.data;
        setSchoolName(school_name);
        setSchoolLanguage(school_language);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const handleConfirm = async () => {
    try {
      const response = await axios.post('/api/mypage', {
        school_name,
        user_pwd,
        new_pwd,
        school_language,
      });

      if (response.status === 200) {
        // 변경 사항 저장 성공
        setSuccess(true);
        setError(null);
      } else {
        // 실패 처리
        setError('Failed to update the information.');
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error updating information:', error);
      setError('Server communication error occurred.');
      setSuccess(false);
    }
  };

  return (
    <div className="relative w-[1440px] h-[1024px] bg-[#fff] overflow-hidden">
      <div className="absolute left-0 top-0 w-[1440px] h-[1024px] bg-[#f4f6dd]"></div>
      <div className="absolute right-[253px] top-[106px] w-[934px] h-[813px] bg-[#fcfeff] border-[3px] border-solid border-[#b5bbf3]"></div>
      <div className="absolute left-[420px] top-[232px] w-[600px] h-[457px] flex flex-col gap-6">
        <div>
          <div className="text-[20px] font-['Poppins'] font-medium text-[#7c838a]">School Name</div>
          <input
            type="text"
            value={school_name}
            onChange={(e) => setSchoolName(e.target.value)}
            className="w-full h-[65px] bg-[#b0bac366] rounded-[20px] pl-[40px] text-[20px] font-['Poppins'] text-[#00000080]"
            placeholder="Change Your School Name"
          />
        </div>
        <div>
          <div className="text-[20px] font-['Poppins'] font-medium text-[#7c838a]">Password</div>
          <input
            type="password"
            value={user_pwd}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[65px] bg-[#b0bac366] rounded-[20px] pl-[40px] text-[20px] font-['Poppins'] text-[#00000080]"
            placeholder="Enter your password here"
          />
        </div>
        <div>
          <div className="text-[20px] font-['Poppins'] font-medium text-[#7c838a]">New Password</div>
          <input
            type="password"
            value={new_pwd}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full h-[65px] bg-[#b0bac366] rounded-[20px] pl-[40px] text-[20px] font-['Poppins'] text-[#00000080]"
            placeholder="Enter your new password here"
          />
        </div>
        <div>
          <div className="text-[20px] font-['Poppins'] font-medium text-[#7c838a]">School Language</div>
          <input
            type="text"
            value={school_language}
            onChange={(e) => setSchoolLanguage(e.target.value)}
            className="w-full h-[65px] bg-[#b0bac366] rounded-[20px] pl-[40px] text-[20px] font-['Poppins'] text-[#00000080]"
            placeholder="Enter your school language here"
          />
        </div>
      </div>
      <div className="absolute left-[657px] top-[156px] text-[26px] font-['Poppins'] font-semibold text-[#000]">My page</div>
      <div className="absolute left-[547px] top-[779px] w-[340px] h-[60px]">
        <button onClick={handleConfirm} className="w-full h-full bg-[#f9ed32] rounded-[10px] text-[26px] font-['Poppins'] font-medium text-[#000]">
          Confirm
        </button>
      </div>
      {error && <div className="absolute left-[547px] top-[849px] text-red-500">{error}</div>}
      {success && <div className="absolute left-[547px] top-[849px] text-green-500">Information updated successfully!</div>}
    </div>
  );
}

export default Mypage;