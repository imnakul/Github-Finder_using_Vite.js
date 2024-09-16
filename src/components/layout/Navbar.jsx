import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

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
                     className='btn btn-ghost hover:bg-neutral  focus:bg-primary focus:text-black hover:ring-green-300 hover:border-primary hover:ring-2 focus:outline-none text-xl px-6 py-2 rounded-md'
                  >
                     Home
                  </Link>
                  <Link
                     to='/about'
                     className='btn btn-ghost hover:bg-neutral focus:bg-primary focus:text-black hover:ring-green-300 hover:ring-2 text-xl px-6 py-2 rounded-md'
                  >
                     About
                  </Link>

                  <Menu as='div' className='relative inline-block text-left'>
                     <MenuButton className='btn btn-ghost hover:bg-neutral focus:bg-primary focus:text-black hover:ring-green-300 hover:ring-2 text-xl px-6 py-2 rounded-md'>
                        Themes
                     </MenuButton>

                     <MenuItems
                        transition
                        className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
                     >
                        <div className='py-1'>
                           <MenuItem>
                              <Link
                                 onClick={() =>
                                    document
                                       .querySelector("html")
                                       .setAttribute("data-theme", "aqua")
                                 }
                                 className='block px-4 py-2 text-md text-gray-700 data-[focus]:bg-blue-400 data-[hover]:bg-blue-500 data-[focus]:text-gray-900 hover:shadow-lg'
                              >
                                 Aqua
                              </Link>
                           </MenuItem>

                           <MenuItem>
                              <Link
                                 onClick={() =>
                                    document
                                       .querySelector("html")
                                       .setAttribute("data-theme", "retro")
                                 }
                                 className='block px-4 py-2 text-md text-gray-700 data-[focus]:bg-orange-300 data-[hover]:bg-orange-300 data-[focus]:text-gray-900 hover:shadow-lg'
                              >
                                 Retro
                              </Link>
                           </MenuItem>

                           <MenuItem>
                              <Link
                                 onClick={() =>
                                    document
                                       .querySelector("html")
                                       .setAttribute("data-theme", "luxury")
                                 }
                                 className='block px-4 py-2 text-md text-gray-700 data-[focus]:bg-red-900 data-[hover]:bg-red-900 data-[focus]:text-gray-900 hover:shadow-lg'
                              >
                                 Luxury
                              </Link>
                           </MenuItem>

                           <MenuItem>
                              <Link
                                 onClick={() =>
                                    document
                                       .querySelector("html")
                                       .setAttribute("data-theme", "valentine")
                                 }
                                 className='block px-4 py-2 text-md text-gray-700 data-[focus]:bg-pink-400 data-[hover]:bg-pink-400 data-[focus]:text-gray-900 hover:shadow-lg'
                              >
                                 Valentine
                              </Link>
                           </MenuItem>

                           <MenuItem>
                              <Link
                                 onClick={() =>
                                    document
                                       .querySelector("html")
                                       .setAttribute("data-theme", "lemonade")
                                 }
                                 className='block px-4 py-2 text-md text-gray-700 data-[focus]:bg-yellow-200 data-[hover]:bg-yellow-200 data-[focus]:text-gray-900 hover:shadow-lg'
                              >
                                 Lemonade
                              </Link>
                           </MenuItem>

                           <MenuItem>
                              <Link
                                 onClick={() =>
                                    document
                                       .querySelector("html")
                                       .setAttribute("data-theme", "dim")
                                 }
                                 className='block px-4 py-2 text-md text-gray-700 data-[focus]:bg-blue-800 data-[hover]:bg-blue-800 data-[focus]:text-gray-900 hover:shadow-lg'
                              >
                                 Dim
                              </Link>
                           </MenuItem>

                           <MenuItem>
                              <Link
                                 onClick={() =>
                                    document
                                       .querySelector("html")
                                       .setAttribute("data-theme", "light")
                                 }
                                 className='block px-4 py-2 text-md text-gray-700 data-[focus]:bg-white data-[hover]:bg-white hover:text-black data-[focus]:text-gray-900 hover:shadow-lg'
                              >
                                 Light
                              </Link>
                           </MenuItem>

                           <MenuItem>
                              <Link
                                 onClick={() =>
                                    document
                                       .querySelector("html")
                                       .setAttribute("data-theme", "dark")
                                 }
                                 className='block px-4 py-2 text-md text-gray-700 data-[focus]:bg-gray-700 [hover]:bg-gray-700 data-[focus]:text-gray-900 hover:shadow-lg'
                              >
                                 Dark
                              </Link>
                           </MenuItem>

                           <MenuItem>
                              <Link
                                 onClick={() =>
                                    document
                                       .querySelector("html")
                                       .setAttribute("data-theme", "synthwave")
                                 }
                                 className='block px-4 py-2 text-md text-gray-700 data-[focus]:bg-blue-700 data-[hover]:to-blue-950 data-[focus]:text-gray-900'
                              >
                                 Synthwave
                              </Link>
                           </MenuItem>
                           <MenuItem>
                              <Link
                                 onClick={() =>
                                    document
                                       .querySelector("html")
                                       .setAttribute("data-theme", "forest")
                                 }
                                 className='block px-4 py-2 text-md text-gray-700 data-[focus]:bg-green-700 data-[hover]:bg-green-700 data-[focus]:text-gray-900'
                              >
                                 Forest
                              </Link>
                           </MenuItem>

                           <MenuItem>
                              <Link
                                 onClick={() =>
                                    document
                                       .querySelector("html")
                                       .setAttribute("data-theme", "cyberpunk")
                                 }
                                 className='block w-full px-4 py-2 text-left text-md text-gray-700 data-[focus]:bg-yellow-300 data-[hover]:bg-yellow-300 data-[focus]:text-gray-900'
                              >
                                 Cyberpunk
                              </Link>
                           </MenuItem>
                        </div>
                     </MenuItems>
                  </Menu>
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
