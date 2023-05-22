import './App.css';
import React, { useEffect, useState } from 'react';
import video from './hot-balloons.mp4';

// ВАРИАНТ I

// function App() {

//   const [advice, setAdvice] = useState('');

//   useEffect(() => {
//     const getAdvice = async () => {
//       const response = await fetch("http://www.boredapi.com/api/activity/");
//       const data = await response.json();
//       console.log(data.activity);
//       setAdvice(data.activity)
//     } 
//     getAdvice();
//   }, [])

//   return (
//     <div>

//       <div className='container'>
//         <video autoPlay muted loop><source src={video} type="video/mp4"/></video>
//         <h1>SAY <spam>NO</spam> TO BOREDOM</h1>
//       </div>

//       <div className='container'>
//         <h2>{advice}</h2>
//         <button onClick={getAdvice}><img src="https://img.icons8.com/?size=512&id=47773&format=png" className='icon' alt='icon'/>GET AN IDEA</button>
//       </div>

//     </div>
//   );
// }


//ВАРИАНТ II

function App() {

  const [advice, setAdvice] = useState('');

  const getAdvice = async() => {
    const response = await fetch('http://www.boredapi.com/api/activity/');
    const data = await response.json();
    console.log(data.activity);
    setAdvice(data.activity)
  }

  useEffect(() => {
    getAdvice();
  }, [])

  return(
    <div>

      <div className='container'>
        <video autoPlay muted loop><source src={video}/></video>
        <h1>SAY <spam>NO</spam> TO BOREDOM</h1>
      </div>

      <div className='container'>
        <button onClick={getAdvice}><img src="https://img.icons8.com/?size=512&id=47773&format=png" className='icon' alt='icon'/>GET AN ADVICE</button>
      </div>

      <div className='container'>
        <h2>{advice}</h2>
      </div>

    </div>
  );

}


export default App;