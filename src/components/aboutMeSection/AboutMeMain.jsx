import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'

export default function AboutMeMain() {
  return (
    <div id='about' className='flex px-4 gap-12  max-w-[1200px] mx-auto mt-[100px] justify-between items-center'>
      <div>
      <AboutMeText/>
      </div>
      <div>
      <AboutMeImage/>
      </div>
    </div>
  )
}
