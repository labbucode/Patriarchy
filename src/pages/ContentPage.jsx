import React from 'react';
import '../styles/ContentPage.css'
import { useNavigate } from 'react-router-dom';
import Tablebg from '../assets/bgImg.avif'

const IndexPage = () => {
  const navigate = useNavigate();
  return (
  <div className='table-bg'>
    <img src={Tablebg} style={{opacity: 0.5}} />
    <div className="table-of-contents">
    <h2>Table of Contents</h2>
    <div className='table-container'> 
    <div className='table-list'>
        <p className='table-list-item'>1. Introduction</p>
        <p className='table-list-item'>2. Advantages</p>
        <p className='table-list-item'>3. Disadvantages</p>
        <p className='table-list-item'>5. References</p>
    </div>
   
    </div>
    

    <div className="content-arrow-icon-right" onClick={() => navigate('/heropage')}>&#9654;</div>
    <div className="content-arrow-icon-left" onClick={() => navigate('/')}>&#9664;</div>

    </div>
    </div>
  );
};

export default IndexPage;
