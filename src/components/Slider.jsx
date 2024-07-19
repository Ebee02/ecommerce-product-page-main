import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import textPhoto from '../../../public/images/mobile-design.jpg';

const MainSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderElement = sliderData.map((data) => {
    return <img key={data.id} className="w-full h-72" src={data.img}></img>;
  });
  return (
    <Slider {...settings} className="w-full h-72 mt-1">
      {sliderElement}
    </Slider>
  );
};

const sliderData = [
  {
    id: 1,
    img: "images/image-product-1.jpg",
  },
  {
    id: 2,
    img: "images/image-product-2.jpg",
  },
  {
    id: 3,
    img: "images/image-product-3.jpg",
  },
  {
    id: 4,
    img: "images/image-product-4.jpg",
  },
];

export default MainSlider;
