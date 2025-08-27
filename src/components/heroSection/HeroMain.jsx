import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'

export default function HeroMain() {
    return (
        <div className='pt-40 pb-16'>
            <div className='flex max-w-[1200px] mx-auto justify-between items-center relative px-4'>
                <HeroText />
                <HeroPic />
            </div>

        </div>
    )
}
