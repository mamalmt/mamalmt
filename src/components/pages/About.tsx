import Navbor from '../layout/Navbor';
import Footer from '../layout/Footer';
import pngwing from '../../assets/pngwing.png';
function About() {
    return (

        <section className='h-[100vh]  '>
            <Navbor />
            <div className=" container flex flex-col justify-center items-center lg:flex-row  lg:gap-10 w-full h-fit lg:w-full lg:h-5/6 pt-11     text-white  mx-auto bg-[#060023] ">
                <div className="flex flex-col gap-11">
                    <h1 className=' text-[#ffffffe5] lg:text-4xl text-2xl    font-semibold     '>محمد حسن تاجیک  </h1>
                    <h2 className=' text-[#666C7D]  lg:w-2/3 text-xl lg:text-2xl  font-Arabic   font-semibold  '>
                        من  در سال 2021 وارد این حرفه شدم  و بنا به علاقه ای که داشتم و دارم ,
                        این حرفه رو شغل اصلی خود در زندگیم در نظر گرفتم ,سخت در تلاشم
                        تا به نتیجه  دلخواه  خود  برسم </h2>
                    <h3 className='text-[#666c7dda]  lg:w-2/3 text-xl lg:text-2xl  font-Arabic    font-normal  '>با تشکر از همراهی شما mamal.mt .</h3>
                </div>
            
                <div className="  text-center flex items-center w-3/4 lg:w-2/4">
                    <img src={pngwing} alt="" />
                </div>

            </div>

            <Footer />
        </section>
    )
}
export default About;