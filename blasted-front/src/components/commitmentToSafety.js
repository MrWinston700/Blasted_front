import React from 'react';
import our_pilot from '../our_pilot.jpg'
import safe_plane from '../safe_plane.jpg'
import maint from '../maint.jpg'


const CommitmentToSafety = () => {
  return (
    <div id="commitmentToSafety">
      <h3>Commitment To Safety</h3>

      <div className="safety_div">
        <p className="left_content">Training beyond FAA requirements to meet our standards.</p>
        <img src={our_pilot} id="our_pilot_img"></img>
      </div>

      <div className="safety_div">
        <p className="right_content">No compromise on safety features.</p>
        <img src={safe_plane} id="safe_plane_img"></img>
      </div>

      <div className="safety_div">
        <p className="left_content">We have shorter maintenance intervals.</p>
        <img src={maint} id="maint_img"></img>
      </div>
      
    </div>
  );
};

export default CommitmentToSafety;