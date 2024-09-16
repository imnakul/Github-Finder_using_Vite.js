import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";

function User() {
   const { getUser, user } = useContext(GithubContext);
   const params = useParams();
   useEffect(() => {
      getUser(params.login);
   }, []);

   return (
      <div>
         <img src={user.avatar_url} alt='Profile' />
      </div>
   );
}
export default User;
