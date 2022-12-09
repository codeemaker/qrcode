import React,{useState,useEffect} from "react";
import QRCode from "qrcode";

function App() { 
  const [user, setUser] = useState("");
  const fetchData = () => {
    const url=fetch("http://localhost:4000/qrcode",{
      method:"POST",
      headers:{
        'content-Type': 'application/json'
      },
      body:JSON.stringify({name:"As expected"})
    })
    url.then(res=>res.json())
    .then((res)=>{
     let sdata=btoa(JSON.stringify(res[0])).split('')
     let arr=[]
     let hash="";
     let dhash="";
     let slength=sdata.length-2
     for(let i=slength;i>=0;i--){
      if(i==40){
        //console.log(sdata[i])
        hash+=sdata[i]+"zxcv"
      }
      else{
        hash+=sdata[i]
      }
     }
    //console.log(hash.replace("zxcv",""));
     //console.log(hash)
      return QRCode.toDataURL(hash)
      .then((res)=>{
        setUser(res)
      })
      
    })
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
   <div className="qrContain">
   <img src={user} alt="imgData" className="qrValue"/>
   </div>
  );
}

export default App;
