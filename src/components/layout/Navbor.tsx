import { useState } from "react";
import Nav from "./Nav";
import Menomobile from "./Menomobile";

function Navbor() {
  const [toole, settoole] = useState(true);
  
  const handlermeno = () => {
    settoole(!toole);
  };

  return (  
    <>
      <Nav handler={handlermeno} />
      {toole && <Menomobile />}
    </>
  );
}
export default Navbor;
