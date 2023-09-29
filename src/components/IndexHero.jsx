import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import rightArrowIcon from '../assets/images/icons/right-arrow-icon.svg';
import girlImg from '../assets/images/images/girl-image.png';
import boyImg from '../assets/images/images/boy-image.png';

const IndexHero = () => {
    const [imgShow, setImgShow] = useState(true);

    let num = 1;
    let girl = false;
    let boy = false;
    let pubg = false;

    setInterval(() => {
        if (num === 1) {
            girl = true;
            setTimeout(() => {
                girl = false;
                num++
            }, 8000)
        }
        else if (num === 2) {
            boy = true;
            setTimeout(() => {
                boy = true;
                num = 1;
            }, 8000)
        }
        console.log(num);
    }, 8000);

    return (
        <div className=''>
            <div className="container relative py-[160px!important]">
                <div className="flex flex-col items-start max-w-lg space-y-9">
                    <h1 className="">Qizlar uchun rasm tayyorlash</h1>
                    <p className="">Profilingiz uchun tezkor va sifatli rasm tayyorlang. Hoziroq sinab ko'ring!</p>
                    <Link href="#services-menu" className='violet-btn text-white font-poppins-regular font-normal leading-6'>
                        Boshlash
                        <img width={20} height={20} src={rightArrowIcon} alt="right arrow icon" className="ml-2" />
                    </Link>
                </div>
                {/* right  */}
                <div className={`${pubg ? 'bg-blue-color' : 'bg-pink-color'} transition-bg-05 py-14 pl-14 absolute top-0 h-full w-50vw rounded-l-full left-1/2`}>
                    <div className="w-full h-full rounded-l-full border-t-2 border-dashed border-b-2 p-14">
                        <div className='flex justify-center items-end border-2 border-white h-full w-102 rounded-full hero-circle-shape overflow-hidden'>
                            <img width={240} height={348} src={girlImg} alt="" className={`${girl ? 'hidden' : ''} h-[348px] hero-img-animation`} />
                            <img width={240} height={348} src={boyImg} alt="" className={`${boy ? 'hidden' : ''} h-[348px] hero-img-animation`} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default IndexHero