 import React from 'react'
import HeroBanner from '../../../shared/HeroBanner/HeroBanner'
import useProject from '../../../hooks/useProject';
 
function Portfolio() {
    const { project } = useProject();
   return (
     <div className=' '>
       <HeroBanner title={'PortFolio'}></HeroBanner>
        
       <div className="portfolio my-10 container mx-auto ">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 xl:gap-6 justify-items-center">
           {
             project.map((item, index) => {
              return (
                <div key={index} className="card w-96 bg-base-100 shadow-xl  max-h-[400px]">
                  <figure><img src={item.image} alt={item.name}  /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>

                
              )
             })
            }
           
         </div>
         
       </div>

     </div>
   )
 }
 
 export default Portfolio