import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [activeKey, setActiveKey] = useState("");
  const soundProps = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];
  function playSound(selector: string) {
    const audio = document.getElementById(selector) as HTMLAudioElement;
   audio.play()
   setActiveKey(selector);
  }
  useEffect(()=>{
    document.addEventListener('keydown', (event)=>{
      playSound(event.key.toUpperCase())
    })
  },[])
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{activeKey}</div>
        <div className="drum-pads">
          {soundProps.map((soundProp) => (
            <div 
            className="drum-pad" 
            onClick={()=>playSound(soundProp.text)}
            id={soundProp.src}
            key={soundProp.text}
            >
              {soundProp.text}
              <audio
                className="clip"
                src={soundProp.src}
                id={soundProp.text}
              ></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
