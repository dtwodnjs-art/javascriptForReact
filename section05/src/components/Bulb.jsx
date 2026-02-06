import { useState } from "react";

const Bulb = ()=>{
  const onLightClick = (e) => {setLight(light === 'ON' ? 'OFF': 'ON')}



  return <>
  
  <div>
    {light === 'ON' ?(
<h1 style={{backgroundColor:'orange'}}>Bulb 컴포 ON</h1>
    ):(
<h1 style={{backgroundColor:'blue'}}>Bulb 컴포 OFF</h1>


    )}
    <p>rander {console.log('rander')}</p>
    <button type="button" onClick={onLightClick}>{light === 'ON' ? 'OFF': 'ON'}</button>
    
  </div>
  </>
}

export default Bulb;