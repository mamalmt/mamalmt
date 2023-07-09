import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {

    const location = useLocation();

    return (
        <div className="container  bg-[#060023]   w-full mx-auto  py-2 ">
            <div className="  flex flex-col lg:flex-row lg:justify-between   justify-center items-center gap-4  ">
                <div className="flex">
                    <button className="text-white text-xl font-Arabic ">
                        <Link to="/communication" style={{ textShadow: location.pathname === '/communication' ? '2px 2px 2px rgba(240, 244, 244, 0.9)' : 'transparent' }}>تماس با من </Link>
                    </button>
                </div>
                <div className="flex">
                 
                    <a className="text-white" href="tel:+989309535595" >
                        <span dir="ltr">+989309535595</span>
                    </a>
               
                </div>
                <div className="flex">

                    <a href="mailto:HasanWebWizard@gmail?subject%20=%20Feedback&amp;body%20=%20Message" className="text-white">
                        <span>HasanWebWizard@gmail.com</span>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Footer;