import CoverImg from '../assets/patriarchy.webp';
import '../styles/CoverPage.css';

export default function CoverPage() {

  return (
    <div className="patriarchy-cover">
      <img
        className="cover-image"
        src={CoverImg}
        alt="Patriarchy Cover"
      />
      <div className="cover-overlay">
        <div className="cover-content">
          <div className="arrow-icon">&#9654;</div>
          <h1 className='title'>PATRIARCHY</h1>
          <p>Understanding the impact and challenges</p>
        </div>
      </div>
    </div>
  );
}
