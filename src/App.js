import './App.css'
import { useState, useEffect } from 'react'
import filmInfo from './movie-slides'
import Navigation from './navigation'

function App() {
  // const [slide, setSlide] = useState(0);
  // useEffect(() => {
  // });
  return (
    <div className="slides-app">
      <h1>slideshow component</h1>
      {/* <button onClick={() => setSlide(slide + 1)}>Next Card</button> */}
      <filmInfo />
      <Navigation />
    </div>
  )
}

export default App
