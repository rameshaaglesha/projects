import React from 'react'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

export default function SingleProject({ name, year, align, image, link }) {
    return (
        <div className={`flex w-full flex-col-reverse items-center gap-8 ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"} justify-end sm:flex-col`}>
            <div>
                <h2 className='text-orange-400'>{name}</h2>
                <h2 className={`text-xl font-thin text-white font-special sm:text-center ${align === "left" ? "md:text-right" : "md:text-left"}`}>{year}</h2>
                <a className='text-lg flex gap-2 items-center text-cyan-400 hover:text-orange-400 transition-all duration-500 cursor-pointer' href={link}>View <BsFillArrowUpRightCircleFill /></a>
            </div>
            <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
                <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
                <img src={image} alt="" className="w-full h-full" />
            </div>
        </div>
    )
}
