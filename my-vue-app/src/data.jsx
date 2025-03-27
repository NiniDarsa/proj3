import React from "react";
import { v4 as uuidv4 } from 'uuid'
function Data(){
    return(
        [
            {
                name: "Beaver Creek",
                cover:"https://shop.chillhop.com/cdn/shop/files/SleepyFish_LikeTheSky_OrSomthingElse_BackLightBlueMockup.webp?v=1726134275&width=540",
                artist: "Aso, Middle School, Aviino",
                audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
                color: ["#205950", "#2ab3bf"],
                id: uuidv4(),
                active: true,
              },
              {
                name:"Parasol",
                artist:"Plusma",
                audio:"https://stream.chillhop.com/mp3/28901",
                color:["#F1E","white"],
                id:uuidv4(),
                cover:"https://cms.chillhop.com/media/77720/squarel0c8e7b2883dc09b899fc4bff837ffc31c5277c66.jpg",
                active:false
              },
              {
                name: "Daylight",
                cover:
                  "https://shop.chillhop.com/cdn/shop/files/Summer24VinylYellowTRMockUpGatefoldInside.webp?v=1712775429&width=540",
                artist: "Aiguille",
                audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
              },
              {
                name: "Keep Going",
                cover:
                  "https://cms.chillhop.com/media/30242/squareld7c0bd347f56540babd9dd85454b93a89df84a15.jpg",
                artist: "Swørn",
                audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
                color: ["#CD607D", "#c94043"],
                id: uuidv4(),
                active: false,
              },
              {
                name: "Nightfall",
                cover:
                  "https://cms.chillhop.com/media/77821/squarelf9d8e2b0b25e5cea0517e11d5c8da28b6adb576e.jpg",
                artist: "Aiguille",
                audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
                color: ["green", "blue"],
                id: uuidv4(),
                active: false,
              },
              {
                name: "Reflection",
                cover:"https://cms.chillhop.com/media/1236/squarelb70868465c241df120a083cd03c6b2aa715a05ff.jpg", 
                artist: "Swørn",
                audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
                color: ["pink", "#c94043"],
                id: uuidv4(),
                active: false,
              },
              {
                name: "Under the City Stars",
                cover:
                  "https://cms.chillhop.com/media/824/squarel53eef8b1ac9bf40038b2b5dc7ca2d13fc19cf95e.jpg",
                artist: "Aso, Middle School, Aviino",
                audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
                color: ["yellow", "red"],
                id: uuidv4(),
                active: false,
              }
        ]
    )
}
export default Data