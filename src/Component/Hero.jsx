

export default function Hero() {

    return (



        <div id="hero" className="w-full  h-full mt-20 z-0  " data-aos="zoom-in">
            <div className=" px-5 top-0 left-0 w-full h-full z-10 flex items-start md:items-center justify-center flex-col gap-5 ">
                <div className="flex flex-col gap-4 md:gap-6 items-start  md:items-center  md:text-center">
                    <h4 className="font-extrabold lg:text-6xl md:text-6xl text-2xl w-full xl:w-8/12 ">Driving your business toward success with expert strategies</h4>
                    <p className="font-normal text-sm md:text-lg xl:w-6/12 text-ParagraphText dark:text-gray-300">We help business toward success with expert strategies, tailored solutions, and a clear path to growth and innovation.</p>
                </div>
                <div className="flex flex-row gap-6">
                <button  name="get started" id='get started' className='px-4 py-2 hover:text-primaryColor hover:bg-white  border border-transparent hover:border-primaryColor bg-btn-base-light text-white hover:text-btn dark:bg-btn-base-dark dark:text-gray-50 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:hover:border-btn-base-dark    transition ease-in-out  delay-150 duration-300  rounded-lg'>Get in touch</button>
                <button  name="get started" id='get started' className='px-4 py-2 text-primaryColor bg-white  border border-primaryColor hover:border-primaryColor hover:bg-btn-base-light hover:text-white dark:bg-btn-base-dark dark:text-gray-50 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:hover:border-btn-base-dark    transition ease-in-out  delay-150 duration-300  rounded-lg'>See services</button>
                </div>

                <img src="img/hero-1.svg" className="w-full h-3/6" alt="hero Img" />

            </div>
        </div>

    )
}
