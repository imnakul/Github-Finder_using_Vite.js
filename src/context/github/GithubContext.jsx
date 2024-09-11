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

   // Get initial users (testing purposes)
   const fetchUsers = async () => {
      setLoading();
      const response = await fetch(GITHUB_URL + "/users", {
         headers: {
            Authorization: GITHUB_TOKEN,
         },
      });

      const data = await response.json();
      dispatch({ type: "GET_USERS", payload: data });
   };

   //Set loading
   const setLoading = () => dispatch({ type: "SET_LOADING" });

   return (
      <GithubContext.Provider
         value={{ users: state.users, loading: state.loading, fetchUsers }}
      >
         {children}
      </GithubContext.Provider>
   );
};

export default GithubContext;
