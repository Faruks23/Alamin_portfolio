import React from 'react';

const SectionTitle = ({ SecondTitle, firstTitle ,className}) => {
  return (
    <>
      <h1
        className={`text-[30px] border-b border-teal-300  px-4  md:text-[50px] font-serif font-[700] italic ${className}`}
      >
        <span  className='text-white'> {firstTitle}</span>{" "}
        <span className=" text-teal-500">{SecondTitle}</span>
      </h1>
    </>
  );
};

export default SectionTitle;