import React from 'react';
import '../styles/ContentPage.css'
// import IndexCoverImg from '../assets/bgImg.avif'


const IndexPage = () => {
  return (
    <>
    <div className="table-of-contents">
      {/* <img
        className="cover-image"
        src={IndexCoverImg}
        alt="IndexCoverImg"
      /> */}
    <h2>Table of Contents</h2>
    <div className='table-container'> 
    <div className='list1'>
        <p className='list'>Introduction</p>
        <p className='list'>Advantage</p>
        <p className='list'>Disadvantages</p>
        <p className='list'>Additional Details</p>
        <p className='list'>Reference</p>
    </div>
    
    <div className='list1'> 
        <p className='list'>1</p>
        <p className='list'>2</p>
        <p className='list'>3</p>
        <p className='list'>4</p>
        <p className='list'>5</p>
    </div>
    
    </div>
    
  </div>
    <div className="arrow-icon-right">&#9654;</div>
    <div className="arrow-icon-left">&#9664;</div>
    </>
  );
};

export default IndexPage;
