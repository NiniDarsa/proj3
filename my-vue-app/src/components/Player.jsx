import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faPlay, faPause, faChevronRight } from '@fortawesome/free-solid-svg-icons'


function Player({setSongs,setCurrentSong,songs,currentSong,isPlaying,setIsPlaying,audioRef,setSongInfo,songInfo}){
   
    /*pause-play */
    function handleClick(e){
        if(isPlaying){
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        }else{
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }
  

    /*Time Format */
    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        minutes = (minutes >= 10) ? minutes : "0" + minutes;
        var seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        return minutes + ":" + seconds;
      }
      /*for input change */
      function handleChange(e){
       console.log(e.target.value)
       /*value when we drag input */
       var newCurrentTime=e.target.value
       /*to change Time what we see */
       setSongInfo({...songInfo,current:newCurrentTime})
       /*To change actual audio */
       audioRef.current.currentTime=newCurrentTime

      }

      /*bachward and forward */
      async function handleForB(direction){
        var currentIndex=songs.findIndex((element)=>{
           return  element.id===currentSong.id
        })
      
        if(direction ==="forward"){
          if(currentIndex===songs.length-1){
            activeUpdate(songs[0])
           await setCurrentSong(songs[0])
         
           }else{
            activeUpdate(songs[currentIndex+1])
            await setCurrentSong(songs[(currentIndex+1)])
           
           }
          //setCurrentSong(songs[(currentIndex+1)%songs.length])
        }
        else{
            if(currentIndex===0){
              activeUpdate(songs[songs.length-1])
               await setCurrentSong(songs[songs.length-1])
                
               }else{
                activeUpdate(songs[currentIndex-1])//??????????????????
                await setCurrentSong(songs[(currentIndex-1)])
               
               }
        }
      }


      /*ACTIVE STATUS ????????????????????*/
      function activeUpdate(currentsong){
        var newSongs= songs.map((eachsong)=>{
          if( eachsong.id===currentsong.id){
           return{
               ...eachsong,
               active:true
           }
       }else{
               return{
                   ...eachsong,
                    active:false
               }
           
          }
          
     })
     setSongs(newSongs)
      }
      /*active status update 
      useEffect(()=>{
        var newSongs= songs.map((eachsong)=>{
            if( eachsong.id===currentSong.id){
             return{
                 ...eachsong,
                 active:true
             }
         }else{
                 return{
                     ...eachsong,
                      active:false
                 }
             
            }
            
       })
       setSongs(newSongs)
    },[currentSong])

    /*autoplay if playing ?????????????????????????????*/
    if(isPlaying){
        var audioPromise=audioRef.current.play()
        if (audioPromise !== undefined) {
          audioPromise.then((data)=>{
            audioRef.current.play()
          })
      }
    }
    const styles = { 
        transform: `translate(${songInfo.percentage-100}%,-50%)` ,
        backgroundImage: `linear-gradient(to right,${currentSong.color[0]}, ${currentSong.color[1]} )`
    };
     
    return(
        <div className="player-container">
            <div className="timer-container">
                <p>{formatTime(songInfo.current)}</p>
                <div className="container">
                 <input 
                //???????????????
                onInput={handleChange}
                onChange={handleChange} 
                
                min={0} 
                max={songInfo.duration||0} 
                value={songInfo.current} //UPDAITDEBA YOVEL SETSONGINFOZE
                type="range"/>
                <div style={styles} className="onTop"></div>
                </div>

                <p>{songInfo.duration?formatTime(songInfo.duration):'0:00'}</p>
            </div>
            <div className="control-container">
              <FontAwesomeIcon size="2x"icon={faChevronLeft} onClick={()=>{handleForB("backward")}}/>
              <FontAwesomeIcon size="2x"icon={isPlaying?faPause:faPlay} 
              onClick={handleClick} />
              <FontAwesomeIcon size="2x"icon={faChevronRight} onClick={()=>{handleForB("forward")}} />
            </div>
           
        </div>
    )
}
export default Player