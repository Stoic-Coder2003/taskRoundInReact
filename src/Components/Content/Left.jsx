import React from 'react';

function Left() {
    return (
        <div className='left flex flex-col items-start justify-center ml-12 w-fit'>
            <p className='md:text-5xl text-2xl font-bold text-[#21524F]'>Unlock <span className='text-[#88BDAC] italic font-medium'>Your</span> <br />career potential</p>
            <div className='mt-[10px] sm:mt-[15px] md:mt-[25px] mb-[2px] sm:mb-[5px] md:mb-[15px] flex items-center justify-center text-center text-white text-[6px] sm:text-[10px] md:text-base bg-[#21524F] rounded-full h-[25px] sm:h-[35px] md:h-[45px] w-[120px] sm:w-[180px] md:w-[220px] transition duration-300 hover:bg-white hover:text-[#21524F] hover:border-2 hover:border-[#4f776e]'>Create CV now</div>
            <div className="flex justify-between items-center mt-[30px] md:mt-[50px] gap-[5px] md:gap-[15px]">
                <div className="flex justify-center ml-[2px] md:ml-[5px]">
                    <img className="h-[5px] w-[5px] sm:h-[10px] sm:w-[10px] md:h-[20px] md:w-[20px] sm:mr-[2px] md:mr-1 mr-[1px]" src="Images/stars.png" alt="stars" />
                    <img className="h-[5px] w-[5px] sm:h-[10px] sm:w-[10px] md:h-[20px] md:w-[20px] sm:mr-[2px] md:mr-1 mr-[1px]" src="Images/stars.png" alt="stars" />
                    <img className="h-[5px] w-[5px] sm:h-[10px] sm:w-[10px] md:h-[20px] md:w-[20px] sm:mr-[2px] md:mr-1 mr-[1px]" src="Images/stars.png" alt="stars" />
                    <img className="h-[5px] w-[5px] sm:h-[10px] sm:w-[10px] md:h-[20px] md:w-[20px] sm:mr-[2px] md:mr-1 mr-[1px]" src="Images/stars.png" alt="stars" />
                    <img className="h-[5px] w-[5px] sm:h-[10px] sm:w-[10px] md:h-[20px] md:w-[20px]" src="Images/stars.png" alt="stars" />
                </div>
                <div className='flex justify-center items-center text-[4px] sm:text-[8px] md:text-xs text-[#21524F]'>TrustScore 4.8 | 347 reviews</div>
            </div>
        </div>
    );
}

export default Left;
