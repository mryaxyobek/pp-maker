import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/images/ppmaker.png';
import bottomArrowIcon from '../assets/images/icons/bottom-arrow-icon.svg';
import sunIcon from '../assets/images/icons/sun-icon.svg';
import moonIcon from '../assets/images/icons/moon-icon.svg';
import walletIcon from '../assets/images/icons/wallet-icon.svg';
import DonateModal from './DonateModal';
import SearchModal from './SearchModal';

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
    // search button
    const [openSearchModal, setOpenSearchModal] = useState(false);
    const activeSearchModal = () => {
        setOpenSearchModal(true);
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
                                <NavLink onMouseMove={activeHoverLink} onMouseLeave={unActiveHoverLink} to='/' className='flex-center services-link hover:text-[var(--violet-7A08FA)!important]'>
                                    <span className='mr-1 hover-text-violet'>Xizmatlar</span>
                                    <svg className={`${hoverLink ? 'rotate-icon' : ''} transition-transform-2`} width="12" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M1.09998 1L5.49998 5L9.89998 1" className='bottom-icon' stroke='currentColor' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg>
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
                                <NavLink onMouseMove={activeHoverLink2} onMouseLeave={unActiveHoverLink2} to='/' className='flex-center bg-link'>
                                    <span className='mr-1 hover-text-violet'>Rasmlar</span>
                                    <svg className={`${hoverLink2 ? 'rotate-icon' : ''} transition-transform-2`} width="12" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M1.09998 1L5.49998 5L9.89998 1" className='bottom-icon' stroke='currentColor' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg>
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
                    <button onClick={toogleDarkMode}>
                        <img width={28} height={28} className={`${darkMode ? '' : 'hidden'}`} src={sunIcon} alt="sun icon" />
                        <img width={28} height={28} className={`${darkMode ? 'hidden' : ''}`} src={moonIcon} alt="moon icon" />
                    </button>
                    {/* search button  */}
                    <button onClick={activeSearchModal}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='text-violet' d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                    </button>
                    {/* donate button */}
                    <button onClick={activeDonateModal} className="p-2.5 rounded-lg bg-violet bg-opacity-10 hover:bg-opacity-20 transition-colors-2">
                        <img width={28} height={28} src={walletIcon} alt="wallet icon" />
                    </button>
                </div>
            </div>
            {
                openSearchModal &&
                <SearchModal setOpenSearchModal={setOpenSearchModal}/>
            }
            {
                openDonateModal &&
                <DonateModal setOpenDonateModal={setOpenDonateModal} />
            }
        </header>
    )
};

export default Header