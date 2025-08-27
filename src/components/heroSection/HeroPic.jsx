import React from 'react';
import { PiHexagonThin } from "react-icons/pi";

export default function HeroPic() {
    return (
        <>
            <div className='h-full flex items-center justify-center'>
                <img src="../../images/r.png" alt="slayer" className='max-h-[450px] w-auto' />
                <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
                    <PiHexagonThin className='min-h-[600px] w-auto text-cyan-300 blur-md '/>
                </div>
            </div>
        </>
    );
}

// animate-[spin_20s_linear_infinite]