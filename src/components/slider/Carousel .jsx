import Slider from "react-slick";
import { EXPERIENCE } from "../../constants/skills";
import react from "../../assets/react.svg"
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";

export const Carousel = () => {
  
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Отображать 3 слайда одновременно
    slidesToScroll: 1, // Прокручивать 1 слайд за раз
    swipeToSlide: true, // Включение возможности свайпа на мобильных устройствах
  };


    return (
      
    <Slider {...settings}>
      {EXPERIENCE.map((item, index) => (
        <div key={index} className="experience-item">
          <div className="experience-content" style={{ width: '100px', height: '200px' }}>
            <h3>{item.title}</h3>
            <img src={react} alt="" />
          </div>
        </div>
      ))}
    </Slider>
  )
}
