import { useEffect, useState } from "react";
import { faqData } from "../../data/Faq";
import SectionTitle from "../../shared/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css"; 
const Faq = () => {
  const [active, setActive] = useState(0);

  const toggleAccordion = (index) => {
    setActive(active === index ? null : index);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" container mx-auto mt-[170px]">
      <SectionTitle
        firstTitle={"Frequently Ask"}
        SecondTitle={"question"}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {faqData.map((item, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="2400"
            key={index}
            className=" rounded-lg overflow-hidden bg-slate-900 shadow-2xl"
          >
            <div
              className={`flex items-center justify-between p-4 cursor-pointer text-slate-200 transition-colors duration-300 ${
                active === index ? " bg-slate-800 text-white " : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-md font-semibold">{item.question}</span>
              <span className="transform transition-transform">
                {active === index ? (
                  <span className=" text-2xl">+</span>
                ) : (
                  <span className="text-2xl">-</span>
                )}
              </span>
            </div>
            <div
              className={`px-4  bg-slate-700 text-white transition-max-height duration-300 ease-in-out overflow-hidden  ${
                active === index ? "max-h-96 py-5" : "h-0"
              }`}
            >
              <p className=" capitalize font-serif leading-7  font-[50]">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
