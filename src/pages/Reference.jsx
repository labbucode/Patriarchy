import React from 'react'
import '../styles/Reference.css'
import { useNavigate } from 'react-router-dom'

export default function Reference() {
  const navigate = useNavigate();
  return (
    <div className='ref-main-container'>
    <div className='ref-container'>
    <h1 style={{"marginBottom": '4%'}}>Reference</h1>
    <ul>
    <li style={{"margin": '2%'}}><a href="https://www.youtube.com/watch?v=odt5hwIOeLI" style={{'color': 'white'}}>Youtube Channel 1</a></li>
    <li style={{"margin": '2%'}}><a href="https://www.youtube.com/watch?v=T99kq8Kj22U" style={{'color': 'white'}}>Youtube Channel 2</a></li>
    <li style={{"margin": '2%'}}><a href="https://www.youtube.com/watch?v=sLWKkFd5WEQ" style={{'color': 'white'}}>Youtube Channel 3</a></li>
    </ul>
   
    </div>
    <div className="ref-arrow-icon-left" onClick={() => navigate('/disadvantage')}>&#9664;</div>
    </div>
  )
}
