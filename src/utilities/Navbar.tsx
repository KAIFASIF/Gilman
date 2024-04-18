// import  { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { GiRocketThruster } from "react-icons/gi";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { IconContext } from "react-icons/lib";
// import { NavLink } from "react-router-dom";
// import Modal from "../components/Modal";
// import Signin from "../screens/signin";
// import { authAtom } from "../recoil/authAtom";
// import { useRecoilState } from "recoil";

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [auth, setAuth] = useRecoilState(authAtom);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   return (
//     <>
//       <IconContext.Provider value={{ color: "#fff" }}>

//       <Modal
//         isModalOpen={isModalOpen}
//         setIsModalOpen={setIsModalOpen}
//         ModalClass="w-[40%] max-h-[60vh]"
//       >
//         <Signin setIsModalOpen={setIsModalOpen} />
//       </Modal>
//         <nav className="navbar">
//           <div className="navbar-container container">
//             <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
//               <GiRocketThruster className="navbar-icon" />
//               Skye
//             </Link>
//             <div className="menu-icon" onClick={handleClick}>
//               {click ? <FaTimes /> : <FaBars />}
//             </div>
//             <ul className={click ? "nav-menu active" : "nav-menu"}>
//               <li className="nav-item">
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     "nav-links" + (isActive ? " activated" : "")
//                   }
//                   onClick={closeMobileMenu}
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   to="/slots"
//                   className={({ isActive }) =>
//                     "nav-links" + (isActive ? " activated" : "")
//                   }
//                   onClick={closeMobileMenu}
//                 >
//                   Slots
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   to="/book-slot"
//                   className={({ isActive }) =>
//                     "nav-links" + (isActive ? " activated" : "")
//                   }
//                   onClick={closeMobileMenu}
//                 >
//                   Book slot
//                 </NavLink>
//               </li>
//               <li className="nav-item text-white mt-12" onClick={()=>setIsModalOpen(true)}>
//                 Signin
//               </li>
             
//             </ul>
//           </div>
//         </nav>
//       </IconContext.Provider>
//     </>
//   );
// }

// export default Navbar;