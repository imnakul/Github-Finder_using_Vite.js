import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
   return (
      <>
         {/* SEARCH COMPONENT WILL GO HERE */}
         <UserSearch />
         <UserResults />
      </>
   );
}

export default Home;
