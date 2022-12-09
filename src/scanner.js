import React, {useState,useEffect} from 'react'
import QrScan from 'modern-react-qr-reader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function QRscanner() {
  const Navigate=useNavigate();
    const handleScan = data => {
      let received=false;
        if (data) {
          received=true
            mkdata(data)
        }
    }
    const handleError = err => {
    console.error(err)
    }
    function mkdata(data){
      let dstring=data.replace("zxcv","");
      let decode="";
      let dlength=(dstring.length)-1;
      for(let i=dlength;i>=0;i--){
        decode+=dstring[i];
      }
     Navigate("/generateCard",{
      state:{
          data:JSON.parse(atob(decode+"="))
      }
     })
    }
    return (
      <div className="readerContain">
            <div>
                <QrScan delay={300} className="readerDiv" onError={handleError} onScan={handleScan}/>
            </div> 
      </div>  
    );
  }
  
  export default QRscanner;
  