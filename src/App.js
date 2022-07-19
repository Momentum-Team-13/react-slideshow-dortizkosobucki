import './App.css'
import SlideShow from './slideshow';
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const getData = () => {
    fetch('film-data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }

  useEffect(() => {
    getData()
  }, [])
  console.log(data)
  return (
    <div className="slides" >
      <h1>Movie SlideShow</h1>
      {data ? <SlideShow films={data} /> : <h2>Loading, Please Wait</h2>}
    </div >
  )
}

export default App