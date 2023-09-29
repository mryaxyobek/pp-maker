import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/images/ppmaker.png';
import bottomArrowIcon from '../assets/images/icons/bottom-arrow-icon.svg';
import sunIcon from '../assets/images/icons/sun-icon.svg';
import moonIcon from '../assets/images/icons/moon-icon.svg';
import walletIcon from '../assets/images/icons/wallet-icon.svg';
import DonateModal from './DonateModal';

const Header = () => {
    // hover link 
    const [hoverLink, setHoverLink] = useState(false);
    const [hoverLink2, setHoverLink2] = useState(false);
    const activeHoverLink = (e) => {
        setHoverLink(true);
    };
    const unActiveHoverLink = () => {
        setHoverLink(false);
    };
    const activeHoverLink2 = (e) => {
        setHoverLink2(true);
    };
    const unActiveHoverLink2 = () => {
        setHoverLink2(false);
    };
    // dark mode button 
    const [darkMode, setDarkMode] = useState(false);
    const toogleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    darkMode ? document.documentElement.classList.add('dark') : document.body.classList.remove('dark');
    // donate button
    const [openDonateModal, setOpenDonateModal] = useState(false);
    const activeDonateModal = () => {
        setOpenDonateModal(true);
    };
    return (
        <header className="header py-8 sticky w-full top-0 right-0 left- shadow z-2 bg-white bg-opacity-70 backdrop-blur-sm">
            <div className="flex container items-center justify-between">
                {/* logo  */}
                <Link to='/'>
                    <img width={170} height={44} src={Logo} alt="profile picture maker logo" />
                </Link>
                {/* navbar wrapper  */}
                <div className="flex-center space-x-6">
                    <nav>
                        <ul className="flex items-center space-x-7">
                            <li>
                                <NavLink to='/' className='hover-text-violet'>Bosh sahifa</NavLink>
                            </li>
                            <li className='relative'>
                                <NavLink to='/' className='flex-center'>
                                    <span onMouseMove={activeHoverLink} onMouseLeave={unActiveHoverLink} className='mr-1 hover-text-violet'>Xizmatlar</span>
                                    <img width={11} height={6} src={bottomArrowIcon} className={`${hoverLink ? 'rotate-icon' : ''} transition-transform-2`} alt="bottom arrow icon" />
                                </NavLink>
                                {/* list  */}
                                <ul onMouseMove={activeHoverLink} onMouseLeave={unActiveHoverLink} className={`${hoverLink ? '' : 'hidden'} shadow absolute top-full bg-white rounded-lg min-w-max p-4 space-y-3`}>
                                    <li>
                                        <Link to='/' className='small-link'>Bollar uchun</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='small-link'>Qizlar uchun</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='small-link'>PUBG mobile</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='small-link'>Sayt uchun favicon</Link>
                                    </li>

                                </ul>
                            </li>
                            <li className='relative'>
                                <NavLink to='/' className='flex-center'>
                                    <span onMouseMove={activeHoverLink2} onMouseLeave={unActiveHoverLink2} className='mr-1 hover-text-violet'>Rasmlar</span>
                                    <img width={11} height={6} src={bottomArrowIcon} className={`${hoverLink2 ? 'rotate-icon' : ''} transition-transform-2`} alt="bottom arrow icon" />
                                </NavLink>
                                {/* list  2*/}
                                <ul onMouseMove={activeHoverLink2} onMouseLeave={unActiveHoverLink2} className={`${hoverLink2 ? '' : 'hidden'} shadow absolute top-full bg-white rounded-lg min-w-max p-4 space-y-3`}>
                                    <li>
                                        <Link to='/' className='small-link'>Oq & qora rasmlar</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='small-link'>1x1 rasmlar</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='small-link'>Telefonlar uchun fonlar</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='small-link'>Kompyuterlar uchun fonlar</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='small-link'>Animatsion fonlar</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to='/' className='hover-text-violet'>Qo'llanma</NavLink>
                            </li>
                            <li>
                                <NavLink to='/' className='hover-text-violet'>Yordam</NavLink>
                            </li>
                        </ul>
                    </nav>
                    {/* dark mode button  */}
                    <button onClick={toogleDarkMode} className="p-2.5 voice-play">
                        <img width={28} height={28} className={`${darkMode ? '' : 'hidden'}`} src={sunIcon} alt="sun icon" />
                        <img width={28} height={28} className={`${darkMode ? 'hidden' : ''}`} src={moonIcon} alt="moon icon" />
                    </button>
                    {/* donate button */}
                    <button onClick={activeDonateModal} className="p-2.5 rounded-lg bg-violet bg-opacity-10 hover:bg-opacity-20 transition-colors-2">
                        <img width={28} height={28} src={walletIcon} alt="wallet icon" />
                    </button>
                </div>
            </div>
            {
                openDonateModal &&
                <DonateModal setOpenDonateModal={setOpenDonateModal} />
            }
        </header>
    )
};

export default Header