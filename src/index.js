import React,{useRef} from 'react';
import {Route,Routes,Link,BrowserRouter as Router,useLocation,useNavigate} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import Main from './main';

const root = ReactDOM.createRoot(document.getElementById('root'));

function FetchData(){
  const location=useLocation();
  const navigate=useNavigate();
  const getImg=useRef("");
  const downloadPDF=()=>{
    const inputData=getImg.current;
    html2canvas(getImg.current)
    .then((canvas)=>{
      const imgData=canvas.toDataURL("image/png");
      const pdf=new jsPDF("p","px","a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData,"JPEG", (pageWidth/2)-100,100, 200, 100);
      pdf.save("download.pdf");
    })
  }
  return(
    <>
    <div>
      <div className="cardDiv" ref={getImg}>
          <h1>CROP</h1>
        <div className="detailsDiv">
          <p>Name : {location.state.data.name}</p>
          <p>ID : {location.state.data._id}</p>
          <p>Email : {location.state.data.email}</p>
          <p>Rating : {location.state.data.rating}</p>
        </div>  
      </div>
    </div>
      <button className="historyBtn" onClick={()=>navigate(-1)}>Back</button>
      <button className="pdfBtn" onClick={downloadPDF}>Download</button>
    </>
  )
}
root.render(
 <Router>
  <Routes>
    <Route exact path="/" element={<Main/>}></Route>
    <Route exact path="/generateCard" element={<FetchData/>}></Route>
  </Routes>
 </Router>
)
