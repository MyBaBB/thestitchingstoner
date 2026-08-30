

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './EqualizerControl.css'

const EqualizerControl = () => {
  const [volume, setVolume] = useState(75)
  const [isMuted, setIsMuted] = useState(false)
  const [activePreset, setActivePreset] = useState('Flat')

  // EQ bands in Hz: 60, 230, 910, 4k, 14k
  const [eqValues, setEqValues] = useState([0, 0, 0, 0, 0])

  const presets = {
    Flat: [0, 0, 0, 0, 0],
    'Bass Boost': [6, 4, 0, 0, -2],
    Vocal: [-2, 2, 5, 3, -1],
    Treble: [-3, -1, 1, 4, 6],
  }

  const handleVolumeChange = (e) => {
    setVolume(Number(e.target.value))
    if (isMuted) setIsMuted(false)
  }

  const handleEqChange = (index, val) => {
    const updated = [...eqValues]
    updated[index] = Number(val)
    setEqValues(updated)
    setActivePreset('Custom')
  }

  const applyPreset = (name) => {
    setActivePreset(name)
    setEqValues(presets[name])
  }

  const toggleMute = () => setIsMuted(!isMuted)

  return (
    <div className="audio-card">
      {/* Header & Master Volume */}
      <div className="card-header">
        <h2>Audio Master</h2>
        <button 
          className={`mute-btn ${isMuted ? 'muted' : ''}`} 
          onClick={toggleMute}
          aria-label="Toggle Mute"
        >
          {isMuted || volume === 0 ? '🔇' : volume < 50 ? '🔉' : '🔊'}
        </button>
      </div>

      <div className="master-slider-container">
        <input
          type="range"
          min="0"
          max="100"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="master-slider"
          style={{
            background: `linear-gradient(to right, #6366f1 ${isMuted ? 0 : volume}%, #334155 ${isMuted ? 0 : volume}%)`
          }}
        />
        <div className="volume-readout">{isMuted ? 'MUTED' : `${volume}%`}</div>
      </div>

      {/* EQ Presets */}
      <div className="presets-row">
        {Object.keys(presets).map((name) => (
          <button
            key={name}
            className={`preset-chip ${activePreset === name ? 'active' : ''}`}
            onClick={() => applyPreset(name)}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Equalizer Faders */}
      <div className="eq-container">
        {['60Hz', '230Hz', '910Hz', '4kHz', '14kHz'].map((freq, idx) => (
          <div key={freq} className="eq-channel">
            <span className="db-readout">
              {eqValues[idx] > 0 ? `+${eqValues[idx]}` : eqValues[idx]}dB
            </span>
            <div className="slider-wrapper">
              <input
                type="range"
                min="-12"
                max="12"
                step="1"
                value={eqValues[idx]}
                onChange={(e) => handleEqChange(idx, e.target.value)}
                className="eq-slider"
              />
            </div>
            <span className="freq-label">{freq}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EqualizerControl