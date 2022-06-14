import React, { useEffect, useRef, useState } from "react";
import SliderAPI from "../../../API/Slider";
import { Link } from "react-router-dom";
import { Button, Carousel } from "antd";
const Slides = () => {
  const [slides, setSlides] = useState([]);
  useEffect(async () => {
    const { data: slides } = await SliderAPI.getAll();
    setSlides(slides);
  }, []);
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const slider = useRef(null);
  return (
    <>
      <Carousel autoplay >
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>

    // <React.Fragment>
    //     <div className="banner-slide">
    //         <div className="banner-shop">
    //             <div className="full-home-banners">
    //                 <div className="full-home-banners__left-wrapper">
    //                     <div className="slide-gr">
    //                         <div className="slides">
    //                             {
    //                                 slides.map((item,index) => {
    //                                     if (item.status == "true") {
    //                                         if (item.ordinal_number != 0) {
    //                                             return (
    //                                                 <Link to="" className='imk' key={index}>
    //                                                     <img src={item.photo} alt="" />
    //                                                 </Link>
    //                                             )
    //                                         }
    //                                     }
    //                                 })
    //                             }
    //                         </div>
    //                         <button id="prev"><i className="fas fa-angle-left"></i></button>
    //                         <button id="next"><i className="fas fa-angle-right"></i></button>
    //                         <div className="number_slide">
    //                             {slides.map((item,index) => {
    //                                 if (item.status == "true") {
    //                                     if (item.ordinal_number != 0) {
    //                                         return (
    //                                                 <button key={index}></button>
    //                                             )
    //                                     }
    //                                 }
    //                             })}

    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="full-home-banners__right-wrapper">
    //                     <a href="" className="full-home-banners__right-banner">
    //                         <img src="https://2.bp.blogspot.com/-Lu81JFx7Qw4/W1HntPfg0kI/AAAAAAAACeU/zLTDUkul8FQOUnp0Mp5k8zwE6oAF-lorQCLcBGAs/s1600/c.png" alt="" />
    //                     </a>
    //                     <a href="" className="full-home-banners__right-banner">
    //                         <img src="https://tingiasoc.com/wp-content/uploads/2020/03/ma-giam-gia-shopee-tgs.png" alt="" />
    //                     </a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </React.Fragment>
  );
};

export default Slides;
