import { GoHome } from "react-icons/go";
import { AiOutlineDashboard } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { SiCompilerexplorer } from "react-icons/si";
import { LiaCertificateSolid } from "react-icons/lia";
import { GrAchievement } from "react-icons/gr";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { TiHeartFullOutline } from "react-icons/ti";
import { MdOutlineForum } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { GoVideo } from "react-icons/go";
import styles from "../Sidebar/Sidebar.module.css";
import { useState } from "react";
import {NavLink} from "react-router-dom";

const SideBar = () => {
  //Agar sidebar open rahega toh arrow left hona chahiye
  //Agar sidebar close rahega toh arrow right hona chahiye
  const [isOpen , setIsOpen] = useState(true);

  //Agar sidebar se koi tab select rahega toh active karna.
  const [selectedTab , setSelectedTab] = useState("Home");

  const toggleSidebar = () =>{
     setIsOpen(!isOpen);
  }

  const handleMenuItems =(tab) =>{
    setSelectedTab(tab);
  } 

  return <>
    <div className={`${styles.sidebar} d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" ${isOpen ? styles.open : styles.closed}`}>

      <button className={`${styles.toggleBtn} mb-2 ms-auto bg-body-tertiary`} onClick={toggleSidebar}>
         <div className="arrow">
          {isOpen ?  <IoMdArrowDropleft/> : <IoMdArrowDropright />}
         </div>
      </button>
      
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" className={`nav-link link-body-emphasis ${selectedTab =="Home" ? "active text-white" : ""}`} aria-current="page" onClick={() => handleMenuItems("Home")}>
            <GoHome /> {isOpen ? "Home" : " "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={`nav-link link-body-emphasis ${selectedTab == "Dashboard" ? "active text-white" : ""}`} onClick={()=> handleMenuItems("Dashboard")}>
            <AiOutlineDashboard /> {isOpen ? "Dashboard" : " "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/notes" className={`nav-link link-body-emphasis ${selectedTab == "Notes" ? "active text-white" : " "}`} onClick={()=> handleMenuItems("Notes")}>
            <CgNotes /> {isOpen ? "Notes" : " "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/compiler" className={`nav-link link-body-emphasis ${selectedTab == "Compiler" ? "active text-white" : " "}`} onClick={()=> handleMenuItems("Compiler")}>
            <SiCompilerexplorer /> {isOpen ? "Compiler" : " "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/certificates" className={`nav-link link-body-emphasis ${selectedTab == "Certificates" ? "active text-white" : " "}`} onClick={()=> handleMenuItems("Certificates")}>
            <LiaCertificateSolid /> {isOpen ? "Certificates" : " "} 
          </NavLink>
        </li>
        <li>
          <NavLink to="/badges" className={`nav-link link-body-emphasis ${selectedTab == "Badges" ? "active  text-white" : " "}`} onClick={()=>handleMenuItems("Badges")}>
            <GrAchievement /> {isOpen ? "Badges" : " "} 
          </NavLink>
        </li>       
        <li>
          <NavLink to="/courses" className={`nav-link link-body-emphasis ${selectedTab == "Courses" ? "active text-white" : " "}`} onClick={()=>handleMenuItems("Courses")}>
            <MdOutlineVideoLibrary /> {isOpen ? "Courses" : " "} 
          </NavLink>
        </li>    
        <li>
          <NavLink to="/favourites" className={`nav-link link-body-emphasis ${selectedTab == "Favourites" ? "active text-white" : " "}`} onClick={()=>handleMenuItems("Favourites")}>
            <TiHeartFullOutline /> {isOpen ? "Favourites" : " "}  
          </NavLink>
        </li>  
        <li>
          <NavLink to="/forum" className={`nav-link link-body-emphasis ${selectedTab == "Forum" ? "active text-white" : " "}`} onClick={()=>handleMenuItems("Forum")}>
            <MdOutlineForum /> {isOpen ? "Forum" : " "}  
          </NavLink>
        </li>       
        <li>
          <NavLink to="/uploadvideo" className={`nav-link link-body-emphasis ${selectedTab == "Upload Video" ? "active text-white" : " "}`} onClick={()=>handleMenuItems("Upload Video")}>
              <GoVideo />  {isOpen ? "Upload Video" : " "}  
          </NavLink>
        </li>       
        <li className="border-top my-3"></li>
      </ul>
      <hr/>
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>

  </>
}

export default SideBar;