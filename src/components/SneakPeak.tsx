'use client'

import React, { useState } from 'react'
import { getImage } from 'astro:assets';
import SneakPeakCard from './SneakPeakCard';
import image1 from '../images/pho.jpg';
import image2 from '../images/banh-mi.jpg';
import image3 from '../images/dumplings.jpg';
import image4 from '../images/mix.jpg';
import image5 from '../images/noodles.jpg';

async function SneakPeak() {
    const image1Optimised = await getImage({ src: image1,width: 600 ,format: 'avif' });
    const image2Optimised = await getImage({ src: image2,width: 793 ,format: 'avif' });
    const image3Optimised = await getImage({ src: image3,width: 600 ,format: 'avif' });
    const image4Optimised = await getImage({ src: image4,width: 600 ,format: 'avif' });
    const image5Optimised = await getImage({ src: image5,width: 600 ,format: 'avif' });
  return (
<>
    <div className="flex flex-row lg:flex-col space-x-3 lg:space-x-0 lg:space-y-5 lg:min-w-300 text-rice relative overflow-x-scroll no-scrollbar">

        <img src="/icons/star.png" alt="star-icon" className='hidden lg:block absolute w-[52px] h-[52px] top-93 left-93 z-10'/>

    <div className="flex flex-row space-x-3 lg:space-x-5">

       <SneakPeakCard 
        bgImageUrl={image1Optimised.src} 
        title="Noodle salad with five spices grill chicken" 
        description="rice noodle, crunchy lettuce, pickle carrot and radish, herbs, five spices grill chicken, vietnamese sweet and sour fish sauce." 
        additionalCardClasses='flex-none'
       />
        <SneakPeakCard 
        bgImageUrl={image2Optimised.src}
        title="Vietnamese noodles with five spices grill chicken" 
        description="vietnamese noodles, crunchy lettuce, pickle carrot and radish, herbs, five spices grill chicken, vietnamese sweet and sour fish sauce."
        cardWidth='w-[166px] lg:w-full'
        overlayHeight='h-[300px]'
       />
       
    </div>

    <div className='flex flex-row space-x-3 lg:space-x-5'>
        <SneakPeakCard 
        bgImageUrl={image3Optimised.src}
        title="Dumplings with five spices grill chicken" 
        description="dumplings, crunchy lettuce, pickle carrot and radish, herbs, five spices grill chicken, vietnamese sweet and sour fish sauce." 
        additionalCardClasses=''
       />
       <SneakPeakCard 
        bgImageUrl={image4Optimised.src}
        title="Dumplings with five spices grill chicken" 
        description="dumplings, crunchy lettuce, pickle carrot and radish, herbs, five spices grill chicken, vietnamese sweet and sour fish sauce." 
       />
       <SneakPeakCard 
        bgImageUrl={image5Optimised.src}
        title="Dumplings with five spices grill chicken" 
        description="dumplings, crunchy lettuce, pickle carrot and radish, herbs, five spices grill chicken, vietnamese sweet and sour fish sauce." 
       />
    </div>

 </div>
</>
  )
}

export default SneakPeak;