import React from 'react'
import '../styles/Advantage.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../component/Footer';
import Header from '../component/Header';

export default function Advantage() {
  const navigate = useNavigate();
  return (
    <>
    <Header />
    <div className='adv-main-container'>
    <div className='adv-container'>
    <h1 className='adv-h2'>Advantages of Patriarchy</h1>
    <ul >
    <li className='adv-list'>Social Stability</li>
    <li className='adv-list'>Family Structure</li>
    <li className='adv-list'>Preservation of Cultural Values</li>
    </ul>
   
    </div>
    </div>
    <div className="advantage-arrow-icon-right" onClick={() => navigate('/disadvantage')}>&#9654;</div>
    <div className="advantage-arrow-icon-left" onClick={() => navigate('/heropage')}>&#9664;</div>
 
    <Footer />
    </>
  )
}
