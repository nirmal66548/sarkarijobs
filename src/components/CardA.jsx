import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import list from "../../public/list.json";

function CardA() {
    const filterData = list.filter((data) => data.category === "Job");
    console.log(filterData);
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          }
        ]
    };
  return (
    <>
        <div className='z-50'>
            <div className="max-w-screen-lg container mx-auto mt-16 mb-8">
              <Slider {...settings}>
                    {filterData.map((item) => (
                       <Card item={item} key={item.id} /> 
                    ))}
              </Slider>
            </div>
        </div>
    </>
  )
}

export default CardA;
