import React from 'react';
import our_pilot from '../our_pilot.jpg'
import safe_plane from '../safe_plane.jpg'
import maint from '../maint.jpg'


const CommitmentToSafety = () => {
  return (
    <div id="commitmentToSafety">
      <h3>Commitment To Safety</h3>

      <div className="safety_div">
        <p className="left_content_headings">Training beyond FAA requirements to meet our standards.</p>
        <p className="left_content">Our pilots are the very best at what they. We do both simulator and real world emergency training at critical flight phases so our pilots are never do an emergency for the first time</p>
        <img src={our_pilot} id="our_pilot_img"></img>
      </div>

      <div className="safety_div">
        <p className="right_content_headings">No compromise on safety features.</p>
        <p className="right_content">All of our aircraft operating in our fleet have terrain warning, satellite weather, and a runway advance advisory system. All of ower vintage shared ownership aircrafts have these systems retrofitted.</p>
        <img src={safe_plane} id="safe_plane_img"></img>
      </div>

      <div className="safety_div">
        <p className="left_content_headings">We have shorter maintenance intervals.</p>
        <p className="left_content">While the FAA and aircraft manufacturer requirements for maintenance are plausible, from experience from working with our maintenance team, we determined that some inspections should have shorter intervals, not particularly
          for safety reason, but to avoid delays for our customers and employees</p>
        <img src={maint} id="maint_img"></img>
      </div>
      
    </div>
  );
};

export default CommitmentToSafety;