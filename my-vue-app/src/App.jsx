import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { useRef } from 'react';
import "./styles/app.scss"
import Song from './components/song'
import Player from './components/Player'
import Data from './data'
import List from './components/List'
import Nav from './components/nav';

function App() {
  const[songs,setSongs]=useState(Data())
  const[currentSong,setCurrentSong]=useState(songs[0])
  const[isPlaying,setIsPlaying]=useState(false)
  const[library,setLybrary]=useState(false)

   /*for audio html tag */
   const audioRef=useRef(null)

    /*for currentTime-duration */
    const[songInfo,setSongInfo]=useState({
      current:0,
      duration:0,
      percentage:0})
    function handleTime(e){
        const current=e.target.currentTime
        const duration=e.target.duration
        
        const percentage=Math.floor((Math.floor(current)/Math.floor(duration))*100)
        console.log(percentage)
        setSongInfo({...songInfo,
          current:current,
          duration:duration,
          percentage:percentage})    
    }

    /*AUDIO ended amis gamoa error?????????????? */
    function  handleEnded(){
      const currentindx=songs.findIndex((s)=>{
        return s.id===currentSong.id
      })
      if(currentindx>=songs.length-1){
        setCurrentSong(songs[0])
      }
      setCurrentSong(songs[currentindx+1])

      if(isPlaying){
        var audioPromise=audioRef.current.play()
        if (audioPromise !== undefined) {
          audioPromise.then((data)=>{
            audioRef.current.play()
          })
      }
    }
    
    }
  return (
    <div className='app'>
     <Nav library={library} setLybrary={setLybrary}/>
     <Song currentSong={currentSong}/>
     <Player 
     isPlaying={isPlaying} 
     setIsPlaying={setIsPlaying} 
     currentSong={currentSong}
     audioRef={audioRef}
     songInfo={songInfo}
     setSongInfo={setSongInfo}
     songs={songs}
     setCurrentSong={setCurrentSong}
     setSongs={setSongs}
     />
     <List 
     isPlaying={isPlaying} 
     setSongs={setSongs} 
     setCurrentSong={setCurrentSong} 
     songs={songs} 
     audioRef={audioRef}
     library={library}
     />

     <audio
     onLoadedData={handleTime} 
     onTimeUpdate={handleTime} 
     ref={audioRef} 
     src={currentSong.audio}
     onEnded={handleEnded}
     ></audio>
    </div>
  )
}

export default App
