import axios from "axios";
const GITHUB_URL = "https://api.github.com";
const GITHUB_TOKEN = "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";

//Instance of Axios
const github = axios.create({
   baseURL: GITHUB_URL,
   headers: {
      Authorization: GITHUB_TOKEN,
   },
});

// Get search results
export const searchUsers = async (text) => {
   const params = new URLSearchParams({
      q: text,
   });

   const response = await github.get(`/search/users?${params}`); //returns in json also, in object called Data.
   return response.data.items;
};

//Get Single User and Repos
export const getUserAndRepos = async (login) => {
   //now to send request to two diff URLS, we will use Promise all and send an array of Request
   const [user, repos] = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos`),
   ]);
   return { user: user.data, repos: repos.data };
};
