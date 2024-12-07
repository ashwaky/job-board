

export default function JobRow() {
  return (
    <div className="bg-white p-4 rounded shadow flex gap-4">
        
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
  );
}
 