import React from 'react'

export default function SingleSkill({ imgSvg, text }) {
  return (
    <div  className="hover:-translate-y-10 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div className=' h-[100px] w-[100px] flex items-center justify-center bg-white text-cyan-500 rounded-full hover:text-gray-300 hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange'>{imgSvg}</div>
        <p className="text-black font-bold">{text}</p>
      </div>
       <div className="w-[100px] h-[200px] bg-orange-300 absolute top-[50px] -z-10"></div>
    </div>
  )
}
