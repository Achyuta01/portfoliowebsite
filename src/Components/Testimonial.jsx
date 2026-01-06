import React, { useRef } from 'react';
import "./Testimonial.css";
import next2 from "./next2.png";
import back1 from "./back1.png";
import user8 from "./user8.png";
import user9 from "./user9.png";
import user10 from "./user10.png";
import user11 from "./user11.png";

const Testimonial = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
        if (tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () =>{
        if (tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <>
    <div className='testimonial'>
        <img src={next2} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back1} alt=""  className='back-btn'onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user8} alt="" />
                            <div>
                                <h3>Micheal Jackson 1</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic execellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user9} alt="" />
                            <div>
                                <h3>Micheal Jackson 2</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic execellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user10} alt="" />
                            <div>
                                <h3>Micheal Jackson 3</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic execellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user11} alt="" />
                            <div>
                                <h3>Micheal Jackson 4</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic execellence have truly exceeded my expectations.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </>
  );
};

export default Testimonial;
