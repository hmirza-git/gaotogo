import React, { useState } from 'react';

interface SneakPeakCardProps {
    bgImageUrl: string;
    title: string;
    description: string;
    cardWidth?: string;
    cardHeight?: string;
    overlayHeight?: string;
    additionalCardClasses?: string;
    additionalOverlayClasses?: string;
}

function SneakPeakCard({ bgImageUrl, title, description, cardWidth="w-[166px] lg:w-[387px]", cardHeight="h-[166px] lg:h-[387px]", overlayHeight="h-[387px]", additionalCardClasses="", additionalOverlayClasses="" }: SneakPeakCardProps) {
    const [isVisible, setIsVisible] = useState(0);
  return (
    <>
    <div  
        onMouseEnter={() => setIsVisible(1)} onMouseLeave={() => setIsVisible(0)}
        className={`bg-cover bg-center ${cardWidth} ${cardHeight} rounded-[40px] overflow-hidden relative cursor-pointer ${additionalCardClasses}`}
        style={{backgroundImage: `url(${bgImageUrl})`}}
        >
            <div className={`bg-gradient-to-t from-charcoal to-charcoal/0 ${overlayHeight} flex flex-col justify-end absolute bottom-0 transition-opacity duration-700  ${isVisible? "opacity-100" : "opacity-0"} ${additionalOverlayClasses}`}>
            <div className="hidden lg:block px-2 lg:px-10 py-2 lg:py-10 text-rice">
                <h4 className={`lg:mb-[10px] font-primary text-[16px] lg:text-[32px] tracking-wide leading-[1.3]`}>{title}</h4>
                <p className="font-secondary text-[18px] leading-[1.5]">{description}</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default SneakPeakCard