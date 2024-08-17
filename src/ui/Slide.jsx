import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img16430 from "../assets/16430.png";

const images = [
  "https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/333.png",
  "https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/999.png",
  "https://file.portal.gov.bd/uploads/32f3e2c5-f76e-4f28-9e34-4939812023e4//628/b5d/eab/628b5deab4845837468297.png",
  "https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/109.png",
  "https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/106.png",
  "https://www.teletalk.com.bd/themes/teletalk/assets/main/images/icon/1090.png",
  img16430,
  // Add more image paths as needed
];

const AutoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // For screens 1024px and below (tablets)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens 768px and below (small tablets)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For screens 480px and below (mobile devices)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container bg-white">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="my-8 lg:my-12">
            <img
              src={src}
              alt={`Client ${index + 1}`}
              className="w-full h-[150px] p-5"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoCarousel;
