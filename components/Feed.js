import Posts from "./Posts";
import Stories from "./Stories";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/react";


function Feed() {

  const { data: session } = useSession();

  return (
    <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w6-xl mx-auto ${!session && "!gris-cols-1 !max-w-3xl"}`} >
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      {session && (
        <section className="hidden xl:inline-grid md:col-span-1" >        
        <div className="fixed top-20" >
          <MiniProfile />
          <Suggestions />
        </div>
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
      )}
      

            
    </main>
  );
}

export default Feed;
