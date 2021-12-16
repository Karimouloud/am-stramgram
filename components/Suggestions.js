import faker from "faker"
import { useEffect, useState } from "react"


function Suggestions() {

  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
        ...faker.helpers.contextualCard(),
        id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10" >
      <div className="flex justify-between text-sm mb-5" >
        <h3 className="text-sm font-bold" >Suggestions pour vous</h3>
        <button className="text-gray-600 font-semibold" >Voir tout</button>
      </div>

      {
        suggestions.map((profile) => (
          <div 
            key={profile.id}
            className="flex items-center justify-between mt-3" 
          >
            <img 
              className="w-10 h-10 rounded-full border p-[2px]"
              src={"https://picsum.photos/300/300?random=Math.random()" + Math.random() * (2, 58)} 
              alt="profile picture avatar"
            />

            <div className="flex-1 ml-4" >
              <h2 className="" >
                {profile.username}
              </h2>
              <h3>
                {profile.company.name}
              </h3>
              
            </div>
            <button className="text-blue-600 font-semibold" >S'abonner</button>
          </div>
        ))
      }
    </div>
  )
}

export default Suggestions
