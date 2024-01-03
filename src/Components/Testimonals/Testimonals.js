import React, { useRef } from "react";
import './Testimonals.css';
import { Rating } from '@mui/material';

const Testimonial = () => {
  const containerRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section className="T-container" id="about">
      <h2 className="T-title">Testimonials</h2>
      <div className="T-content" ref={containerRef}>
        {/* <button className="scroll-button" onClick={() => scroll(-200)}>
          {"<"}
        </button> */}
        <div className="T-aboutItems">
          <li className="T-aboutItem">
            <div className="T-aboutItemText">
              <h3>Michelle Leitzler</h3>
              <Rating name="half-rating-read" defaultValue={5} precision={.5} readOnly style={{ fontSize: '5px' }}/>
              <p>WorkLoom helped me to achieve my <br></br>dream job!</p>
            </div>
          </li>
          <li className="T-aboutItem">
            <div className="T-aboutItemText">
              <h3>Martin Rosen</h3>
              <Rating name="half-rating-read" defaultValue={5} precision={.5} readOnly style={{ fontSize: '5px' }}/>
              <p>WorkLoom tells me exactly which skills <br></br>and keywords are missing.</p>
            </div>
          </li>
          <li className="T-aboutItem">
             <div className="T-aboutItemText">
               <h3>Kallie Pieterse</h3>
               <Rating name="half-rating-read" defaultValue={5} precision={.5} readOnly style={{ fontSize: '5px' }}/>
               <p>Best ATS Resume Checker! Great <br></br>customer support and friendly.
               </p>
             </div>
           </li>
           <li className="T-aboutItem">
             <div className="T-aboutItemText">
               <h3>Cecelia Roux</h3>
               <Rating name="half-rating-read" defaultValue={5} precision={.5} readOnly style={{ fontSize: '5px' }}/>
               <p>I recommend WorkLoom for job <br></br>applications going through an<br></br> Applicant Tracking System!
               </p>
             </div>
           </li>
           <li className="T-aboutItem">
            <div className="T-aboutItemText">
              <h3>Helga Kruger</h3>
              <Rating name="half-rating-read" defaultValue={5} precision={.5} readOnly style={{ fontSize: '5px' }}/>
              <p>Easy to follow resume feedback. Wish <br></br>I would of know about this sooner.
              </p>
            </div>
          </li>
          <li className="T-aboutItem">
            <div className="T-aboutItemText">
              <h3>Helga Kruger</h3>
              <Rating name="half-rating-read" defaultValue={5} precision={.5} readOnly style={{ fontSize: '5px' }}/>
              <p>I love the instant results from the <br></br>resume checker!
              </p>
            </div>
          </li>
        </div>
        {/* <button className="scroll-button" onClick={() => scroll(200)}>
          {">"}
        </button> */}
      </div>
    </section>
  );
};

export default Testimonial;
