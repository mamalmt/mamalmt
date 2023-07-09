
import imghome from "../../assets/com.png"
import instagram from "../../assets/instagram.png"
import whatsapp from "../../assets/whatsapp.png"
import telegram from "../../assets/telegram.png"
import linkedin from "../../assets/linkedin.png"
import email from "../../assets/email.png"
import github from "../../assets/github.png"
import Navbor from '../layout/Navbor';
import Footer from '../layout/Footer';
import { Link } from 'react-router-dom';
function Communication() {
    return (

        <section className='h-[100vh]  '>
            <Navbor />

            <div className=" container flex flex-col gap-10 w-full h-fit lg:w-full lg:h-5/6 pt-24  lg:flex-row lg:justify-between    text-white  mx-auto bg-[#060023] ">
                <div className="flex flex-col  justify-center lg:justify-evenly items-center gap-7 lg:w-2/5 bg-[#78729b20] bg-gradient-to-t from-slate-900  rounded-xl p-3 ">
                    <div className="">
                        <h1 className='font-Arabic font-medium text-2xl text-slate-300'>ارتباط با من </h1>
                    </div>
                    <div className="flex flex-col  lg:flex-row justify-center items-center gap-4 lg:gap-20">

                        <div className="flex flex-col  gap-4 lg:gap-10">

                            <div className="flex gap-6">
                                <img src={instagram} alt="" />
                                <Link to="https://www.instagram.com/mohammadhasan.tajik84/" target='_blank' className="font-Arabic text-xl font-medium">اینستاگرام</Link>

                            </div>
                            <div className="flex gap-6">
                                <img src={whatsapp} alt="" />
                                <Link to="https://api.whatsapp.com/send?phone=989309535595&text=" target='_blank' className="font-Arabic text-xl font-medium">واتساپ</Link>
                            </div>
                            <div className="flex gap-6">
                                <img src={telegram} alt="" />
                                <Link to="https://web.telegram.org/?legacy=1#/im?p=@MamalMt3" target='_blank' className="font-Arabic text-xl font-medium">تلگرام</Link>

                            </div>

                        </div>
                        <div className="flex flex-col  gap-4 lg:gap-10">
                            <div className="flex gap-6">
                                <img src={linkedin} alt="" />

                                <Link to="#" target='_blank' className="font-Arabic text-xl font-medium">لینکدین</Link>

                            </div>
                            <div className="flex gap-6">
                                <img src={email} alt="" />
                                <Link to="mailto:HasanWebWizard@gmail?subject%20=%20Feedback&amp;body%20=%20Message" target='_blank' className="font-Arabic text-xl font-medium">ایمیل</Link>

                            </div>
                            <div className="flex gap-6">
                                <img src={github} alt="" />
                                <Link to="https://github.com/mamalmt" target='_blank' className="font-Arabic text-xl font-medium">گیت هاب</Link>

                            </div>
                        </div>
                    </div>
                    <div className="">
                        <button type='button' className='w-28 h-10 rounded-3xl bg-[#2A63A7] text-black text-lg font-Arabic font-semibold'>تمام وقت </button>
                    </div>
                </div>

                <div className="flex  justify-center items-center">
                    <img src={imghome} className="w-min" alt="" />
                </div>
            </div>

            <Footer />
        </section>
    )
}
export default Communication;