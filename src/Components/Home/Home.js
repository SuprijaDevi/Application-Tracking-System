import React from 'react';
import './Home.css'
// import WorkLoom from './Assets/WorkLoom.png'; 
const Home = () => {
    return(
        <div className="additional-content">
            <p style={{ fontSize: '50px', fontFamily: 'popins', letterSpacing: '2.5px' }}>INCREASE INTERVIEW <br></br>OPPORTUNITIES</p>
            <p style={{ fontSize: '20px', fontFamily: 'sans-serif', letterSpacing: '2px' }}>WorkLoom serves as a complimentary tool for job seekers,<br></br>
             offering a resume keyword scanner and application tracker.<br></br>
              Our intelligent system identifies and highlights missing skills<br></br> 
              and keywords on your resume in comparison to a given job<br></br> 
              description.</p>
              <img src= "./WorkLoom.png" alt="wl" className="small-image"/>
                <button className="primary-button1">Get Started</button>
                <div className="topBlur" />
        </div>
    )
}
export default Home;