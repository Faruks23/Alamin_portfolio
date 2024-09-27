import React from 'react'

function HeroBanner({title}) {
  return (
    <div
      className="hero  h-[250px] w-full "
      style={{
        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}>
      <div className="hero-overlay bg-opacity-60 h-full"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mt-5 text-3xl font-bold">{title}</h1>
          
         
        </div>
      </div>
    </div>
  )
}

export default HeroBanner