import React from 'react'

export default function HeaderItem({name,Icon}) {
  return (
    <div className='text-white flex gap-2 mx-6 items-center 
    text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8 
    mb-2'>
      <Icon/>  
      <h2 className=''>{name}</h2>
    </div>
  )
}
