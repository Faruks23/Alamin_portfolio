
import React from "react";
import SectionTitle from "../../shared/SectionTitle";
const MyLocation = () => {
 

  return (
    <div className=" container mx-auto mt-10">
     
      <SectionTitle firstTitle={'Our'} SecondTitle={'Location'}></SectionTitle>
      <div className=" p-5 container mx-auto  bg-gray-950 border  mt-10 border-teal-500">
        <div classNameName="container mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.2710346087038!2d92.03883597512196!3d22.977058818025476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752c342ac6d4f9f%3A0x81b187d8ad1775b1!2sKayangghat%20Natun%20Bazar%20private%20primary%20School!5e0!3m2!1sbn!2sbd!4v1698129812196!5m2!1sbn!2sbd"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MyLocation;