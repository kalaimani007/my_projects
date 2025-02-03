import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import QrCode from '../projects/QrCode'
import '../css/qrcode.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QrCode />
  </StrictMode>,
)
