import { createContext } from "react";
import { useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
   const intitalState = {
      users: [],
      user: {},
      repos: [],
      loading: false,
   };

   const [state, dispatch] = useReducer(githubReducer, intitalState);

   //Search single user
   const getUser = async (login) => {
      setLoading();

      const response = await fetch(`${GITHUB_URL}/users/${login}`, {
         headers: {
            Authorization: GITHUB_TOKEN,
         },
      });

      if (response.status === 400) {
         window.location = "/notfound";
      } else {
         const data = await response.json();
         dispatch({ type: "GET_USER", payload: data });
      }
   };

   //Get User Repos
   const getUserRepos = async (login) => {
      setLoading();

      const params = new URLSearchParams({
         sort: "created",
         per_page: 10,
      });

      const response = await fetch(
         `${GITHUB_URL}/users/${login}/repos?${params}`,
         {
            headers: {
               Authorization: GITHUB_TOKEN,
            },
         }
      );

      const data = await response.json();
      dispatch({ type: "GET_REPOS", payload: data });
      // if (items.length === 0) { //maybe later add if 404 error for no repos found add that status.
      //    window.alert("No Repos Found!");
      // }
   };

   return (
      <GithubContext.Provider
         value={{
            ...state,
            dispatch,
         }}
      >
         {children}
      </GithubContext.Provider>
   );
};

export default GithubContext;
