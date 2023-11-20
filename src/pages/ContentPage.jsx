import React from 'react';
import '../styles/ContentPage.css'
import { useNavigate } from 'react-router-dom';
import Tablebg from '../assets/bgImg.avif'
import Header from '../component/Header'
import Footer from '../component/Footer'

const IndexPage = () => {
  const navigate = useNavigate();
  return (
    <>
  <Header />
  <div className='table-bg'> 
  {/* <img src={Tablebg}  className='img'/>  */}
    <div className='table-container'> 
    <h2 className='table-h2'>Table of Contents</h2>
    <div className='table-list'>
        <p className='table-list-item'>1.   Introduction</p>
        <p className='table-list-item'>2.   Characteries</p>
        <p className='table-list-item'>3.   Advantages</p>
        <p className='table-list-item'>4.   Disadvantages</p>
        <p className='table-list-item'>5.   Addtional Details</p>
        <p className='table-list-item'>6.   References</p>
    </div>
    
    </div>
   
    <div className="content-arrow-icon-right" onClick={() => navigate('/heropage')}>&#9654;</div>
    <div className="content-arrow-icon-left" onClick={() => navigate('/')}>&#9664;</div>

    
    </div>
    <Footer />
    </>
  );
};

export default IndexPage;
