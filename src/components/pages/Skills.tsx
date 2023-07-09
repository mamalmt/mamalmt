import Navbor from '../layout/Navbor';
import Footer from '../layout/Footer';

function Skills() {
    return (

        <section className=' h-[100vh] '>
            <Navbor />
            <div className="container justify-center items-center bg-[#060023] pt-10  lg:pt-32 lg:pb-14 mx-auto  ">
                <div className="">
                    <h1 className='font-Arabic font-bold text-white  text-2xl lg:text-3xl'>مهارت ها </h1>
                </div>
                <div className="flex flex-col lg:grid lg:grid-cols-3 justify-center items-center  gap-10 lg:gap-0 w-full h-fit lg:h-[400px]  mx-auto lg:w-full p-12   pr-7  text-white   ">
                    <div className="flex  justify-start items-center  gap-4 w-2/4  lg:w-2/4  text-center " >
                        <input type="range" name="" id="" dir='ltr' min="0" max="100" value={80} />
                        <h2 className='font-Arabic font-semibold text-xl'>HTML</h2>
                    </div>
                    <div className="flex justify-start items-center gap-4 w-2/4  lg:w-2/4  text-center " >
                        <input type="range" name="" id="" dir='ltr' min="0" max="100" value={80} />
                        <h2 className='font-Arabic font-semibold text-xl'>CSS</h2>
                    </div>
                    <div className="flex justify-start items-center gap-4 w-2/4  lg:w-2/4  text-center " >
                        <input type="range" name="" id="" dir='ltr' min="0" max="100" value={60} />
                        <h2 className='font-Arabic font-semibold text-xl'>JavaScript </h2>
                    </div>
                    <div className="flex justify-start items-center gap-4 w-2/4  lg:w-2/4  text-center " >
                        <input type="range" name="" id="" dir='ltr' min="0" max="100" value={80} />
                        <h2 className='font-Arabic font-semibold text-xl'>Tailwind </h2>
                    </div>
                    <div className="flex justify-start items-center gap-4 w-2/4  lg:w-2/4  text-center " >
                        <input type="range" name="" id="" dir='ltr' min="0" max="100" value={70} />
                        <h2 className='font-Arabic font-semibold text-xl'>Bootstrap </h2>
                    </div>
                    <div className="flex justify-start items-center gap-4 w-2/4  lg:w-2/4  text-center " >
                        <input type="range" name="" id="" dir='ltr' min="0" max="100" value={60} />
                        <h2 className='font-Arabic font-semibold text-xl'>Sass </h2>
                    </div>
                    <div className="flex justify-start items-c  enter gap-4 w-2/4  lg:w-2/4  text-center col-end-3" >
                        <input type="range" name="" id="" dir='ltr' min="0" max="100" value={70} />
                        <h2 className='font-Arabic font-semibold text-xl'>React </h2>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}
export default Skills;