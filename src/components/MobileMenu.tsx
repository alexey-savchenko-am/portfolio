import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdHome, MdInfo } from "react-icons/md";

type MobileMenuProps = {
  isMenuOpened: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isMenuOpened, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`fixed
         top-0 left-0 h-screen w-screen
        bg-black bg-opacity-50
        z-50 flex items-center justify-center container`}
      onClick={onClose}
    >
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="bg-yellow-100 bg-opacity-100 border rounded-lg text-white w-full h-[400px] flex justify-center relative"
        >
          <ul className="flex flex-col -translate-y-5 items-center gap-8 text-3xl uppercase text-gray-600 font-bold my-auto font-poppins">
            <li className="">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-500 flex gap-2" : "text-gray-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-yellow-500" : "text-gray-600"
                }
              >
                 About
              </NavLink>
            </li>
            <li>
                <NavLink
                to="/experience"
                className={({ isActive }) =>
                  isActive ? "text-yellow-500" : "text-gray-600"
                }
              >
                Experience
              </NavLink>
            </li>
            <li>
                <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-yellow-500" : "text-gray-600"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
