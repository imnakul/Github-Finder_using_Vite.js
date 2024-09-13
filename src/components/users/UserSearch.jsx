import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import { MdPersonSearch } from "react-icons/md";

function UserSearch() {
   const [text, setText] = useState(" ");

   const { users, searchUsers } = useContext(GithubContext);

   const handleChange = (e) => setText(e.target.value);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (/^[\s\W]*$/.test(text)) {
         window.alert(
            "Put some meaningful text! \nCannot be empty! \nShould contain some Alphanumeric character!"
         );
      } else {
         searchUsers(text);
         setText(" ");
      }
   };

   return (
      <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
         <div>
            <form onSubmit={handleSubmit}>
               <div className='form-control'>
                  <div className='relative'>
                     <input
                        type='text'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-40 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-300 dark:focus:border-primary focus:ring-2 input focus:outline-none input-lg'
                        placeholder='Search Users: '
                        value={text}
                        onChange={handleChange}
                     />

                     <button
                        type='submit'
                        className='absolute w-24 top-1.5 right-2  rounded-sm btn btn-md dark:bg-gray-700 
                        dark:border-gray-700 hover:outline-none hover:bg-transparent hover:ring-2 hover:ring-green-200
                        '
                     >
                        <MdPersonSearch className='absolute  text-primary inline p-2 text-6xl' />
                     </button>
                  </div>
               </div>
            </form>
         </div>
         {users.length > 0 && (
            <div>
               <button className='btn btn-ghost btn-lg rounded-sm w-36 hover:bg-red-500 hover:text-black focus:bg-red-500 focus:text-black text-lg'>
                  Clear
               </button>
            </div>
         )}
      </div>
   );
}
export default UserSearch;
