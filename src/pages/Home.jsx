import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">

      <div className="video-container">
        <video className="bg-video" autoPlay muted loop>
          <source src="/images/bgVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay">
          <h1>WELCOME TO NAYSHA</h1>
          <button onClick={() => navigate('/form')}>
            Get Started
          </button>
        </div>
      </div>
      <div className='destination'>
        <h1>TOP RECOMMENDED DESTINATION</h1>
      </div>
      <div className="container">
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
        <div className="item">6</div>
        
      </div>

    </div>
  );
}

export default Home;
