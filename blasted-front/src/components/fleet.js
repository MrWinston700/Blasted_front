import React from 'react';
// for now, just add some photos and make it look good
import king_air from '../images/king_air.jpg'

const Fleet = () => {
  return (
    <div id="fleet">
       <h3>Fleet</h3>
      <p>A variety of airplanes to meet your specic need</p>
      <div id="fleet_planes_container">
        <div className="fleet_content_divs_divs">
          <div className="fleet_content_divs">
            <h2>KA350</h2>
            <ul>
              <li>Seats: 8</li>
              <li>Luggage capacity:</li>
              <li>Range:</li>
              <li>Speed:</li>
            </ul>
          </div>
         <div className="fleet_pics_divs">
           <img src={king_air} className="fleet_pics"></img>
         </div>
        </div>
      

        <div className="fleet_content_divs_divs">
          <div className="fleet_pics_divs"></div>
          <div className="fleet_content_divs">
            
            <h2>TBM900</h2>
            <ul>
              <li>Seats: 8</li>
              <li>Luggage capacity:</li>
              <li>Range:</li>
              <li>Speed:</li>
            </ul>
          </div>
        </div>

        <div className="fleet_content_divs_divs">
          <div className="fleet_content_divs">
            
            <h2>C300</h2>
            <ul>
              <li>Seats: 8</li>
              <li>Luggage capacity:</li>
              <li>Range:</li>
              <li>Speed:</li>
            </ul>
          </div>
          <div className="fleet_pics_divs"></div>
        </div>

        <div className="fleet_content_divs_divs">
          <div className="fleet_pics_divs"></div>
          <div className="fleet_content_divs">
            
            <h2>C650</h2>
            <ul>
              <li>Seats: 8</li>
              <li>Luggage capacity:</li>
              <li>Range:</li>
              <li>Speed:</li>
            </ul>
          </div>
        </div>

        <div className="fleet_content_divs_divs">
          <div className="fleet_content_divs">
            
            <h2>MD80</h2>
            <ul>
              <li>Seats: 8</li>
              <li>Luggage capacity:</li>
              <li>Range:</li>
              <li>Speed:</li>
            </ul>
          </div>
          <div className="fleet_pics_divs"></div>
        </div>

        <div className="fleet_content_divs_divs">
          <div className="fleet_pics_divs"></div>
          <div className="fleet_content_divs">
            
            <h2>737</h2>
            <ul>
              <li>Seats: 8</li>
              <li>Luggage capacity:</li>
              <li>Range:</li>
              <li>Speed:</li>
            </ul>
          </div>
        </div>

        <div className="fleet_content_divs_divs">
          <div className="fleet_content_divs">
            <h2>767</h2>
            <ul>
              <li>Seats: 8</li>
              <li>Luggage capacity:</li>
              <li>Range:</li>
              <li>Speed:</li>
            </ul>
          </div>
          <div className="fleet_pics_divs"></div>
        </div>

        <div className="fleet_content_divs_divs">
          <div className="fleet_pics_divs"></div>
          <div className="fleet_content_divs">
            
            <h2>767 freighter</h2>
            <ul>
              <li>Seats: </li>
              <li>Luggage capacity:</li>
              <li>Range:</li>
              <li>Speed:</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;