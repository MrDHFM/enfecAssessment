import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import "./Carousel.css";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{
        ...style,
        display: "block",
        background: "white",
        width: "18px",
        height: "18px",
        color: "black",
        borderRadius: "50%",
        fontSize: "24px",
        textAlign: "center",
        lineHeight: "22.5px",
        cursor: "pointer",
         // Position from the left
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
     <span style={{ backgroundColor:"white", borderRadius:"50%" ,  fontSize:"20px" }}> <FaChevronLeft /></span>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{
        ...style,
        display: "block",
        background: "white",
        width: "18px",
        height: "18px",
        color: "black",
        borderRadius: "50%",
        fontSize: "24px",
        textAlign: "center",
        lineHeight: "22.5px",
        cursor: "pointer",
        right: "10px", // Position from the right
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <span style={{ backgroundColor:"white", borderRadius:"50%" ,  fontSize:"20px" }}><FaChevronRight /></span>
    </div>
  );
};

function CarouselComponent() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
   
  };

  const slides = [
    {
      bigImage:
        "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ga/atlanta/downtown/1935-ga_atl_downtown_82792_048_500x_cfit.jpg",
    },

    { type: "text", content: {
      head:"Trulia User",
      subHead:"San Francisco Resident",
      paragraph:"I just moved to the neighborhood 2 years ago and love it! It's a great mix of families, seniors and..."
    } },
    {
      type: "image",
      content:
        "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/tx/austin/rosedale/311-tx_aus_rosedale_275246_0131_500x_cfit.jpg",
    },
    {
      type: "image",
      content:
        "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/az/scottsdale/north-scottsdale/2746-az_pdx_north_scottsdale_0087_500x_cfit.jpg",
    },
    {
      type: "image",
      content:
        "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ma/boston/hyde-park/1269-ma_bos_hyde_park_154775_23_500x_cfit.jpg",
    },

    {
      bigImage:
        "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ca/oakland/longfellow/570-ca_sf_longfellow_268264_0059_500x_cfit.jpg",
    },

    {
      type: "image",
      content:
        "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ga/sandy-springs/north-springs/1881-ga_atl_north_springs_236927_149_500x_cfit.jpg",
    },
    { type: "text", content:  {
      head:"Brianne",
      subHead:"Chicago Resident",
      paragraph:"A good mix of young adults/good night life as well as families and family friendly activities..."
    } },
    {
      type: "image",
      content:
        "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ca/carlsbad/rancho-la-costa/2501-ca_sd_rancho_la_costa_229306_162_500x_cfit.jpg",
    },
    {
      type: "image",
      content:
        "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ma/newton/chestnut-hill/1333-ma_bos_chestnut_hill_37857_189_500x_cfit.jpg",
    },

    {
      bigImage:
        "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/pa/philadelphia/logan-square/1728-pa_phil_logan_square_753807_065_500x_cfit.jpg",
    },

    {
      type: "image",
      content:
        "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ma/quincy/north-quincy/1319-ma_bos_north_quincy_46807_58_500x_cfit.jpg",
    },
    {
      type: "image",
      content:
        "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ca/anaheim/anaheim-hills/3156-ca_ana_anaheim_hills_146664_112_500x_cfit.jpg",
    },
    { type: "text", content: {
      head:"Trulia User",
      subHead:"Chandler Resident",
      paragraph:"We live living in the Oakwood community of Sun Lakes. There are so many activities..."
    } },
    {
      type: "image",
      content:
        "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/co/denver/highland/1444-co_den_highland_273986_175_v2_500x_cfit.jpg",
    },

    {
      bigImage:
        "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ca/jurupa-valley/mira-loma/2864-ca_riv_mira_loma_205807_195_500x_cfit.jpg",
    },

    {
      type: "image",
      content:
        "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ma/lowell/highlands/1266-ma_bos_highlands_154729_049_500x_cfit.jpg",
    },
    {
      type: "image",
      content:
        "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/co/aurora/north-aurora/1552-co_den_north_aurora_342737_040_500x_cfit.jpg",
    },
    {
      type: "image",
      content:
        "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ca/san-jose/willow-glen/2416-ca_sf_willow_glen_118987_0042_500x_cfit.jpg",
    },
    { type: "text", content: {
      head:"Trulia User",
      subHead:"San Diego Resident",
      paragraph:"Farmers markets, street fairs, and brewery tours are great to experience in this area."
    } },
  ];
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="big">
          <img className="bigImage" src={slides[0].bigImage} />
          <h1 className="image-heading">Atlanta,GA</h1>
          <button className="image-button">View Details {">"}</button>
        </div>
        <div className="small">
          <div className="text text1">
            {" "}
            <h1 className="heading">{slides[1].content.head}</h1>
            <p className="subheading">{slides[1].content.subHead}</p>
            <p className="paragraph">
            {slides[1].content.paragraph}
            </p>
          </div>{" "}
          <br />
          <div className="small big">
            <img className="smallImage" src={slides[2].content} />
            <h1 className="image-heading">Austin,TX</h1>
          <button className="image-button">View Details {">"}</button>
        
          </div>
        </div>
        <div className="small ">
        <div className="small big"> 

          <img className="smallImage" src={slides[3].content} />
          <h1 className="image-heading">Scottsdale,AZ</h1>
          <button className="image-button">View Details {">"}</button>
        </div>
          <br />
          <div className="small big"> 

          <img className="smallImage" src={slides[4].content} />
          <h1 className="image-heading">Boston,MA</h1>
          <button className="image-button">View Details {">"}</button>
        </div>
        </div>
        <div className="big">
          <img className="bigImage" src={slides[5].bigImage} />
          <h1 className="image-heading">Oakland,CA</h1>
          <button className="image-button">View Details {">"}</button>
        </div>
        <div className="small">
          <div className="big small">
            <img className="smallImage" src={slides[6].content} />
            <h1 className="image-heading">Sandy Springs,GA</h1>
          <button className="image-button">View Details {">"}</button>
        
          </div>
          <br />
          <div className="text text2"> <h1 className="heading">{slides[7].content.head}</h1>
            <p className="subheading">{slides[7].content.subHead}</p>
            <p className="paragraph">
            {slides[7].content.paragraph}</p></div>
        </div>
        <div className="small ">
        <div className="small big"> 

          <img className="smallImage" src={slides[8].content} />
          <h1 className="image-heading">Carlsbad,CA</h1>
          <button className="image-button">View Details {">"}</button>
        </div>
          <br />
          <div className="small big"> 

          <img className="smallImage" src={slides[9].content} />
          <h1 className="image-heading">Newton,MA</h1>
          <button className="image-button">View Details {">"}</button>
        </div>
        </div>
        <div className="big">
          <img className="bigImage" src={slides[10].bigImage} />
          <h1 className="image-heading">Philadelphia,PA</h1>
          <button className="image-button">View Details {">"}</button>
        
        </div>
        <div className="small ">
        <div className="small big"> 

          <img className="smallImage" src={slides[11].content} />
          <h1 className="image-heading">Quincy,MA</h1>
          <button className="image-button">View Details {">"}</button>
        </div >
          <br />
          <div className="small big"> 

          <img className="smallImage" src={slides[12].content} />
          <h1 className="image-heading">Anahelm,CA</h1>
          <button className="image-button">View Details {">"}</button>
        </div>
        </div>
        <div className="small ">
          <div className="text text3">
          <h1 className="heading">{slides[13].content.head}</h1>
            <p className="subheading">{slides[13].content.subHead}</p>
            <p className="paragraph">
            {slides[13].content.paragraph}
            </p>

          </div>
          <br />
          <div className="big">
            <img className="smallImage" src={slides[14].content} />
            <h1 className="image-heading">Denver,CO</h1>
          <button className="image-button">View Details {">"}</button>
        
          </div>
        </div>
        <div className="big">
          <img className="bigImage" src={slides[15].bigImage} />
          <h1 className="image-heading">Jurupa Valley,CA</h1>
          <button className="image-button">View Details {">"}</button>
        
        </div>
        <div className="small ">
          <div className="small big">
          <img className="smallImage" src={slides[16].content} />
          <h1 className="image-heading">Lowell,MA</h1>
          <button className="image-button">View Details {">"}</button>
          </div>
          <br />
          <div className="small big"> 
          <img className="smallImage" src={slides[17].content} />
          <h1 className="image-heading">Aurora,CO</h1>
          <button className="image-button">View Details {">"}</button>
          </div>
        </div>
        <div className="small ">
          <div className="big small">
            <img className="smallImage" src={slides[18].content} />
            <h1 className="image-heading">San Jose,CA</h1>
          <button className="image-button">View Details {">"}</button>
        
          </div>
          <br />
          <div className="text text4"><h1 className="heading">{slides[19].content.head}</h1>
            <p className="subheading">{slides[19].content.subHead}</p>
            <p className="paragraph">
            {slides[19].content.paragraph}
            </p></div>
        </div>
      </Slider>
    </div>
  );
}

export default CarouselComponent;
