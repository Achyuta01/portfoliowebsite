// last seen the project video 01 : 18 : 41
import React from 'react';
import "./Campus.css";
import gallery1 from "./gallery1.png";
import gallery2 from "./gallery2.png";
import gallery3 from "./gallery3.png";
import gallery4 from "./gallery4.png";
import arrow from "./arrow.png";

const Campus = () => {
  return (
    <>
    <div className='campus'>
        <div className="gallery">
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={arrow} alt="" /></button>
    </div>
    </>
  );
};

export default Campus;
