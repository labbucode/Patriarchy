import React from 'react'
import '../styles/Advantage.css'
import { useNavigate } from 'react-router-dom'

export default function Advantage() {
  const navigate = useNavigate();
  return (
    <div className='adv-main-container'>
    <div className='adv-container'>
    <h1 style={{'textAlign': 'center'}}>Advantage of Patriarchy</h1>
    <ul className='adv-ulist'>
    <li>Social Stability</li>
    <li>Family Structure</li>
    <li>Preservation of Cultural Values</li>
    </ul>
   
    </div>
    <div className="advantage-arrow-icon-right" onClick={() => navigate('/disadvantage')}>&#9654;</div>
    <div className="advantage-arrow-icon-left" onClick={() => navigate('/heropage')}>&#9664;</div>
    </div>
  )
}
