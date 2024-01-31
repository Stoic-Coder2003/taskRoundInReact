import React from 'react'

function Right() {
    return (
        <div className="flex justify-end mr-12 w-fit">
        <div className="bg-cover bg-center bg-no-repeat md:h-96 md:w-96 sm:h-48 sm:w-48 h-28 w-28 md:rounded-[15px] sm:rounded-lg rounded-md text-white flex-shrink-0 md:m-[10px] sm:m-[7px] m-[5px] cursor-pointer" style={{ backgroundImage: "url('Images/people/man1.webp')" }}></div>
        <div className="bg-cover bg-center bg-no-repeat md:h-96 md:w-24 sm:h-48 sm:w-12 h-28 w-10 md:rounded-[15px] sm:rounded-lg rounded-md text-white flex-shrink-0 md:m-[10px] sm:m-[7px] m-[5px] cursor-pointer" style={{ backgroundImage: "url('Images/people/woman1.jpeg')" }}></div>
        <div className="bg-cover bg-center bg-no-repeat md:h-96 md:w-24 sm:h-48 sm:w-12 h-28 w-10 md:rounded-[15px] sm:rounded-lg rounded-md text-white flex-shrink-0 md:m-[10px] sm:m-[7px] m-[5px] cursor-pointer" style={{ backgroundImage: "url('Images/people/man2.jpeg')" }}></div>
    </div>
    )
}

export default Right
