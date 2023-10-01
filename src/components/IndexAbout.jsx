import React from 'react';
import boyImg from '../assets/images/images/boy-handing-phone.png';
import { Link } from 'react-router-dom';
import freeIcon from '../assets/images/icons/free-icon.svg';
import clockIcon from '../assets/images/icons/clock-circle-icon.svg';
import magicIcon from '../assets/images/icons/magic-icon.svg';

const IndexAbout = () => {
    return (
        <section className="bg-gray-white py-30">
            <div className="container">
                <div className="flex-center justify-center gap-6 mb-28">
                    {/* 1  */}
                    <div className="flex w-2/5 justify-center overflow-hidden rounded-b-full relative">
                        <img src={boyImg} className='z-2' alt="boy handing phone image" />
                        <div className="absolute z-1 w-full h-[600px] bottom-0 rounded-full bg-violet-pink"></div>
                    </div>
                    {/* 2 */}
                    <div className="space-y-9 w-1/2">
                        <h2 className="max-w-lg">
                            <span className="font-poppins-bold text-violet">PPmaker</span> xizmatlaridan qulay foydalaning!
                        </h2>
                        <p>Saytda profilingiz uchun rasm tayyorlang yoki qurilmangiz uchun sifatli bo’lgan hd+ formatdagi rasmlarni yuklab oling. Asosiysi barcha xizmatlar bepul. Hoziroq PPmaker xizmatlaridan foydalanishingiz mumkin!</p>
                        <Link to='/' className='violet-btn text-white max-w-max'>Boshlash
                            <svg className='ml-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='text-white' d="M14.2792 16.1847C14.1078 16.3429 13.8781 16.4305 13.6398 16.4285C13.4014 16.4265 13.1734 16.3352 13.0048 16.1741C12.8363 16.013 12.7407 15.7951 12.7386 15.5672C12.7365 15.3394 12.8282 15.1199 12.9938 14.9561L16.8965 11.226H0.9091C0.667992 11.226 0.436758 11.1345 0.266269 10.9715C0.0957798 10.8086 0 10.5876 0 10.3571C0 10.1267 0.0957798 9.90569 0.266269 9.74275C0.436758 9.5798 0.667992 9.48826 0.9091 9.48826H16.8965L12.9938 5.75819C12.8282 5.59432 12.7365 5.37484 12.7386 5.14703C12.7407 4.91921 12.8363 4.70129 13.0048 4.54019C13.1734 4.3791 13.4014 4.28772 13.6398 4.28574C13.8781 4.28376 14.1078 4.37134 14.2792 4.52961L19.7338 9.74284C19.9043 9.90578 20 10.1267 20 10.3571C20 10.5875 19.9043 10.8085 19.7338 10.9714L14.2792 16.1847Z" fill="currentColor" />
                            </svg>

                        </Link>
                    </div>
                </div>
                {/* list  */}
                <ul className="grid grid-cols-3 gap-6">
                <li className="bg-white rounded-lg p-5 shadow">
                        <div className="flex-center justify-between border-b pb-6">
                            <img width={72} height={72} src={freeIcon} alt="free icon image" />
                            <h3>Bepul</h3>
                        </div>
                        {/* line  */}
                        <div className="w-full h-0.5 bg-green-color"></div>
                        {/* description  */}
                        <p className="pt-6">
                            Siz bizning barcha xizmatlarimizdan 100% bepul foydalanishingiz mumkin. Biz sizdan pul olmaymiz.
                        </p>
                    </li>
                    <li className="bg-white rounded-lg p-5 shadow">
                        <div className="flex-center justify-between border-b pb-6">
                            <img width={72} height={72} src={clockIcon} alt="clock icon image" />
                            <h3>Tezkor</h3>
                        </div>
                        {/* line  */}
                        <div className="w-full h-0.5 bg-blue-color"></div>
                        {/* description  */}
                        <p className="pt-6">
                            Xizmatlarimizdan foydalanayotganingizda haqiqiy tezlikni his qilasiz.
                        </p>
                    </li>
                    <li className="bg-white rounded-lg p-5 shadow">
                        <div className="flex-center justify-between border-b pb-6">
                            <img width={72} height={72} src={magicIcon} alt="magic icon image" />
                            <h3>Sifatli</h3>
                        </div>
                        {/* line  */}
                        <div className="w-full h-0.5 bg-orange-color"></div>
                        {/* description  */}
                        <p className="pt-6">
                            Barcha rasmlar sifatli va sifatli tayyorlanadi. Siz uchun qulay bo'lishi uchun boshlang'ich rasmlar hajmi kichraytirilgan.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default IndexAbout