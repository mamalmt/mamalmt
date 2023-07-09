import React from 'react'
import chatgpt from "../../assets/chatgpt.png"
import Navbor from '../layout/Navbor';
import Footer from '../layout/Footer';
function Blog() {
    return (

        <div className='h-[100vh]  '>
            <Navbor />
            <div className=" container flex flex-col gap-10 w-full h-fit lg:w-full lg:h-5/6  mx-auto pb-3 pt-24  lg:flex-row lg:justify-between    text-white  bg-[#060023]  ">

                <div className='flex flex-col w-5/6 lg:w-2/5 bg-[#78729b20] bg-gradient-to-t from-slate-900  rounded-xl p-4 gap-5' >

                    <img src={chatgpt} alt="" className="w-full " />
                    <h1 className='text-2xl lg:text-3xl font-bold text-sky-700'>ChatGPT</h1>
                    <h2>ChatGPT به عنوان یکی از پیشرفته‌ترین سیستم‌های هوش مصنوعی در حال حاضر، از طریق پردازش متن، صدا و تصویر، قادر به ارائه پاسخ‌های دقیق و معتبر به سوالات کاربران است. با استفاده از این سیستم، کاربران می‌توانند به سؤالاتشان در زمینه‌های مختلف از جمله فناوری، سلامتی، آموزش، سبک زندگی و ... پاسخ دقیقی دریافت کنند.</h2>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Blog;