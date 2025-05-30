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
        <div className="item"><img src='/images/goa.jpeg'/>
        <div className="item-overlay">
          <h2>Goa, India</h2>
          <p>Beaches, parties & seafood</p>
        </div>
        </div>
        <div className="item"><img src='images/darjeeling.jpeg'/>
        <div className="item-overlay">
          <h2>Darjeeling, India</h2>
          <p>Misty hills, scenic views, and tea gardens.</p>
        </div>
        </div>
        <div className="item"><img src='/images/manali.jpg'/>
        <div className="item-overlay">
            <h2>Manali, India</h2>
            <p>Snowy hills, perfect for hiking and skiing.</p>
          </div>
        </div>
        <div className="item"><img src='/images/leh.jpeg'/>
        <div className="item-overlay">
          <h2>Leh-Ladakh, India</h2>
          <p>High altitude deserts, monasteries, and biking trails.</p>
        </div>
        </div>
        <div className="item"><img src='/images/paris.jpg'/>
        <div className="item-overlay">
          <h2>Paris, France</h2>
          <p>The city of love, art, and iconic monuments.</p>
        </div>
        </div>
        <div className="item"><img src='/images/bali.jpeg'/>
        <div className="item-overlay">
          <h2>Bali, Indonesia</h2>
          <p>Tropical beaches, temples, and vibrant culture.</p>
        </div>
        </div>
        <div className="about">
          <h2>About NAYSHA</h2>
          <p>
            NAYSHA is your smart travel companion that helps you discover amazing places based on your budget. 
            Just enter how much you’re willing to spend, and we’ll recommend destinations that match your needs. 
            Simple, fast, and budget-friendly — travel planning made easy!
          </p>
        </div>

        
      </div>
      

    </div>
  );
}

export default Home;
