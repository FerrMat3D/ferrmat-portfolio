import React, { useState } from 'react'
import HollowText from './HollowText';

const HeaderLogo = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div
            className='relative inline-block cursor-pointer'
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
        >
            <div className='relative z-10'>
                {isHovered ? (
                    <HollowText text={<span dangerouslySetInnerHTML={{ __html: "Ferrmat <br /> Studio" }} />} color="black"  size="6xl" fadefade={true}/>
                ) : (
                    <span className='text-6xl font-bold uppercase'>
                      
                      <HollowText text={<span dangerouslySetInnerHTML={{ __html: "Ferrmat <br /> Studio" }} />} color="black"  size="6xl" fadefade={false}/>

                    </span>
                )}
            </div>
        </div>
    )
}

export default HeaderLogo