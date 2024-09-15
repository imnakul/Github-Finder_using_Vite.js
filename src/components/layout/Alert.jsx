import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { BiSolidError } from "react-icons/bi";

function Alert() {
   const { alert } = useContext(AlertContext);

   return (
      alert !== null && (
         <p className='flex items-start mb-4 ms-2 space-x-2'>
            {alert.type === "error" && (
               // <svg
               //    fill='none'
               //    viewBox='0 0 24 24'
               //    className='w-6 h-6 stroke-current mr-3'
               // >
               //    <circle cx='12' cy='12' r='12' fill='red'></circle>
               //    <path d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'></path>
               // </svg>
               <BiSolidError className='text-red-600 inline text-2xl' />
            )}
            <p className='flex-1 text-base font-semibold leading-7 text-white'>
               <strong>{alert.msg}</strong>
            </p>
         </p>
      )
   );
}

export default Alert;
