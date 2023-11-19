import React from 'react';
import '../styles/ContentPage.css'
import { useNavigate } from 'react-router-dom';

const IndexPage = () => {
  const navigate = useNavigate();
  return (
  
    <div className="table-of-contents">
    <h2>Table of Contents</h2>
    <div className='table-container'> 
    <div className='table-list'>
        <p className='table-list-item'>1. Introduction</p>
        <p className='table-list-item'>2. Advantage</p>
        <p className='table-list-item'>3. Disadvantages</p>
        <p className='table-list-item'>4. Additional Details</p>
        <p className='table-list-item'>5. Reference</p>
    </div>
   
    </div>
    

    <div className="content-arrow-icon-right" onClick={() => navigate('/heropage')}>&#9654;</div>
    <div className="content-arrow-icon-left" onClick={() => navigate('/')}>&#9664;</div>

    </div>
  );
};

export default IndexPage;
