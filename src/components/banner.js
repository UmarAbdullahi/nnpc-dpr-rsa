import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>Nigerian National Petroleum Corporation</span>
            </div>
            <div className='line'>
              <span>Department of Petroleum Resources</span>
            </div>
            <div className='line'>
              <span>Retired Staff Association</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='/'>
              About Us <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
