import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postRegister from '../service/user/postRegister';


const Register = () => {
    const [school_name, setschoolName] = useState('');
    const [name, setName] = useState('');
    const [user_id, setUserId] = useState('');
    const [user_pwd, setPassword] = useState('');
    const [mom, setIsParent] = useState(false);
    const [phoneNum, setPhoneNum] = useState('');
    const [user_language, setLanguage] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        const formData = {
            name: name,
            phone: phoneNum,
            user_id: user_id,
            user_pwd: user_pwd,
            school_id: 1
        }
        try {
            console.log(formData)
            const response = await postRegister(formData);

            if (response && response.status === 200) {
                console.log('회원가입 성공:', response.data);
                navigate('/login'); // 회원가입 후 로그인 페이지 이동
            } else {
                console.error('회원가입 실패:', response);
                setError('회원가입 실패: 서버 오류');
            }
        } catch (error) {
            console.error('회원가입 중 오류 발생:', error);
            setError('서버와의 통신 중 오류가 발생했습니다.');
        }
    };


    return (
        <div className="relative w-[1440px] h-[1524px] bg-[#fff] overflow-hidden">
            <div className="absolute left-0 top-0 w-[1440px] h-[1610px] bg-[#f6f4dd]"></div>
            <div className="absolute right-[367px] top-[132px] w-[707px] h-[1260px] bg-[#fcfeff] rounded-[25px]"></div>
            <div className="absolute left-[607px] top-[1154px] flex flex-row items-end justify-start gap-[10px] py-[12px] px-[24px]">
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
            <div className="absolute left-[550px] top-[1257px] w-[340px] h-[60px] flex">
                <button
                    onClick={handleRegister}
                    className="absolute left-0 top-0 w-[340px] h-[60px] bg-[#f9ed32] rounded-[10px]"
                >
                    <div className="absolute left-[70px] top-[10px] w-[215px] text-[26px] font-['Poppins'] font-medium text-[#000]">Create Account</div>
                </button>
            </div>
            <div className="absolute left-[420px] top-[272px] w-[600px] h-[95px] flex">
                <div className="absolute left-[2px] top-0 text-[20px] font-['Poppins'] font-medium text-[#7c838a] whitespace-nowrap">Name</div>
                <div className="absolute left-0 top-[30px] w-[600px] h-[65px] flex">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="absolute left-0 top-0 w-[600px] h-[65px] bg-[#b0bac366] rounded-[20px] pl-[40px] text-[20px] font-['Poppins'] text-[#00000080]"
                        placeholder="Enter your Name here"
                    />
                </div>
            </div>
            <div className="absolute left-[420px] top-[419px] w-[600px] h-[95px] flex">
                <div className="absolute left-[2px] top-0 text-[20px] font-['Poppins'] font-medium text-[#7c838a] whitespace-nowrap">School Name</div>
                <div className="absolute left-0 top-[30px] w-[600px] h-[65px] flex">
                    <input
                        type="text"
                        value={school_name}
                        onChange={(e) => setschoolName(e.target.value)}
                        className="absolute left-0 top-0 w-[600px] h-[65px] bg-[#b0bac366] rounded-[20px] pl-[40px] text-[20px] font-['Poppins'] text-[#00000080]"
                        placeholder="Enter your School Name here"
                    />
                </div>
            </div>
            <div className="absolute left-[420px] top-[566px] w-[600px] h-[95px] flex">
                <div className="absolute left-[2px] top-0 text-[20px] font-['Poppins'] font-medium text-[#7c838a] whitespace-nowrap">Id</div>
                <div className="absolute left-0 top-[30px] w-[600px] h-[65px] flex">
                    <input
                        type="text"
                        value={user_id}
                        onChange={(e) => setUserId(e.target.value)}
                        className="absolute left-0 top-0 w-[600px] h-[65px] bg-[#b0bac366] rounded-[20px] pl-[40px] text-[20px] font-['Poppins'] text-[#00000080]"
                        placeholder="Enter your Id here"
                    />
                </div>
            </div>
            <div className="absolute left-[420px] top-[713px] w-[600px] h-[95px] flex">
                <div className="absolute left-[2px] top-0 text-[20px] font-['Poppins'] font-medium text-[#7c838a] whitespace-nowrap">Password</div>
                <div className="absolute left-0 top-[30px] w-[600px] h-[65px] flex">
                    <input
                        type="password"
                        value={user_pwd}
                        onChange={(e) => setPassword(e.target.value)}
                        className="absolute left-0 top-0 w-[600px] h-[65px] bg-[#b0bac366] rounded-[20px] pl-[40px] text-[20px] font-['Poppins'] text-[#00000080]"
                        placeholder="Enter your Password here"
                    />
                </div>
            </div>
            <div className="absolute left-[420px] top-[860px] w-[600px] h-[95px] flex">
                <div className="absolute left-[2px] top-0 text-[20px] font-['Poppins'] font-medium text-[#7c838a] whitespace-nowrap">Number</div>
                <div className="absolute left-0 top-[30px] w-[600px] h-[65px] flex">
                    <input
                        type="text"
                        value={phoneNum}
                        onChange={(e) => setPhoneNum(e.target.value)}
                        className="absolute left-0 top-0 w-[600px] h-[65px] bg-[#b0bac366] rounded-[20px] pl-[40px] text-[20px] font-['Poppins'] text-[#00000080]"
                        placeholder="Enter your Number here"
                    />
                </div>
            </div>
            <div className="absolute left-[420px] top-[1007px] w-[600px] h-[95px] flex">
                <div className="absolute left-[2px] top-0 text-[20px] font-['Poppins'] font-medium text-[#7c838a] whitespace-nowrap">Use language</div>
                <div className="absolute left-0 top-[30px] w-[600px] h-[65px] flex">
                    <input
                        type="text"
                        value={user_language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="absolute left-0 top-0 w-[600px] h-[65px] bg-[#b0bac366] rounded-[20px] pl-[40px] text-[20px] font-['Poppins'] text-[#00000080]"
                        placeholder="Enter your Language here"
                    />
                </div>
            </div>
            <div className="absolute left-[616px] top-[181px] text-[26px] font-['Poppins'] font-semibold text-[#000] whitespace-nowrap">Create Account</div>
            {error && <div className="absolute left-[420px] top-[1150px] text-red-500">{error}</div>}
            {success && <div className="absolute left-[420px] top-[1150px] text-green-500">회원가입이 성공적으로 완료되었습니다!</div>}
        </div>
    );
};

export default Register;
