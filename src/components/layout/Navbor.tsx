import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import meno from "../../assets/meno.png";
import Menomobile from "./Menomobile";
import escmeno from "../../assets/escmeno.png"



function Navbor() {
  const [toole, settoole] = useState(false);
  const [menov, setmenov] = useState(meno);
  const location = useLocation();
  const handlermeno = () => {
    settoole(!toole);
    setmenov(menov === meno ? escmeno : meno);


  };


  return (
    <>

      <div className=" container bg-[#060023]  w-full h-fit   text-white bg-dork   mx-auto lg:flex lg:justify-between pt-10">
        <div className="flex flex-row justify-between ">
          <img src={logo} alt="" className=" lg:absolute " />

          <button className="lg:hidden" onClick={handlermeno}>
            <img src={menov} />
          </button>
        </div>
        <div className="">
          <ul className="  hidden lg:flex  pt-3 gap-16 font-Arabic text-xl font-medium lgtext-center text-[#ffffffad]">
            <li className="hover:text-[#fffffffa] active:text-[#f2ebebad] focus:outline-none focus:ring focus:text-[#ffffff] hover:text-2xl textshadowhover " >
              <Link to="/" style={{ textShadow: location.pathname === '/' ? '1px 1px 1.5px rgba(240, 244, 244, 0.9)' : 'transparent' }}> خونه </Link></li>
            <li className="hover:text-[#fffffffa] active:text-[#f2ebebad] focus:outline-none focus:ring focus:text-[#ffffff]  hover:text-2xl textshadowhover" >
              <Link to="/skills" style={{ textShadow: location.pathname === '/skills' ? '1px 1px 1.5px rgba(240, 244, 244, 0.9)' : 'transparent' }} >مهارت ها </Link></li>
            <li className="hover:text-[#fffffffa] active:text-[#f2ebebad] focus:outline-none focus:ring focus:text-[#ffffff]  hover:text-2xl  textshadowhover ">
              <Link to="/blog" >بلاگ</Link>  </li>
            <li className="hover:text-[#fffffffa] active:text-[#f2ebebad] focus:outline-none focus:ring focus:text-[#ffffff]  hover:text-2xl  textshadowhover">
              <Link to="/about" style={{ textShadow: location.pathname === '/about' ? '1px 1px 1.5px rgba(240, 244, 244, 0.9)' : 'transparent' }}>درباره</Link></li>
          </ul>
        </div>

        <div className="  hidden lg:flex text-center justify-center ">
          <button className="font-Arabic  text-xl  h-12 w-28  shadow-2xl bg-sky-600  rounded-xl hover:bg-sky-700 hover:font-semibold active:bg-sky-600 focus:outline-none focus:ring focus:bg-sky-400">
            پروژه ها
          </button>
        </div></div>

      {toole && <Menomobile />}
    </>
  );
}
export default Navbor;
