import React from 'react';
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-scroll";

export default function NavbarBtn() {
  return (
    <div>
      <Link
        to="contact" 
        smooth={true}
        spy={true}
        offset={-120}
        duration={500}
        className='text-white border border-cyan-500 gap-1 rounded-full flex px-4 py-2 items-center text-xl font-bold bg-gradient-to-r from-cyan-500 to-orange-300 hover:scale-110 transition-all duration-500 cursor-pointer'
      >
        Hire Me <LuArrowDownRight />
      </Link>
    </div>
  );
}
