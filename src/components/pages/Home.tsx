import React from 'react'
import imghome from "../../assets/imghome.png"
import Navbor from '../layout/Navbor';
import Footer from '../layout/Footer';
function Home() {
    return (

        <div className='h-[100vh]  '>
            <Navbor />
            <div className=" container flex flex-col gap-10 w-full h-fit lg:w-full lg:h-5/6  mx-auto lg:pb-3 lg:pt-24  lg:flex-row lg:justify-between bg-[#060023]    text-white     ">
                <div className="flex flex-col gap-10 pt-24 ">
                    <h2 className=' text-[#0AADFF]  text-2xl lg:text-4xl font-Arabic  font-semibold  '>سلام به وبسایت من خوش امدید. </h2>
                    <div className="flex justify-start pt-1">
                        <h2 className=' text-[#ffffffde]  lg:text-4xl text-4xl  font-Arabic  font-semibold shadow-2xl   '>من </h2>
                        <h1 className=' text-[#ffffffe5] lg:text-4xl text-4xl    font-semibold  shadow-2xl   '>محمد حسن تاجیک </h1>
                    </div>
                    <h2 className='text-[#9A9BAE]  text-3xl  lg:text-4xl  font-semibold  '>برنامه نویس  فرانت اند  هستم! </h2>
                </div>
                <div className="">
                    <div className=" lg:hidden  pt-3 ">
                        <button className=" h-12 w-1/3  bg-[#dd6b57d0] font-Arabic text-xl  shadow-2xl  rounded-lg ">
                            پروژه ها
                        </button>
                    </div>
                </div>
                <div >
                    <img src={imghome} alt="" className=" lg:h-[400px]" />
                </div>

            </div>

            <Footer />
        </div>
    )
}
export default Home;