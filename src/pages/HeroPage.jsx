import React from 'react'
import '../styles/HeroPage.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../component/Footer';


export default function HeroPage() {
  const navigate = useNavigate();
  return (
    <>
    <div className='hero-container'>
      <div className='container'>
      <h1 style={{"marginBottom": '3%', "font-size": "3.5rem"}}>Patriarchy</h1>
        <p className='para'>Patriarchy is a Social System in which, males hold primary power in the domain of the family, fathers or father-figure hold authority
       over women and children. 
        </p>
      </div>
    <h2 style={{"textAlign": 'center'}}>CHARACTERISTICS OF PATRIARCHY</h2>
    <ul className='ulist'>
    <li>Male Dominance</li>
    <li>Male Identification</li>
    <li>Male Centeredness</li>
    <li>Obesession with Control</li>
    <li>Oppression of Women</li>
    </ul>
   
    <div className="hero-arrow-icon-right" onClick={() => navigate('/advantage')}>&#9654;</div>
    <div className="hero-arrow-icon-left" onClick={() => navigate('/indexpage')}>&#9664;</div>   
    </div>
     <Footer />
     </>
  )
}
