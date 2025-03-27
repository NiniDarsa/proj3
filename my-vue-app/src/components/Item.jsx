import React from "react";
function Item({song, setCurrentSong,songs,setSongs,isPlaying,audioRef}){

    /*choose current music */
    function handleClick(e){
      var newSong=songs.filter((element)=>{
       return element.id===song.id
      })
      setCurrentSong(newSong[0])

      /*active */
      var newArray=songs.map((element)=>{
           if(element.id===song.id){
            return{
                ...element,
                active:true
            }
           }else{
            return{
                ...element,
                active:false
            }
           }
      })
      setSongs(newArray)

      /*start automatically */
      if(isPlaying){
        var audioPromise=audioRef.current.play()
        if (audioPromise !== undefined) {
          audioPromise.then((data)=>{
            audioRef.current.play()
          })
      }
    }

    }
    return(
        <div onClick={handleClick} className={`item  ${song.active ? 'selected' : ''}`}>
           <img  alt={song.name} src={song.cover}></img>
           <div className="details">
           <h1>{song.name}</h1>
           <h2>{song.artist}</h2>
           </div>
        </div>
    )
}
export default Item
