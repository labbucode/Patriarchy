import React from 'react'
import '../styles/HeroPage.css'

export default function HeroPage() {
  return (
    <div className='main-container'>
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
        
    </div>
  )
}
