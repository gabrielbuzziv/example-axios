import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imageUrl =
  'https://images.unsplash.com/photo-1628515116112-13330f7997c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function Carousel() {
  return (
    <Slider {...settings}>
      <div>
        <img src={imageUrl} alt="" />
      </div>
      <div>
        <img src={imageUrl} alt="" />
      </div>
      <div>
        <img src={imageUrl} alt="" />
      </div>
      <div>
        <img src={imageUrl} alt="" />
      </div>
      <div>
        <img src={imageUrl} alt="" />
      </div>
      <div>
        <img src={imageUrl} alt="" />
      </div>
    </Slider>
  );
}
