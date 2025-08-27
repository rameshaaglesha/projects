import React from 'react'

export default function FooterMain() {
    const links = [
        { link: "About Me", section: "about" },
        { link: "Skills", section: "skills" },
        { link: "Experience", section: "experience" },
        { link: "Projects", section: "projects" },
        { link: "Contact", section: "contact" },
    ];
    return (
        <div className='px-4'>
            <div className='w-full h-1px mt-24'></div>
            <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto'>
                <p className='text-3xl text-white'> Ramesh Kumar</p>
                <ul className='flex gap-4 text-gray-600 text-xl'>
                    {
                        links.map((item,index)=>{
                            return (
                            <li key={index}><a href="#" className='hover:text-yellow-200 text-white transition:all duration-500 cursor-pointer'>{item.link}</a></li>
                            )    
                        })
                    }
                </ul>
            </div>
            <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-white"> © 2024 Ramesh Kumar | All Rights Reserved.</p>
        </div>
    )
}
