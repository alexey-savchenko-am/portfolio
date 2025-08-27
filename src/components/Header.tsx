import { Link,NavLink } from 'react-router-dom';
import { RiUserSmileLine } from 'react-icons/ri'
import { MdClose, MdMenu } from 'react-icons/md'
import Logo from "../assets/images/logo.png";
import MobileMenu from './MobileMenu';
import { useState } from 'react';


const Header = () => {


  const[isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <header 
        className="bg-gray-900 shadow-xl w-full py-2 border-b fixed z-10">

        {/**Regular Menu*/}
        <div className="container flex justify-between items-center">
            {/**Logo */}
            <div className="flex gap-1 items-center justify-center cursor-pointer">
                <img src={Logo} alt="" />
            </div>

            {/**Menu */}
            <nav className="hidden md:flex uppercase font-poppins text-gray-400 text-xl ">
                <ul className="flex gap-10">
                    <li>
                        <NavLink to="/" 
                         className={({ isActive }) =>
                            isActive ? "text-yellow-500" : "hover:text-yellow-300 duration-200"
                          }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/experience" 
                         className={({ isActive }) =>
                            isActive ? "text-yellow-500" : "hover:text-yellow-300 duration-200"
                          }
                        >
                            Experience
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact" 
                         className={({ isActive }) =>
                            isActive ? "text-yellow-500" : "hover:text-yellow-300 duration-200"
                          }
                        >
                            Contact&nbsp;Me
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="md:hidden">
                <button
                    onClick={ () => setIsMenuOpened(opened=>!opened) }
                     className="outline-none text-4xl text-gray-400">
                        {
                            isMenuOpened ? <MdClose/> : <MdMenu/>
                        }
                </button>
            </div>
        </div>

        {/**Mobile  Menu */}
        {
            isMenuOpened && <MobileMenu isMenuOpened={isMenuOpened} onClose={()=>setIsMenuOpened(false)}/>
        }
   
    </header>
  )
}

export default Header