import React,{useState,useEffect} from 'react';
import App from './App';
import QRscanner from './scanner';

export default function Main(){
const [showDiv,setDiv]=useState(false);
const myFunc=()=>{
  if(showDiv){
    return <App className="appContain"/>
  }
  else{
    return <QRscanner className="readingHead"/>
  }
}
return(
  <div>
    <div className="container">
    <div>

    </div>
    <div className="elemtCont">
      {myFunc()}
      <button className="scanBtn" onClick={()=>{
        setDiv(true)
      }}>Generate QR Code</button><br/>
      <button className="scanBtn" onClick={()=>{
        setDiv(false)
      }}>Scan QR Code</button>
    </div>
  </div> 
  </div>
      )
}


