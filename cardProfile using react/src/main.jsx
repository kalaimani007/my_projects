import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import '../css/cardProfile.css'
// import CardProfile from '../projects/CardProfile'
import QrCode from '../projects/QrCode'
import '../css/qrcode.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <CardProfile />
      */}
     <QrCode />
  </StrictMode>,
)
