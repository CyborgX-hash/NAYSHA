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
        {[
          { img: '/images/goa.jpeg', title: 'Goa, India', desc: 'Beaches, parties & seafood' },
          { img: '/images/darjeeling.jpeg', title: 'Darjeeling, India', desc: 'Misty hills, scenic views, and tea gardens.' },
          { img: '/images/manali.jpg', title: 'Manali, India', desc: 'Snowy hills, perfect for hiking and skiing.' },
          { img: '/images/leh.jpeg', title: 'Leh-Ladakh, India', desc: 'High altitude deserts, monasteries, and biking trails.' },
          { img: '/images/paris.jpg', title: 'Paris, France', desc: 'The city of love, art, and iconic monuments.' },
          { img: '/images/bali.jpeg', title: 'Bali, Indonesia', desc: 'Tropical beaches, temples, and vibrant culture.' }
        ].map((place, i) => (
          <div className="item" key={i}>
            <img src={place.img} alt={place.title} />
            <div className="item-overlay">
              <h2>{place.title}</h2>
              <p>{place.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="modern-footer">
        <div className="footer-content">
          <div className="footer-left">
            <h2>ABOUT NAYSHA</h2>
            <p>
              NAYSHA is your smart travel companion that helps you discover amazing places
              based on your budget. Just enter how much you’re willing to spend, and we’ll
              recommend destinations that match your needs. Simple, fast, and budget-friendly —
              travel planning made easy!
            </p>
          </div>
          <div className="footer-right">
            <h2>CONTACT US</h2>
            <p>📧 Naysha713@gmail.com</p>
            <p>📞 8828 1570 7021</p>
            <p>📍 Newton School Of Technology Delhi NCR.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src="/images/insta.png" alt="Instagram" /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src="/images/facebook.png" alt="Facebook" /></a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><img src="/images/yt.png" alt="Twitter" /></a>
          </div>
          <p>© 2025 Naysha. All Rights Reserved.</p>
          <p>Made By Saksham</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
