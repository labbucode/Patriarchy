import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
const navigate = useNavigate();
  return (
    <header >
            <nav>
            <div className="nav-right">
              <h2>Topic: <span style={{"fontSize": "larger", "color": "black"}}>Patriarchy</span> </h2>
              </div>

                <div className="nav-left">
                    <div className="nav-menu">
                        <ul>
                            <li onClick={() => navigate('/heropage')}>Introduction</li>
                            <li onClick={() => navigate('/heropage')}>Characteries</li>
                            <li onClick={() => navigate('/advantage')}>Advantages</li>
                            <li onClick={() => navigate('/disadvantage')}>Disadvantages</li>
                            <li onClick={() => navigate('/disadvantage')}>Addtional Details</li>
                            <li onClick={() => navigate('/reference')}>References</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
  )
}
