import { useRef, useState, useEffect } from "react";
import { RxSpeakerOff, RxSpeakerLoud } from "react-icons/rx";
import Music from "../../../src/Sound/GarciaIntro_01.mp3";

export default function SimpleSpeaker() {
  const audioRef = useRef(null);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    // Create audio object ONCE
    const audio = new Audio(Music);
    audio.volume = 0.8;
    audio.loop = true;

    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  const toggleSound = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (!isOn) {
      audio.play();
    } else {
      audio.pause();
    }

    setIsOn(!isOn);
  };

  return (
    <button
      onClick={toggleSound}
      className={`p-3 rounded-full transition-all duration-300 
        ${isOn ? "text-green-500" : "text-gray-500"}`}
    >
      {isOn ? <RxSpeakerLoud size={35} /> : <RxSpeakerOff size={35} />}
    </button>
  );
}
