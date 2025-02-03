import { useState } from 'react'

const QrCode = () => {
  const [img, setImg] = useState("");
  const [load, setLoad] = useState(false);
  const [qrData, setQrData] = useState("");
  const [qrSize, setQrsize] = useState("");

  function generate() {
    setLoad(true);
    try{
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`
      setImg(url)
    }catch(error){
      console.log("Error occured:");
    }finally{
      setLoad(false);
    }
  }
  async function download() {
    fetch(img)
    .then((response) =>response.blob())
    .then((blob) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);    })
    .catch(error => {
      console.log("Error To Download");
    })
  }
  return (
    <>
      <div className='app-container'>
       <h4>QrCode Downloader</h4>
       <img src={img} alt="" /> 
      <div className='getData'>
        <label htmlFor="dataInput">Enter the Data :</label>
        <input type="text" value={qrData} placeholder='Enter The Data' onChange={(e)=>setQrData(e.target.value)}/>
        <label htmlFor="sizeInput">Enter image size :</label>
        <input type="text" value={qrSize} placeholder='Enter the Image Size' onChange={(e)=>setQrsize(e.target.value)}/>
        <button className='generate' onClick={generate}>Generate Qrcode</button>
        <button className='download' onClick={download}>Download Qrcode</button>
      </div>
      </div>
    </>
  )
}

export default QrCode
