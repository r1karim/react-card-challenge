import React from 'react';
import mypic from "./mypic.jpg";
import './Businesscard.css';
import bg from "./bg.jpg";

const Businesscard = () => {
  return (
    <div className="business-card">
        <img src={bg} id="background" />
        <div className='content'>
          <img src={mypic}  class="pic" />
          <div className='profile'>
            <h2>Karim Benhalima<span>Software developer</span></h2>
            <p class="bio">
              I am a Computer science student, and a selft-taught webdeveloper.
            </p>
            <div style={{color: '#999', fontSize:'14px'}}>Experienced in:</div>
            <ul>
              <li>Python</li>
              <li>Flask</li>
              <li>React</li>
            </ul>
            <button>Contact me</button>
          </div>
        </div>
    </div>
  );
};

export default Businesscard;
