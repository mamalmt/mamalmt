import { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

function Menomobile() {
  const location = useLocation();

  return (

    <div
      className="  fixed lg:hidden w-5/6 h-fit mt-3 z-30     bg-[#262845fa] rounded-xl pt-8 pb-8"
    >
      <ul className=" font-Arabic text-2xl font-thin text-center leading-[70px]  text-white">
        <li className="hover:text-[#fffffffa] active:text-[#f2ebebad] focus:outline-none focus:ring focus:text-[#ffffff] textshadowhover" ><Link to="/" style={{ textShadow: location.pathname === '/' ? '1.5px 1.5px 1.5px rgba(240, 244, 244, 0.9)' : 'transparent' }} > خونه</Link></li>
        <li className="hover:text-[#fffffffa] active:text-[#f2ebebad] focus:outline-none focus:ring focus:text-[#ffffff] textshadowhover"><Link to="/skills" style={{ textShadow: location.pathname === '/skills' ? '1px 1px 1.5px rgba(240, 244, 244, 0.9)' : 'transparent' }}>مهارت ها </Link></li>
        <li className="hover:text-[#fffffffa] active:text-[#f2ebebad] focus:outline-none focus:ring focus:text-[#ffffff] textshadowhover"> <Link to="/blog" style={{ textShadow: location.pathname === '/blog' ? '1px 1px 1.5px rgba(240, 244, 244, 0.9)' : 'transparent' }}>بلاگ</Link>  </li>
        <li className="hover:text-[#fffffffa] active:text-[#f2ebebad] focus:outline-none focus:ring focus:text-[#ffffff] textshadowhover"><Link to="/about" style={{ textShadow: location.pathname === '/about' ? '1px 1px 1.5px rgba(240, 244, 244, 0.9)' : 'transparent' }}>درباره</Link></li>

      </ul>
      <div className="  text-center justify-center pt-10">
        <button className="font-Arabic text-xl  h-12 w-1/2 shadow-2xl bg-[#dd6b57d0] rounded-lg ">
          پروژه ها
        </button>
      </div>
    </div>
  );
}

export default Menomobile;
