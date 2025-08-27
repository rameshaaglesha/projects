import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopMiddle from './ExperienceTopMiddle'
import ExperienceTopRight from './ExperienceTopRight'

export default function ExperienceTop() {
    return (
        <div className='flex justify-between items-center gap-4 mx-15'>
            <ExperienceTopLeft />
            <ExperienceTopMiddle />
            <ExperienceTopRight />
        </div>
    )
}
