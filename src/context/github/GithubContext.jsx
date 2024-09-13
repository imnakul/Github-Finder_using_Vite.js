import { createContext } from "react";
import { useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();
const GITHUB_URL = "https://api.github.com";
const GITHUB_TOKEN = "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";

export const GithubProvider = ({ children }) => {
   const intitalState = {
      users: [],
      loading: false,
   };

   const [state, dispatch] = useReducer(githubReducer, intitalState);

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

   //Set loading
   const setLoading = () => dispatch({ type: "SET_LOADING" });

   return (
      <GithubContext.Provider
         value={{ users: state.users, loading: state.loading, searchUsers }}
      >
         {children}
      </GithubContext.Provider>
   );
};

export default GithubContext;
