import React from 'react'
import { Link } from "react-scroll";

export default function AboutMeText() {
    const links = [
        { link: "Projects", section: "projects" },
    ];
    return (
        <div className='flex flex-col '>
            <h2 className='text-6xl text-cyan-400 mb-10'>About Me</h2>
            <p className='text-white'>Hi! I'm a passionate MERN-STACK Developer with a strong focus on building responsive, <br /> user-friendly web interfaces using React.js and Tailwind CSS. I enjoy turning creative ideas into functional, <br /> efficient, and elegant web experiences.
                Currently, I'm expanding my skill set by diving into the MERN stack <br /> (MongoDB, Express.js, React.js, and Node.js) to become a well-rounded Full-Stack Developer. <br /> I’m constantly learning, building, and looking for opportunities to grow in the world of modern web development.
            </p>
            <Link
                to="projects"
                offset={-190}
                spy={true}
                smooth={true}
                duration={500}
                className="bg-white w-[120px] border border-orange-400 rounded-full py-2 px-4 flex gap-2 items-center mt-10 hover:bg-orange-300 transition-all duration-500 cursor-pointer text-black text-center justify-center"
            >
                Projects
            </Link>
        </div>
    )
}
