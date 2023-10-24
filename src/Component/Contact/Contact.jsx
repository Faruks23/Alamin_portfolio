import React from 'react';
import './Contact.css'
const Contact = () => {
  return (
    <div>
      <section className="background-radial-gradient mb-40 overflow-hidden mt-32">
        {/*  */}
        {/* <!-- Jumbotron --> */}
        <div className="px-6 py-12 text-center md:px-12 lg:py-24 lg:text-left">
          <div className="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0" style={{ zIndex: "10" }}>
                <h1 className="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)] capitalize font-serif">
                  The best offer <br />
                  <span className="text-[hsl(218,81%,75%)]">
                    for your business
                  </span>
                </h1>
                <p className="opacity-70 text-[hsl(218,81%,85%)]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus, expedita iusto veniam atque, magni tempora
                  mollitia dolorum consequatur nulla, neque debitis eos
                  reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
                </p>
              </div>
              <div className="relative mb-12 lg:mb-0">
                <div
                  id="radius-shape-1"
                  className="absolute rounded-full shadow-lg"
                ></div>
                <div id="radius-shape-2" className="absolute shadow-lg"></div>
                <div className="relative backdrop-blur-[25px] backdrop-saturate-[200%] block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[hsla(0,0%,15%,0.9)] shadow-black/20 md:px-12 text-white">
                  <form>
                    <div className="grid md:grid-cols-2 md:gap-6">
                      <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear"
                          id="exampleFormControlInput1"
                          placeholder="First name"
                        />
                      
                      </div>
                      <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear "
                          id="exampleFormControlInput2"
                          placeholder="Last name"
                        />
                       
                      </div>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="email"
                        className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear "
                        id="exampleFormControlInput3"
                        placeholder="Email address"
                      />
                    
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <textarea
                        className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear "
                        id="exampleFormControlInput4"
                        placeholder="Message"
                        name=""
                       
                        cols="20"
                        rows="6"
                      ></textarea>
                   
              
                    </div>

                    <button
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="mb-6 inline-block w-full rounded h-card px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Jumbotron --> */}
      </section>
      {/* <!-- Section: Design Block --> */}
    </div>
  );
};

export default Contact;