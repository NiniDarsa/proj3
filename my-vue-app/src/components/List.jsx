import React from "react";
import Item from "./Item";
function List({library,songs,setCurrentSong,setSongs,isPlaying,audioRef}){
    return(
        <div className={`list ${library? "active" : ""}`}>
        <h1 className="header">music list:</h1>
        {songs.map((song)=>{
            return <Item 
                    song={song}
                    key={song.id}
                    setCurrentSong={setCurrentSong}
                    songs={songs}
                    setSongs={setSongs}
                    isPlaying={isPlaying}
                    audioRef={audioRef}
                     />
        })}
        </div>
    )
}
export default List