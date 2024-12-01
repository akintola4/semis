import Footer from "./Footer"
import Nav from "./Nav"
import Hero from './Hero'
import Sub from "./Sub";

import MovingDiv from "./MovingDiv";

//for the core component card type
import ValueCard from "./ValueCard.jsx";
import workdata from "./work";

//for the services us card type
import ServiceCard from "./ServiceCard.jsx";
import servicesData from "./services";

//for the services us card type
import PlanCard from "./PlanCard.jsx";
import plansData from "./plans.js";


// //for the questions us card type
import FqaCard from "./Fqa.jsx";
import fqaData from "./fqa.js";


//for aos
import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
function Home() {
    useEffect(() => {
        AOS.init();
    }, [])

    const fqaCard = fqaData.map(fqa => (
        <FqaCard
            key={fqa.id}
            fqa={fqa}
        />
    ));
    const service = servicesData.map(service => (
        <ServiceCard
            key={service.id}
            service={service}
        />
    ));
    const values = workdata.map(info => (
        <ValueCard
            key={info.id}
            info={info}
        />
    ));
    const plans = plansData.map(plans => (
        <PlanCard
            key={plans.id}
            plans={plans}
        />
    ));
    

    const brandLogos = [
        "brand-logo-1.svg",
        "brand-logo-2.svg",
        "brand-logo-3.svg",
        "brand-logo-4.svg",
        "brand-logo-5.svg",
        "brand-logo-6.svg",
    ];
    const [ProductType, setProductType] = useState('private');
    return (
        <div className="scroll-smooth flex flex-col gap-10">
            <Nav />
            <Hero />
            <section id="brand" name="brand" className="flex flex-col gap-6" >
                <div className="flex flex-col text-center gap-2">
                    <p className="  text-primaryColor dark:text-white text-center text-md  p-2">Our partners</p>
                    <p className=" text-gray-950 text-sm md:text-lg  text-center block md:hidden font-light  dark:text-gray-300 ">Trusted by 200k+ companies nationwide</p>
                    
                    {/* <p className=" text-gray-400 mx-auto dark:text-gray-300">Our values are the foundation of everything we do</p> */}
                </div>
                <section
                        id='brand-logos'
                        className='brand-logos hidden
      md:grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6
      justify-center items-center 
      gap-8 sm:gap-10 md:gap-12 px-5
      p-4 md:px-10 lg:px-20'
                    >
                        {brandLogos.map((logo, index) => (
                            <img
                                key={index}
                                src={`img/${logo}`}
                                className='
          w-full 
          max-w-[100px] 
          sm:max-w-[120px] 
          md:max-w-none 
          scale-125 sm:scale-100 
          xl:w-auto
          dark:invert'
                                alt={`brand-logo-${index + 1}`}
                            />
                        ))}
                    </section>
                <MovingDiv >
                    <section
                        id='brand-logos'
                        className='brand-logos md:hidden
      grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6
      justify-center items-center 
      gap-8 sm:gap-10 md:gap-12 px-5
      p-4 md:px-10 lg:px-20'
                    >
                        {brandLogos.map((logo, index) => (
                            <img
                                key={index}
                                src={`img/${logo}`}
                                className='
          w-full 
          max-w-[100px] 
          sm:max-w-[80px] 
          md:max-w-none 
          scale-125 sm:scale-100 
          xl:w-auto
          dark:invert'
                                alt={`brand-logo-${index + 1}`}
                            />
                        ))}
                    </section>
                </MovingDiv>
            </section>
            <section id="about" name="about" className=" flex py-10 xl:gap-32 px-5 justify-between items-center  xl:mx-32 ">
                <div className="flex flex-col items-center  gap-4 md:gap-6 md:my-10" data-aos="fade-right">
                    <div className="flex flex-col gap-4 md:gap-6" >
                        <p className="  text-primaryColor dark:text-white text-center text-md  p-2">About Us</p>
                        <h4 className="  md:text-4xl font-bold dark:text-white text-center  text-2xl text-primaryColor">Merging growth and scalability for sustainable business </h4>

                    </div>
                    <div className="flex flex-col gap-4 md:w-10/12" >
                        <p className=" text-gray-950 text-sm md:text-lg  text-center  font-light  dark:text-gray-300 ">At Semis Consultants, we empower businesses to unlock their full potential with tailored strategies and expert solutions. From strategic planning and operational optimization to financial management and market analysis, we deliver insights and customized strategies to drive sustainable growth.</p>
                        <p className=" text-gray-950 text-sm md:text-lg  text-center  font-light  dark:text-gray-300 ">
                            Our mission is to be a trusted partner for businesses, offering innovative solutions that deliver measurable results. Whether streamlining processes, expanding your reach, or boosting profitability, Semis Consultants is dedicated to helping you overcome challenges and achieve long-term success. </p>
                    </div>

                    <button name="learn" id='learn' className='px-3 py-2 w-8/12 md:w-3/12 bg-primaryColor dark:bg-DarkprimaryColor hover:bg-gray-100 border-transparent hover:border-primaryColor  hover:text-primaryColor  dark:text-gray-50 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:hover:border-DarkprimaryColor border    transition ease-in-out  delay-150 duration-300 text-white rounded-lg' >read more</button>


                </div>


            </section>

            <section id="services" name="services" className=" flex flex-col gap-10  dark:text-white px-5 xl:px-10 items-center py-10" >
                <div className="flex flex-col text-center gap-2">
                    <p className="  mx-auto text-primaryColor dark:text-white text-md font-bold p-2">Our services</p>
                    <h4 className=" text-gray-950 md:text-3xl font-bold dark:text-white  text-2xl">We provide top notch service for various business across various field.</h4>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 items-center justify-evenly gap-5 md:gap-10 xl:gap-10 xl:w-10/12 ">
                    {service}
                </div>
            </section>
            <section id="values" name="values" className=" flex flex-col gap-10  dark:text-white px-5 xl:px-10 items-center py-10" >
                <div className="flex flex-col text-center gap-2">
                    <p className="  mx-auto text-primaryColor dark:text-white text-md font-bold p-2">Onboarding</p>
                    <h4 className=" text-gray-950 md:text-3xl font-bold dark:text-white  text-2xl">How to get started</h4>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-evenly gap-5 md:gap-10 xl:gap-10 xl:w-10/12 ">
                    {values}
                </div>
            </section>


            <section id="pricing" name="pricing" className=" flex flex-col gap-10  dark:text-white px-5 xl:px-10 items-center py-10" >
                <div className="flex flex-col items-center text-center gap-2">
                    <p className="  mx-auto text-primaryColor dark:text-white text-md font-bold p-2">Pricing</p>
                    <h4 className=" text-gray-950 md:text-3xl font-bold dark:text-white  text-2xl">Pricing made for healthy tomorrow</h4>
                    <div className="flex flex-row justify-center md:w-6/12 gap-3 p-2 rounded-full dark:bg-gray-900 bg-[#EFF8FF]">
                    <button name="private" id='private'  onClick={() => setProductType('private')} className={`px-6 py-2   transition ease-in-out text-center  delay-50 duration-150 text-sm md:textmd  rounded-full ${ProductType === 'private' ? 'bg-btn-base-light text-gray-50' : 'bg-transparent'}`} >Private LL</button>
                    <button name="public" id='public'  onClick={() => setProductType('public')} className={`px-6 py-2   transition ease-in-out text-center  delay-50 duration-150 text-sm md:textmd  rounded-full ${ProductType === 'public' ? 'bg-btn-base-light text-gray-50' : 'bg-transparent'}`} >Public LL</button>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-evenly gap-5 md:gap-10 xl:gap-10 xl:w-10/12 ">
                    {plans}
                </div>
            </section>


            <section id="fqa" name="fqa" className=" flex flex-col items-start py-10 gap-10 px-5    xl:px-32 bg-primaryColor dark:bg-btn-base-dark"  >

                <h4 className="  md:text-6xl font-medium text-white mx-auto text-2xl">Frequently asked questions</h4>

                <div className="grid grid-cols-1 gap-10 w-full ">
                    {fqaCard}
                </div>
                <h4 className=" mx-auto md:text-xl text-sm text-center font-light text-white  ">Didn’t get ? you can get more help from <button className="font-medium underline">Support</button>  or <button className="font-medium underline">Contact</button> </h4>

            </section>

            <Sub />
            <Footer />
        </div>
    )
}

export default Home