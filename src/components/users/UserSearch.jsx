import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import { MdPersonSearch } from "react-icons/md";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";

function UserSearch() {
   const [text, setText] = useState(" ");

   const { users, dispatch } = useContext(GithubContext);
   const { setAlert } = useContext(AlertContext);

   const handleChange = (e) => setText(e.target.value);

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (/^[\s\W]*$/.test(text)) {
         setAlert(
            "Put some meaningful text! \nCannot be empty! \nShould contain some Alphanumeric character!",
            "error"
         );
      } else {
         dispatch({ type: "SET_LOADING" });
         const users = await searchUsers(text);
         dispatch({ type: "GET_USERS", payload: users });
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
                        className='absolute w-20 top-1.5 right-2  rounded-sm btn btn-md dark:bg-gray-700 
                        dark:border-gray-700 hover:outline-none hover:ring-orange-300 hover:bg-transparent hover:ring-2 
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
               <button
                  onClick={() => dispatch({ type: "CLEAR_USERS" })}
                  className='btn btn-ghost btn-lg rounded-lg w-36 hover:outline-none hover:ring-red-300 hover:bg-red-500 hover:bg-opacity-70 hover:ring-2 focus:bg-red-500 text-lg'
               >
                  Clear
               </button>
            </div>
         )}
      </div>
   );
}
export default UserSearch;
