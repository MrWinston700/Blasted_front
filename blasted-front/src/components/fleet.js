import { render } from '@testing-library/react';
import React, { Component } from 'react';
// for now, just add some photos and make it look good
import king_air from '../images/king_air.jpg'

class Fleet extends Component {

  state = {slideIndex: 1};

    componentDidMount() {
      this.showSlides(this.state.slideIndex);
      console.log("I executed");
    }

    showSlides(n) {
    let i = 0;
    const slides = document.getElementsByClassName("mySlides");
    console.log(slides);
    console.log(slides.length);
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.setState({slideIndex: 1})}    
    if (n < 1) {this.setState({slideIndex: slides.length})}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.state.slideIndex-1].style.display = "block";  
    dots[this.state.slideIndex-1].className += " active";
  }

   plusSlides(n) {
    this.showSlides(this.state.slideIndex += n);
  }
  
  currentSlide(n) {
    this.showSlides(this.state.slideIndex = n);
  }

  render() {
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
          <div className="fleet_pics_divs">
          <div className="slideshow-container">

            <div className="mySlides fade">
              <img src={king_air} className="fleet_pics"></img>
            </div>

            <div className="mySlides fade">
              <img src={king_air} ></img>
            </div>

            <div className="mySlides fade">
              <img src={king_air} ></img>
            </div>

            <a className="prev" >&#10095;</a>
            <a className="next">&#10095;</a>

            </div>

            <div style={{textAlign : 'center'}}>
              <span className="dot" ></span> 
              <span className="dot" ></span> 
              <span className="dot" ></span> 
            </div>
          </div>
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
  }
};

export default Fleet;