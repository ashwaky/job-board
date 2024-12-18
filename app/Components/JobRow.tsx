
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function JobRow() {
  return (
<<<<<<< HEAD
    <div className=" bg-white p-6 rounded shadow flex gap-4">
        
     <div className="content-center">
        <img className="size-16"
         src ="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"></img>
     </div>
     <div className="grow">
        <div className="text-gray-500 text-sm">Spotify</div>
        <div className="font-bold text-lg mb-1">Product designer</div>
        <div className="content-end text-gray-500 text-sm">Remote &middot; New York ,us &middot; Full-time</div>
     </div>
     <div className="content-end text-gray-600 text-sm">2 Weeks ago</div>
    </div>
=======
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm relative">
            <div className="absolute cursor-pointer top-4 right-4" > 
              <FontAwesomeIcon className="size-5 text-gray-300" icon={faHeart}/>
            </div>
           
        <div className="flex grow gap-4">
            <div className="content-center">
                <img className="size-16"
                src ="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"></img>
            </div>
            <div className="grow sm:flex">
                <div className="grow ">
                    <div className="text-gray-500 text-sm">Spotify</div>
                    <div className="font-bold text-lg mb-1">Product designer</div>
                    <div className="content-end text-gray-400 text-sm">
                      Remote &middot; New York ,us &middot; Full-time
                    </div>
                </div>
                <div className="content-end text-gray-600 text-sm">
                    2 Weeks ago
                </div>
            </div>   
            
        </div>
         
      </div>
    </>   
>>>>>>> d47166ce59f58c0dfd359a8c1e866ab184a4e2e3
  );
}
 