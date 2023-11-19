import React from 'react'
import '../styles/DisAdvantage.css'
import '../styles/DisAdvantage.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../component/Footer'

export default function DisAdvantage() {
  const navigate = useNavigate();
  return (
    <>
    <div className='dis-main-container'>
    <div className='dis-container'>
    <h1 className='dis-h2'>Disadvantage of Patriarchy</h1>
    <ul className='dis-ulist'>
    <li>Oppression of women</li>
    <li>Wasted potential of women</li>
    <li>Enhances gender issues</li>
    </ul>
   
    </div>
    <div className="dis-arrow-icon-right" onClick={() => navigate('/reference')}>&#9654;</div>
    <div className="dis-arrow-icon-left" onClick={() => navigate('/advantage')}>&#9664;</div>
    </div>
    <Footer />
    </>
  )
}
