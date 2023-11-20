import React from 'react'
import '../styles/Reference.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../component/Footer';
import Header from '../component/Header';

export default function Reference() {
  const navigate = useNavigate();
  return (
    <>
    <Header />
    <div className='ref-main-container'>
    <div className='ref-container'>
    <h2 className='ref-h2'>References</h2>
    <ul className='ref-ulist'>
    <li><a href="https://www.youtube.com/watch?v=odt5hwIOeLI" style={{'color': 'white'}}>Youtube Channel 1</a></li>
    <li><a href="https://www.youtube.com/watch?v=T99kq8Kj22U" style={{'color': 'white'}}>Youtube Channel 2</a></li>
    <li><a href="https://www.youtube.com/watch?v=sLWKkFd5WEQ" style={{'color': 'white'}}>Youtube Channel 3</a></li>
    </ul>
   
    </div>
    <div className="ref-arrow-icon-left" onClick={() => navigate('/disadvantage')}>&#9664;</div>
    </div>
    <Footer />
    </>
  )
}
