const GITHUB_URL = "https://api.github.com";
const GITHUB_TOKEN = "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";

// Get search results
export const searchUsers = async (text) => {
   const params = new URLSearchParams({
      q: text,
   });

   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
         Authorization: GITHUB_TOKEN,
      },
   });

   const { items } = await response.json();
   return items;
};
