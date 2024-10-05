import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../images/구름.png';
import sproutImage from '../images/새싹.png';
import Cookies from "js-cookie"

export default function Header() {
    const navigate = useNavigate();
    const userId = Cookies.get("userId");

    const handleLoginClick = () => {
        navigate('/Login');
    }

    const DualClick = () => {
        navigate('/Dual');
    }

    const MypageClick = () => {
        navigate('/mypage');
    }

    const BoardClick = () => {
        navigate('/Board');
    }

    const LogoutClick = () => {
        Cookies.remove('userId', 1000)
        navigate('/Login');
    }
    console.log(userId)

    return (
        <div className='w-full flex flex-col items-center bg-white'>
            <div className="w-full h-[61px] flex">
                <div className="w-full h-[61px] bg-[#1e203f] flex items-center">
                    <div className="w-[474px] h-[18px] text-[16px] text-white flex mx-auto justify-center">
                        <span className="font-mango flex ">챗봇을 이용해 교육 뉴스 및 학사 일정을 확인해보세요</span><span className="font-['Mango_Ddobak']">!</span>
                    </div>
                </div>
            </div>
            <div className='w-full flex px-[2rem]'>
                <Link className="w-[139px] h-[90px] flex items-end" to='/'>
                    <img className="flex" width="139" height="90" src={logoImage} alt="Logo" />
                    <span className='absolute top-[105px] left-[46px] font-mango text-[25px]'>오손도손</span>
                    <img className="flex items-end ml-[1rem]" width="56" height="48" src={sproutImage} alt="Sprout" />
                </Link>
                <div className="flex w-full items-center">
                    <div className='ml-auto flex gap-8'>
                        <div className='flex items-center'>
                            <button className="relative w-[67px] h-[18px] shrink-0 flex">
                                <span className="text-[14px] font-mango text-[#424242]" onClick={BoardClick}>게시판</span>
                            </button>
                            <button className="relative w-[58px] h-[18px] shrink-0">
                                <span className="text-[14px] font-mango text-[#424242] text-center flex items-center" onClick={DualClick}>국적취득</span>
                            </button>
                        </div>
                        {userId ? (
                            <div className='flex items-center'>
                                <button className="relative w-[58px] h-[18px] shrink-0 flex">
                                    <span className="text-[14px] font-mango text-[#424242] whitespace-nowrap" onClick={MypageClick}>마이페이지</span>
                                </button>
                                <button className="flex py-2 px-5 bg-[#3563e9] rounded-md ml-[2rem] items-center">
                                    <span className="text-[16px] font-mango text-white text-center items-center flex" onClick={LogoutClick}>Log Out</span>
                                </button>
                            </div>
                        ) : (
                            <button className="flex py-2 px-5 bg-[#3563e9] rounded-md flex items-center">
                                <span className="text-[16px] font-mango text-white text-center" onClick={handleLoginClick}>Log In</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}