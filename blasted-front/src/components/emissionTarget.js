import React from 'react';
import biofuel from '../biofuel.jpg'
import sus from '../sus.jpg'
import sustainable from '../sustainable.jpg'

const EmissionTarget = () => {
  return (
    <div id="emissionTarget">
      <h3>Emission Targets</h3>
      <p>Our planes a specifically modified to efficient extract the energy from vodka for propulsion</p>
      <div id="emission_divs_container">

        <div className="emission_divs">
          <div className="emission_pics_divs">        
            <img src={biofuel} className="sustainable_imgs" alt="photograph of biofuel transport"></img>
          </div>
          <p>Biofuels</p>
        </div>

        <div className="emission_divs">
          <div className="emission_pics_divs">
            <img src={sus} className="sustainable_imgs" alt="photograph of aircraft in grey background"></img>
          </div>
          <p>carbon offset</p>
        </div>

        <div className="emission_divs">
          <div className="emission_pics_divs">
            <img src={sustainable} className="sustainable_imgs" alt="photograph of green grass"></img>
          </div>
            <p>Giving back to sustainability</p>
        </div>

      </div>

    </div>
  );
};

export default EmissionTarget;