import React from 'react'
import '../styles/HeroPage.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../component/Footer';
import Header from '../component/Header';
import '../styles/Header.css'


export default function HeroPage() {
  const navigate = useNavigate();
  return (
    <>
    <Header />
    <div className='hero-container'>
      <div className='container'>
      <h1 className='hero-h2'>Introduction of Patriarchy</h1>
        <p className='para'>Patriarchy is a Social System in which, males hold primary power in the domain of the family, fathers or father-figure hold authority
       over women and children. 
        </p>
      </div>
   
      </div>
    <div className="hero-arrow-icon-right" onClick={() => navigate('/advantage')}>&#9654;</div>
    <div className="hero-arrow-icon-left" onClick={() => navigate('/indexpage')}>&#9664;</div>   
    
     <Footer />
     </>
  )
}
