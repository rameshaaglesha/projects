import React from 'react'

export default function ExperienceTopLeft() {
    return (
        <div className="flex flex-col gap-6 w-[300px]">
            <p className="text-orange-300 font-bold uppercase text-xl font-special text-center">
                💻 Front-End Developer (Personal Projects)
            </p>
            <ul className="text-white list-disc ml-4">
                <li className=" text-[12px] text-lightBrown">Built multiple responsive web applications using React.js and Tailwind CSS.</li>
                <li className=" text-[12px] text-lightBrown">Developed a weather app, task manager, and portfolio site focusing on clean UI and component-based architecture.</li>
                <li className=" text-[12px] text-lightBrown">Integrated APIs using fetch/Axios, managed state with useState/useEffect, and used React Router for navigation.</li>
            </ul>
        </div>
    )
}
