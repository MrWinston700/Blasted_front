import React from 'react';
// for now, just add some photos and make it look good
const Fleet = () => {
  return (
    <div id="fleet">
       <h3>Fleet</h3>
      <p>A variety of airplanes to meet your specic need</p>
      <div id="fleet_planes_container">
        <div className="fleet_content_divs_divs">
          <div className="fleet_content_divs">KA350</div>
          <div className="fleet_pics"></div>
        </div>

        <div className="fleet_content_divs_divs">
          <div className="fleet_pics"></div>
          <div className="fleet_content_divs">TBM900</div>
        </div>

        <div className="fleet_content_divs_divs">
          <div className="fleet_content_divs">C300</div>
          <div className="fleet_pics"></div>
        </div>

        <div className="fleet_content_divs_divs">
          <div className="fleet_pics"></div>
          <div className="fleet_content_divs">C650</div>
        </div>

        <div className="fleet_content_divs_divs">
          <div className="fleet_content_divs">MD80</div>
          <div className="fleet_pics"></div>
        </div>

        <div className="fleet_content_divs_divs">
          <div className="fleet_pics"></div>
          <div className="fleet_content_divs">737</div>
        </div>

        <div className="fleet_content_divs_divs">
          <div className="fleet_content_divs">767</div>
          <div className="fleet_pics"></div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;