import React from 'react'

export default function HeroText() {
  return (
    <div className="flex flex-col gap-4 h-full justify-center">
      <h2 className="uppercase text-cyan-300 text-[18px]">
         Mern-Stack Developer      
      </h2>
      <h1  className=" text-orange-300 font-bold uppercase text-4xl">
        Ramesh Kumar
      </h1>
      <p className="mt-4 text-white">
        Aspiring full-stack developer exploring the MERN stack <br />to build dynamic and efficient web applications
      </p>
    </div>
  )
}
