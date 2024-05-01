import React,{useState} from 'react'//use useState
import Home from "../../pages/Home/Home";
import { AiOutlineDoubleLeft ,AiOutlineDoubleRight} from "react-icons/ai";
import "./layout.css";
import Menus from '../Menus/Menus';

const Layout = () => {


  const [toggle, setToggle] = useState(true);//define
  //change toggle
  const handleToggle = () => {   
    setToggle(!toggle);
  }
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
            <Menus toggle={toggle} />
          </div>
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
}

export default Layout;
