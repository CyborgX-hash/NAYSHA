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
        <div className="item"><img src='/images/goa.jpeg' alt="Goa"/>
        <div className="item-overlay">
          <h2>Goa, India</h2>
          <p>Beaches, parties & seafood</p>
        </div>
        </div>
        <div className="item"><img src='images/darjeeling.jpeg' alt='dar'/>
        <div className="item-overlay">
          <h2>Darjeeling, India</h2>
          <p>Misty hills, scenic views, and tea gardens.</p>
        </div>
        </div>
        <div className="item"><img src='/images/manali.jpg' alt='manali'/>
        <div className="item-overlay">
            <h2>Manali, India</h2>
            <p>Snowy hills, perfect for hiking and skiing.</p>
          </div>
        </div>
        <div className="item"><img src='/images/leh.jpeg' alt='leh'/>
        <div className="item-overlay">
          <h2>Leh-Ladakh, India</h2>
          <p>High altitude deserts, monasteries, and biking trails.</p>
        </div>
        </div>
        <div className="item"><img src='/images/paris.jpg' alt='paris'/>
        <div className="item-overlay">
          <h2>Paris, France</h2>
          <p>The city of love, art, and iconic monuments.</p>
        </div>
        </div>
        <div className="item"><img src='/images/bali.jpeg' alt='bali'/>
        <div className="item-overlay">
          <h2>Bali, Indonesia</h2>
          <p>Tropical beaches, temples, and vibrant culture.</p>
        </div>
        </div>
        <div className="about">
          <h2>ABOUT NAYSHA</h2>
          <p>
            NAYSHA is your smart travel companion that helps you discover amazing places based on your budget. 
            Just enter how much you’re willing to spend, and we’ll recommend destinations that match your needs. 
            Simple, fast, and budget-friendly — travel planning made easy!
          </p>
          
          <h2>CONTACT US</h2>
          <p>Email :- Naysha713@gmail.com</p>
          <p>Ph No.:-  8828 1570 7021</p>
          <p>Location :- Newton School Of Technology Delhi NCR.</p>
          
        </div>
        <div className='footer'>
          <h2>Follow Us</h2>
          <a href='https://www.instagram.com/'><img src='/images/insta.png' alt='insta'/></a>
          <a href='https://www.youtube.com/'><img src='/images/yt.png' alt='youtube'/></a>

          <p>© 2025 Naysha.All Rights Reserved.</p>
        </div>
        <div>
      <p style={{color:"white",backgroundColor:'#333',fontFamily: 'Poppins',}}>Made By Saksham</p>
      </div>
        </div>
  </div>
  );
}

export default Home;
