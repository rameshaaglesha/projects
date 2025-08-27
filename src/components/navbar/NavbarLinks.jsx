import React from 'react'
import { Link } from "react-scroll";
export default function NavbarLinks() {
    const links = [
        { link: "About Me", section: "about" },
        { link: "Skills", section: "skills" },
        { link: "Experience", section: "experience" },
        { link: "Projects", section: "projects" },
        { link: "Contact", section: "contact" },
    ];
    return (
        <ul className='font-bold text-white text-center flex py-4 gap-6 cursor-pointer'>
            {links.map((link, index) => {
                return (
                    <li key={index} className='group'>
                        <Link to={link.section} offset={-120} spy={true} smooth={true} duration={500}
                            className='text-white hover:text-cyan-400 transition-all duration-500'>{link.link}</Link>
                        <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                    </li>
                )
            })}
        </ul>
    )
}
