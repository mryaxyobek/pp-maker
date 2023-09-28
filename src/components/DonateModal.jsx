import React, { useState } from 'react';
import anorbankLogo from '../assets/images/icons/anorbank-logo.svg';
import mastercardLogo from '../assets/images/icons/mastercard-logo.svg';
import humocardLogo from '../assets/images/images/humo-logo.png';
const DonateModal = ({ setOpenDonateModal }) => {
    const [hoverCopyButton, setHoverCopyButton] = useState(false);
    const [hoverCopyButton2, setHoverCopyButton2] = useState(false);

    const masterCardNumber = '5477 3300 2081 6363';
    const humoCardNumber = '9860 6067 4078 3851';

    const activeHoverCopyButton = (e) => {
        setHoverCopyButton(true);
        navigator.clipboard.writeText(masterCardNumber);
        setTimeout(() => {
            setHoverCopyButton(false);
        }, 2000)
    }
    const activeHoverCopyButton2 = (e) => {
        setHoverCopyButton2(true);
        navigator.clipboard.writeText(humoCardNumber);
        setTimeout(() => {
            setHoverCopyButton2(false);
        }, 2000)
    }
    document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
            setOpenDonateModal(false)
        } else {
            console.log('donation window has not been closed');
        }
    })
    return (
        <div className={`flex-center justify-center fixed min-h-screen min-w-full top-0 right-0 bottom-0 left-0`}>
            {/* filter */}
            <div onClick={() => setOpenDonateModal(false)} className="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 w-full h-full z-1"></div>
            <div className="grid grid-cols-2 gap-5 relative z-2">
                {/* cross button  */}
                <button onClick={() => setOpenDonateModal(false)} className="absolute donate-modal_cross-button p-1.5 rounded-sm">
                    <svg className='cross-icon text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28" fill="none">
                        <g clipPath="url(#clip0_199_227)">
                            <path className='cross-icon_g transition-colors-2' d="M18.4581 14L27.0615 5.44444C28.3128 4.2 28.3128 2.33333 27.0615 1.08889C26.5922 0.466666 25.8101 0 25.0279 0C24.2458 0 23.4637 0.311111 22.838 0.933333L14.0782 9.64444L5.47486 1.08889C4.22346 -0.155556 2.18994 -0.155556 1.09497 1.08889C0.469273 1.55556 0 2.33333 0 3.26667C0 4.2 0.312849 4.82222 0.938547 5.44444L9.5419 14L0.938547 22.5556C0.469274 23.1778 0 23.9556 0 24.8889C0 25.6667 0.312849 26.4444 0.938547 27.0667C1.56425 27.6889 2.34637 28 3.12849 28C3.91061 28 4.69274 27.6889 5.31844 27.0667L13.9218 18.5111L22.5251 27.0667C23.7765 28.3111 25.8101 28.3111 26.905 27.0667C28.1564 25.8222 28.1564 23.8 26.905 22.7111L18.4581 14Z" fill="currentColor" />
                        </g>
                    </svg>
                </button>
                {/* mastercard  */}
                <div className="flex flex-col w-110 h-65 bg-white violet-gradient rounded-lg p-8">
                    <img className='mb-auto' src={anorbankLogo} width={194} height={28} alt="anorbank logo" />
                    {/* card number */}
                    <div className="flex-center justify-between w-full mb-5">
                        <h3 className='text-white font-poppins-medium font-medium'>{masterCardNumber}</h3>
                        <button disabled={hoverCopyButton} onClick={activeHoverCopyButton} className="cursor-pointer">
                            {
                                hoverCopyButton ?
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.0998 2H12.8998C9.81668 2 8.37074 3.09409 8.06951 5.73901C8.00649 6.29235 8.46476 6.75 9.02167 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V14.9781C17.2498 15.535 17.7074 15.9933 18.2608 15.9303C20.9057 15.629 21.9998 14.1831 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z" fill="#fff" />
                                        <path d="M11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1V12.9C16 9.4 14.6 8 11.1 8ZM12.29 13.65L8.58 17.36C8.44 17.5 8.26 17.57 8.07 17.57C7.88 17.57 7.7 17.5 7.56 17.36L5.7 15.5C5.42 15.22 5.42 14.77 5.7 14.49C5.98 14.21 6.43 14.21 6.71 14.49L8.06 15.84L11.27 12.63C11.55 12.35 12 12.35 12.28 12.63C12.56 12.91 12.57 13.37 12.29 13.65Z" fill="#fff" />
                                    </svg>
                                    :
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" fill="#fff" />
                                        <path d="M17.0998 2H12.8998C9.81668 2 8.37074 3.09409 8.06951 5.73901C8.00649 6.29235 8.46476 6.75 9.02167 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V14.9781C17.2498 15.535 17.7074 15.9933 18.2608 15.9303C20.9057 15.629 21.9998 14.1831 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z" fill="#fff" />
                                    </svg>
                            }
                        </button>
                    </div>
                    {/* name and logo  */}
                    <div className="flex-center justify-between w-full">
                        <div className='flex items-end'>
                            <p className="mr-4 font-poppins-semibold text-white">Axmadjonova X</p>
                            <p className="font-poppins-medium text-white">12/24</p>
                        </div>
                        <img width={52} height={52} src={mastercardLogo} alt="mastercard logo" />
                    </div>
                </div>
                {/* humocard  */}
                <div className="flex flex-col w-110 h-65 bg-white violet-gradient rounded-lg p-8">
                    <img className='mb-auto' src={anorbankLogo} width={194} height={28} alt="anorbank logo" />
                    {/* card number */}
                    <div className="flex-center justify-between w-full mb-5">
                        <h3 className='text-white font-poppins-medium font-medium'>{humoCardNumber}</h3>
                        <button disabled={hoverCopyButton2} onClick={activeHoverCopyButton2} className="cursor-pointer">
                            {
                                hoverCopyButton2 ?
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.0998 2H12.8998C9.81668 2 8.37074 3.09409 8.06951 5.73901C8.00649 6.29235 8.46476 6.75 9.02167 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V14.9781C17.2498 15.535 17.7074 15.9933 18.2608 15.9303C20.9057 15.629 21.9998 14.1831 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z" fill="#fff" />
                                        <path d="M11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1V12.9C16 9.4 14.6 8 11.1 8ZM12.29 13.65L8.58 17.36C8.44 17.5 8.26 17.57 8.07 17.57C7.88 17.57 7.7 17.5 7.56 17.36L5.7 15.5C5.42 15.22 5.42 14.77 5.7 14.49C5.98 14.21 6.43 14.21 6.71 14.49L8.06 15.84L11.27 12.63C11.55 12.35 12 12.35 12.28 12.63C12.56 12.91 12.57 13.37 12.29 13.65Z" fill="#fff" />
                                    </svg>
                                    :
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" fill="#fff" />
                                        <path d="M17.0998 2H12.8998C9.81668 2 8.37074 3.09409 8.06951 5.73901C8.00649 6.29235 8.46476 6.75 9.02167 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V14.9781C17.2498 15.535 17.7074 15.9933 18.2608 15.9303C20.9057 15.629 21.9998 14.1831 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z" fill="#fff" />
                                    </svg>
                            }
                        </button>
                    </div>
                    {/* name and logo  */}
                    <div className="flex-center justify-between w-full">
                        <div className='flex items-end'>
                            <p className="mr-4 font-poppins-semibold text-white">Axmadjonova X</p>
                            <p className="font-poppins-medium text-white">12/24</p>
                        </div>
                        <img width={52} height={52} src={humocardLogo} alt="humocard logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonateModal