

export default function Sub() {
    return (
        // <section className="flex relative bg-bg-img  my-20 flex-col gap-10 p-40 bg-no-repeat items-center mx-20">
        //     {/* <img src="img/sub.svg" alt="" /> */}
        //     <div className="flex flex-col gap-4 items-center">
        //     <h4 className="bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-700 text-transparent bg-clip-text md:text-6xl ">Subscribe to Ooido</h4>
        //     <p className="text-md ">The ultimate guide and latest updates on ooido. Join 100,000+ others on the journey.</p>
        //     </div>

        //     <div className="bg-gray-100 rounded-lg flex flex-row  gap-10 text-black p-2 px-4">
        //         <input type="email" placeholder="enter your email"  className="bg-transparent"/>
        //         <button className="bg-gray-900 p-2 px-4 rounded-lg text-white ">Sign up</button>
        //     </div>
        // </section>
        <section className="relative p-5 mx-4 xl:p-20 xl:mx-32  rounded-2xl  "  data-aos="zoom-in" >
            <img
                src="img/sub.svg"
                className="absolute inset-0 object-cover md:w-full opacity-70 dark:opacity-100 rounded-2xl h-full"
                alt=""
            />
            <div className="relative ">
                <div className="flex flex-col items-center justify-between gap-4 md:gap-6 xl:p-12">
                    <div className="flex flex-col gap-2 md:gap-4 items-center text-center md:w-10/12">
                        <h4 className=" text-xl md:text-5xl md:font-extrabold   "><span className="text-primaryColor">Semis consult & and co </span>is here to help your business scale into success</h4>
                        {/* <p className="text-sm md:text-md text-center ">The ultimate guide and latest updates on ooido. Join 100,000+ others on the journey.</p> */}
                    </div>
                    <button  name="get started" id='get started' className='px-4 py-2 hover:text-primaryColor hover:bg-white hover:bg-DarkprimaryColor border border-transparent hover:border-primaryColor bg-btn-base-light text-white hover:text-btn dark:bg-btn-base-dark dark:text-gray-50 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:hover:border-btn-base-dark    transition ease-in-out  delay-150 duration-300  rounded-lg'>Get free qoute</button>
               
                       
                    {/* <div className="bg-gray-100 rounded-lg flex xl:w-4/12 justify-between flex-row gap-4 md:gap-10 text-black p-2 px-4">
                        <input type="email" placeholder="enter your email" className="bg-transparent" />
                        <button className="bg-gray-900 p-2 px-4 rounded-lg text-white ">Sign up</button>
                    </div> */}

                </div>
            </div>

        </section>
    )
}
