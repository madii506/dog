import { useState } from 'react'
import './App.css'

function App() {
  const [selectedDog, setSelectedDog] = useState<number | null>(null)

  const dogs = [
    { name: 'Buddy', color: '#FFB347', emoji: '🐕' },
    { name: 'Luna', color: '#87CEEB', emoji: '🐩' },
    { name: 'Max', color: '#98D8C8', emoji: '🐶' },
    { name: 'Bella', color: '#F0A3FF', emoji: '🦮' },
  ]

  return (
    <div className="app">
      <header className="handdrawn-header">
        <h1 className="sketchy-title">🐾 Dog Cartoon World 🐾</h1>
        <p className="sketchy-subtitle">Handdrawn Style Adventures</p>
      </header>

      <div className="dogs-container">
        {dogs.map((dog, index) => (
          <div
            key={index}
            className={`dog-card ${selectedDog === index ? 'selected' : ''}`}
            onClick={() => setSelectedDog(selectedDog === index ? null : index)}
            style={{ '--dog-color': dog.color } as React.CSSProperties}
          >
            <div className="dog-illustration">
              <DogSVG color={dog.color} />
            </div>
            <h2 className="dog-name">{dog.name}</h2>
            <div className="dog-emoji">{dog.emoji}</div>
          </div>
        ))}
      </div>

      {selectedDog !== null && (
        <div className="dog-info sketchy-box">
          <h2>Meet {dogs[selectedDog].name}!</h2>
          <p>This playful pup loves to run, play, and make new friends!</p>
          <button className="sketchy-button" onClick={() => setSelectedDog(null)}>
            Close
          </button>
        </div>
      )}

      <footer className="handdrawn-footer">
        <p>Made with ❤️ and lots of tail wags!</p>
      </footer>
    </div>
  )
}

function DogSVG({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 200" className="dog-svg">
      {/* Dog body */}
      <ellipse cx="100" cy="130" rx="50" ry="40" fill={color} className="sketchy-shape" />
      
      {/* Dog head */}
      <circle cx="100" cy="80" r="45" fill={color} className="sketchy-shape" />
      
      {/* Snout */}
      <ellipse cx="100" cy="95" rx="20" ry="18" fill="#FFF8DC" className="sketchy-shape" />
      
      {/* Nose */}
      <ellipse cx="100" cy="100" rx="6" ry="5" fill="#000" />
      
      {/* Mouth */}
      <path d="M 100 105 Q 90 115 85 110" stroke="#000" strokeWidth="2" fill="none" className="sketchy-line" />
      <path d="M 100 105 Q 110 115 115 110" stroke="#000" strokeWidth="2" fill="none" className="sketchy-line" />
      
      {/* Eyes */}
      <circle cx="88" cy="75" r="8" fill="#000" />
      <circle cx="112" cy="75" r="8" fill="#000" />
      <circle cx="90" cy="73" r="3" fill="#FFF" />
      <circle cx="114" cy="73" r="3" fill="#FFF" />
      
      {/* Ears */}
      <ellipse cx="70" cy="70" rx="18" ry="30" fill={color} className="sketchy-shape" />
      <ellipse cx="130" cy="70" rx="18" ry="30" fill={color} className="sketchy-shape" />
      <ellipse cx="72" cy="72" rx="10" ry="15" fill="#8B4513" />
      <ellipse cx="128" cy="72" rx="10" ry="15" fill="#8B4513" />
      
      {/* Legs */}
      <ellipse cx="75" cy="160" rx="12" ry="30" fill={color} className="sketchy-shape" />
      <ellipse cx="125" cy="160" rx="12" ry="30" fill={color} className="sketchy-shape" />
      
      {/* Paws */}
      <ellipse cx="75" cy="180" rx="15" ry="10" fill="#654321" />
      <ellipse cx="125" cy="180" rx="15" ry="10" fill="#654321" />
      
      {/* Tail */}
      <path
        d="M 150 130 Q 170 110 180 100 Q 190 90 185 80"
        stroke={color}
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        className="sketchy-line"
      />
      
      {/* Collar */}
      <ellipse cx="100" cy="85" rx="35" ry="5" fill="#FFD700" />
      <circle cx="115" cy="85" r="3" fill="#FF6347" />
    </svg>
  )
}

export default App
