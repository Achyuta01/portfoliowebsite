import React from 'react';
import "./Programs.css";
import user1 from "./user1.png";
import user6 from "./user6.png";
import user7 from "./user7.png";
import program1 from "./program1.png";
import program4 from "./program4.png";
import program3 from "./program3.png";

const Programs = () => {
  return (
    <>
    <div className='programs'>
        <div className="program">
            <img src={user1} alt="" />
            <div className="caption">
                <img src={program1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={user6} alt="" />
            <div className="caption">
                <img src={program4} alt="" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={user7} alt="" />
            <div className="caption">
                <img src={program3} alt="" />
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
    </>
  );
};

export default Programs;
