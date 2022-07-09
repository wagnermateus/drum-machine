import { InputHTMLAttributes, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [activeKey, setActiveKey] = useState("");
  const [volume, setVolume] = useState(100);
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
    audio.play();
    setActiveKey(selector);
    setTimeout(() => {
      setActiveKey("");
    }, 500); 
    audio.volume = volume/100; 
  }
  
  
  
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playSound(event.key.toUpperCase());
    });
  }, []);
  return (
    <div className="App">
      <div id="drum-machine" className="drum-machine">
        <div className="controls">
          <div id="display" className="display">
            {activeKey} 
          </div>
          <div>
             <input 
             type="range" 
             min="0" max="100" 
             step="1" 
             onChange={((event)=>{setVolume(Number(event.target.value))})}
             />
          </div>
        </div>
        <div className="drum-pads">
          {soundProps.map((soundProp) => (
            <div
              className={
                activeKey === soundProp.text ? "activeKey" : "drum-pad"
              }
              onClick={() => playSound(soundProp.text)}
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
      <p className="assignature">Developed by @WagnerMateus</p>
    </div>
  );
}

export default App;
