import React from 'react'

export default function AboutMeImage() {
  return (
    <div className="relative h-[500px] w-[300px] md:h-[400px] md:w-[250px] sm:h-[300px] sm:w-[200px] mx-auto">
      
      {/* Main Image */}
      <div className="absolute h-full w-full rounded-[100px] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="../../images/about-me.jpg"
          alt="About Me"
        />
      </div>

      {/* Decorative Background Shape */}
      <div className="bg-orange-300 h-[500px] w-[250px] md:h-[400px] md:w-[200px] sm:h-[300px] sm:w-[150px] absolute bottom-[-20px] left-[-20px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10" />
    </div>
  )
}
