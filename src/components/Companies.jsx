// import React from 'react'
import allbirds from '../assets/allbirds.png'
import alo from '../assets/alo.png'
import glossier from '../assets/glossier.png'
import KOTN from '../assets/KOTN.png'
import parachute from '../assets/parachute.png'
import gorjana from '../assets/gorjana.png'


function Companies() {
  return (
    <>
      <div className="bg-[#F3F3EC] w-full h-[1280px] pt-[50px]">
        
        <div className="border-y-2 border-gray-500-500 pt-10 pb-10 flex items-center justify-center gap-10">
            <img src={allbirds} alt="" className='w-[150px]'/>
            <img src={KOTN} alt="" className='w-[150px]'/>
            <img src={parachute} alt="" className='w-[150px]'/>
            <img src={alo} alt="" className='w-[100px]'/>
            <img src={glossier} alt="" className='w-[150px]'/>
            <img src={gorjana} alt="" className='w-[200px]'/>
        </div>

      </div>
    </>
  );
}

export default Companies;
