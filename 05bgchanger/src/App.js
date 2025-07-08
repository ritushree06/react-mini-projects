import './App.css';
import {useState} from 'react';



function App() {
  const [color, setColor] = useState("beige");

  // const changeColor=(color)=>{
  //   setColor(color);
  // }

  return (
    <div class='main' style={{ backgroundColor: color }}>
      <div class='container'>
        <div class='buttons'>
        <button onClick={()=>setColor('red')} style={{backgroundColor:'red'}}>Red</button>
        <button onClick={()=>setColor('blue')} style={{backgroundColor:'blue'}}>Blue</button>
        <button onClick={()=>setColor('green')}style={{backgroundColor:'green'}}>Green</button>
        {/* <button onClick={()=>changeColor('red')}>Red</button>
        <button onClick={()=>changeColor('blue')}>Blue</button>
        <button onClick={()=>changeColor('green')}>Green</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
