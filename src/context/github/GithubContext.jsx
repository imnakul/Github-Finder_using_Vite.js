import { createContext } from "react";
import { useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();
const GITHUB_URL = "https://api.github.com";
const GITHUB_TOKEN = "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";

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

   // Get search results
   const searchUsers = async (text) => {
      setLoading();
      const params = new URLSearchParams({
         q: text,
      });

      const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
         headers: {
            Authorization: GITHUB_TOKEN,
         },
      });

      const { items } = await response.json();
      //earlier we were just using data to store response in json format , but with new url we want items array only from response, so destructuring it into items array
      dispatch({ type: "GET_USERS", payload: items });
      if (items.length === 0) {
         window.alert("No Users Found!");
      }
   };

   //Clear UserResult
   const clearUsers = () => {
      dispatch({ type: "CLEAR_USERS" });
   };

   //Set loading
   const setLoading = () => dispatch({ type: "SET_LOADING" });

   return (
      <GithubContext.Provider
         value={{
            users: state.users,
            loading: state.loading,
            repos: state.repos,
            searchUsers,
            clearUsers,
            user: state.user,
            getUser,
            getUserRepos,
         }}
      >
         {children}
      </GithubContext.Provider>
   );
};

export default GithubContext;
