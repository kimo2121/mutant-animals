import React from "react";
import "./styles.scss";
import Slider from "react-slick";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ReactComponent as RightArrow } from "../../assets/icons/rightArrow.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
// import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="arrow next">
      <RightArrow className="right-direction" />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="arrow prev">
      <RightArrow className="left-direction" />
    </div>
  );
};

const SliderComponent = ({ handleClose, data, imgNo }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: imgNo,
  };
  return (
    <div className="slider-component">
      <Close onClick={handleClose} className="close-icon" />
      <Slider {...settings}>
        {data.map((ele: any, index: any) => (
          <img className="slider-img" key={index} src={ele} alt="" />
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
