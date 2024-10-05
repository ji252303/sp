import languageStudyImage from '../../images/언어학습.png';
import elementarySchoolImage from '../../images/대동초.png';
import mainImage from '../../images/오손도손.png';
import schoolInfoImage from '../../images/학사정보.png';
import { Link } from 'react-router-dom';

export default function HomeComponent() {
    return (
        <div>
            <div className="w-full h-[527px] flex bg-custom-gradient justify-center items-center">
                <div className="w-[463px] h-[203px] text-[120px] font-mango text-black text-center">오손도손</div>
                <img className="ml-[5rem]" width="504" height="454" src={mainImage} alt="Main" />
            </div>
            <div className="w-full h-[527px] flex bg-gradient-to-r from-white via-[#ffe1f5] to-[#f7f6ee]">
                <div className='flex px-[60px] mx-auto px-[50px]'>
                    <img className="py-[45px]" width="595" height="440" src={schoolInfoImage} alt="School information" />
                    <div className="flex flex-col w-[660px] items-start gap-8 bg-[#2c2f5d] ml-[5rem] pl-[90px] pt-[140px]">
                        <div className="text-[36px] font-mango capitalize text-white">학사 정보 및 교육 뉴스</div>
                        <div className="w-[429px] text-[18px] leading-6 font-mango capitalize text-white">게시판에서 학사 정보, 교육 뉴스, 문화, 중학교 진학 정보 등 다양한 뉴스레터를 확인해보세요!</div>
                        <Link to="/board" className=" left-[755px] top-[310px] flex flex-row items-center justify-start py-2 px-5 bg-[#3563e9] rounded-md">
                            <span className="text-[16px] font-mango text-white text-center whitespace-nowrap">게시판 바로가기</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full h-[584px] flex bg-gradient-to-r from-[#fcedd7] via-white to-[#fcecd8] mt-[60px]">
                <div className='mx-auto flex px-[50px]'>
                    <div className="w-[500px] flex flex-col items-start justify-start gap-8 pl-[137px] pt-[180px]">
                        <div className="self-stretch text-[36px] font-mango text-black capitalize">문화 학습하기</div>
                        <div className="text-[18px] leading-6 font-mango text-[#757575] capitalize">교육뉴스를 전달 받으세요</div>
                        <Link to="/board" className=" left-[137px] top-[349px] flex flex-row items-center justify-start py-2 px-5 bg-[#3563e9] rounded-md">
                            <span className="text-[16px] font-mango text-white text-center whitespace-nowrap">게시판 바로가기</span>
                        </Link>
                    </div>
                    <img className="ml-[11rem]" width="649" height="584" src={languageStudyImage} alt="Language study" />
                </div>
            </div>
            <div className="w-full h-[527px] flex mx-auto bg-custom-conic-gradient mt-[60px]">
                <div className='flex mx-auto'>
                    <img className="" width="658" height="527" src={elementarySchoolImage} alt="Elementary school" />
                    <div className="w-[659px] pl-[13rem] flex flex-col items-start justify-start gap-8 pt-[160px]">
                        <div className="self-stretch text-[36px] font-mango capitalize text-[#191818]">대동 초등학교 학사일정</div>
                        <div className="text-[18px] leading-6 font-mango capitalize text-[#1d1d1d]">학사정보를 확인하세요<br /></div>
                        <Link to="/board" className=" left-[757px] top-[281px] flex flex-row items-center justify-start py-2 px-5 bg-[#3563e9] rounded-md">
                            <span className="text-[16px] font-mango text-white text-center whitespace-nowrap">게시판 바로가기</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-full px-[60px] justify-center flex flex-col mt-[90px] ">
                <div className='bg-white flex flex-col h-[276px] text-center justify-center'>
                    <span className="text-[42px] font-mango text-black">join us on mobile!</span>
                    <span className="text-[32px] font-mango text-black">모바일 앱으로도 오손도손 서비스를 이용해보세요.</span>
                </div>
            </div>
        </div>
    )
}