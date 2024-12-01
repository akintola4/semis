
import { FiFacebook,FiInstagram, FiPhone } from "react-icons/fi";
import { VscGithub, VscLocation } from "react-icons/vsc";
import { CiLinkedin, CiMail } from "react-icons/ci";

export default function Footer() {
    return (
        <footer id="footer" name="footer" className="pt-10 w-full flex-end bottom-0  " >
            <div className="relative">
                <div className="relative flex   flex-col gap-10  ">
                    <div className="flex flex-col px-5 gap-10 md:mx-10 xl:gap-32 xl:justify-between items-center  lg:flex-row ">
                        <div className="flex flex-col items-center justify-evenly h-2/4 lg:items-start gap-2 lg:w-6/12  xl:w-4/12" >
                            <img src="/img/logo-black.svg" className=" block dark:hidden " alt="" />
                            <img src="/img/logo-light.svg" className=" hidden dark:block " alt="" />
                            <p className="text-sm md:text-md text-center md:w-8/12 lg:text-left">We help business toward success with expert strategies, tailored solutions, and a clear path to growth and innovation..</p>

                        </div>
                        <div className="grid  grid-cols-2 lg:grid-cols-3 xl:gird-cols-4 gap-5 md:gap-10 justify-around my-5 md:mx-10 lg:w-7/12 xl:w-7/12 lg:grid-rows-1">
                            <div className="flex flex-col gap-2  text-left justify-between">
                                <h4 className="font-bold text-lg ">Home</h4>
                                <div><button name="footer nav" id='footer Nav' className="text-md font-light gap-2 "> Service</button></div>
                                <div><button name="footer nav" id='footer Nav' className="text-md font-light gap-2 ">Pricing</button></div>
                                <div><button name="footer nav" id='footer Nav' className="text-md font-light gap-2 "> Contact</button></div>
                                <div><button name="footer nav" id='footer Nav' className="text-md font-light gap-2 "> About</button></div>
                            </div>
                            <div className="flex flex-col gap-2  text-left justify-between">
                            <h4 className="font-bold text-lg ">Socials</h4>
                            <button  className=" flex flex-row items-center gap-2 text-md font-light" name="socials" id="facebook"><FiFacebook /> <h4>Facbook</h4></button>
                            <button  className=" flex flex-row items-center gap-2 text-md font-light" name="socials" id="Linkedin"><CiLinkedin /><h4>Linkedin</h4></button>
                            <button  className=" flex flex-row items-center gap-2 text-md font-light" name="socials" id="twitter"><VscGithub /> <h4>Github</h4></button>
                            <button  className=" flex flex-row items-center gap-2 text-md font-light" name="socials" id="instagram"><FiInstagram /> <h4>Instagram</h4></button>
                            
                            </div>

                            <div className="flex flex-col gap-2  text-left ">
                                <h4 className="font-bold text-lg ">Get in touch</h4>
                                <button  className=" flex flex-row items-center gap-2 text-md font-light" name="footer nav" id='footer Nav'><FiPhone /> <h4>+44 7400 383892</h4></button>
                            <button  className=" flex flex-row items-center gap-2 text-md font-light" name="footer nav" id='footer Nav'><CiMail /><h4>hello@epicx.co.uk</h4></button>
                            <button  className=" flex flex-row items-center gap-2 text-md font-light" name="footer nav" id='footer Nav'><VscLocation /> <h4>location</h4></button>
                            

                            </div>


                        </div>
                    </div>
                    <div className="flex flex-col items-center xl:items-start gap-4 xl:gap-0 lg:flex-row p-5  justify-center border-t-2 ">

                        <h4 className=" text-sm text-center lg:text-left">©2024 Semis consult & co by <a href="https://x.com/LagoonRedd14081">Farid</a>  and implemented by <a href="https://x.com/photofola">Dev Akintola</a></h4>
                    </div>
                </div>
            </div>
        </footer>
    )
}
