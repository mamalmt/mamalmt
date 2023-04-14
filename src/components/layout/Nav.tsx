import logo from "../../assets/logo.png";
import meno from "../../assets/meno.png";

function Nav({ handler }) {

  return (
    <>
      <div className=" container w-full h-fit   text-white bg-[#01001deb]  mx-auto ">
        <div className="flex flex-row justify-between ">
          <img src={logo} alt="" />

          <button className="lg:hidden" onClick={handler}>
            <img src={meno} />
          </button>
        </div>
      </div>
    </>
  );
}
export default Nav;
