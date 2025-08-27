import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'

export default function NavbarMain() {
    return (
        <nav className="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
            <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-gray-900 items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px] ">
                <NavbarLogo />
                <NavbarLinks />
                <NavbarBtn />
            </div>
        </nav>
    )
}
