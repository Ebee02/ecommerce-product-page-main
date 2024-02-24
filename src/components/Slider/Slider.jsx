import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderElement = sliderData.map((data) => {
    return (
      <div
        key={data.id}
        className="w-full h-60 border-2 border-purple-500"
        style={{
          backgroundImage: `url(${data.img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    );
  });
  return (
    <div className="w-full h-60 mt-1">
      <Slider {...settings}>{sliderElement}</Slider>
    </div>
  );
};

const sliderData = [
  {
    id: 1,
    img: "../../../public/images/image-product-1.jpg",
  },
  {
    id: 2,
    img: "../../../public/images/image-product-2.jpg",
  },
  {
    id: 3,
    img: "../../../public/images/image-product-3.jpg",
  },
  {
    id: 4,
    img: "../../../public/images/image-product-4.jpg",
  },
];

export default MainSlider;
