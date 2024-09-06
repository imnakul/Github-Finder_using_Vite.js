import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
   return (
      <nav className='navbar mb-12 p-7 shadow-lg bg-neutral text-neutral-content text-16'>
         <div className='container mx-auto'>
            <div className='flex-none px-2 mx-2'>
               <FaGithub className='text-primary inline pr-2 text-6xl' />
               <Link to='/' className='text-5xl font-bold align-middle ml-2'>
                  {title}
               </Link>
            </div>

            <div className='flex-1 px-2 mx-2'>
               <div className='flex justify-end gap-4'>
                  <Link
                     to='/'
                     className='btn btn-ghost hover:bg-primary hover:text-black focus:bg-primary focus:text-black text-lg px-6 py-2 rounded-md'
                  >
                     Home
                  </Link>
                  <Link
                     to='/about'
                     className='btn btn-ghost hover:bg-primary hover:text-black focus:bg-primary focus:text-black text-lg px-6 py-2 rounded-md'
                  >
                     About
                  </Link>
               </div>
            </div>
         </div>
      </nav>
   );
}

Navbar.defaultProps = {
   title: "Github-Finder",
};

Navbar.PropTypes = {
   title: PropTypes.string,
};

export default Navbar;
