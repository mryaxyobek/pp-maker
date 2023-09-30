import React from 'react';
const SearchModal = ({ setOpenSearchModal }) => {
    document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
            setOpenSearchModal(false)
        } else {
            console.log('donation window has not been closed');
        }
    });
    // form 
    const searchFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={`flex-center justify-center fixed min-h-screen min-w-full top-0 right-0 bottom-0 left-0 z-50`}>
            {/* filter */}
            <div onClick={() => setOpenSearchModal(false)} className="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 w-full h-full z-1"></div>
            <div className="flex flex-col w-175 h-96 bg-white rounded-lg gap-5 relative z-2">
                {/* cross button  */}
                <button onClick={() => setOpenSearchModal(false)} className="absolute donate-modal_cross-button p-1.5 rounded-sm">
                    <svg className='cross-icon text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28" fill="none">
                        <g clipPath="url(#clip0_199_227)">
                            <path className='cross-icon_g transition-colors-2' d="M18.4581 14L27.0615 5.44444C28.3128 4.2 28.3128 2.33333 27.0615 1.08889C26.5922 0.466666 25.8101 0 25.0279 0C24.2458 0 23.4637 0.311111 22.838 0.933333L14.0782 9.64444L5.47486 1.08889C4.22346 -0.155556 2.18994 -0.155556 1.09497 1.08889C0.469273 1.55556 0 2.33333 0 3.26667C0 4.2 0.312849 4.82222 0.938547 5.44444L9.5419 14L0.938547 22.5556C0.469274 23.1778 0 23.9556 0 24.8889C0 25.6667 0.312849 26.4444 0.938547 27.0667C1.56425 27.6889 2.34637 28 3.12849 28C3.91061 28 4.69274 27.6889 5.31844 27.0667L13.9218 18.5111L22.5251 27.0667C23.7765 28.3111 25.8101 28.3111 26.905 27.0667C28.1564 25.8222 28.1564 23.8 26.905 22.7111L18.4581 14Z" fill="currentColor" />
                        </g>
                    </svg>
                </button>
                {/* data  */}
                <form onSubmit={searchFormSubmit} className='flex w-full rounded-t-lg border-b'>
                    <input type="text" placeholder='Nimani qidiramiz?' className="grow p-4 rounded-tl-lg focus:outline-none" />
                    <button className="px-5 bg-violet rounded-tr-lg">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='text-white' d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                    </button>
                </form>
                {/* result  */}
                <div className="flex-center justify-center grow">Bu yerda natijalar chiqadi...</div>
            </div>
        </div>
    )
}

export default SearchModal