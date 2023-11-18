import React from 'react';
import '../styles/ContentPage.css'
import { useNavigate } from 'react-router-dom';

const IndexPage = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="table-of-contents">
    <h2>Table of Contents</h2>
    <div className='table-container'> 
    <div className='table-list'>
        <p className='table-list-item'>Introduction</p>
        <p className='table-list-item'>Advantage</p>
        <p className='table-list-item'>Disadvantages</p>
        <p className='table-list-item'>Additional Details</p>
        <p className='table-list-item'>Reference</p>
    </div>
    
    <div className='table-list'> 
        <p className='table-list-item'>1</p>
        <p className='table-list-item'>2</p>
        <p className='table-list-item'>3</p>
        <p className='table-list-item'>4</p>
        <p className='table-list-item'>5</p>
    </div>
    </div>
    
  </div>
    <div className="content-arrow-icon-right" onClick={() => navigate('/heropage')}>&#9654;</div>
    <div className="content-arrow-icon-left" onClick={() => navigate('/')}>&#9664;</div>
    </>
  );
};

export default IndexPage;
