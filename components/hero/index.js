import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import '../../public/images/slider/slide-5.jpg';

const Hero = (props) => {
  var settings = {
    dots: false,
    arrows: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true
  };

  return (
    <section className={`wpo-hero-slider ${props.heroClass}`}>
      <div className='hero-container'>
        <div className='hero-wrapper'>
          <Slider {...settings}>
            <div className='hero-slide'>
              <div
                className='slide-inner slide-bg-image'
                style={{
                  backgroundImage: `url(${'/images/slider/slide-5.jpg'})`
                }}>
                <div className='container-fluid'>
                  <div className='slide-content'>
                    <div className='slide-title'>
                      <h2>Lorem ipsum dolor sit amet elit.</h2>
                    </div>
                    <div className='slide-text'>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Laboriosam, cupiditate suscipit dolor, mollitia
                        obcaecati, culpa quis aperiam voluptas accusamus cum
                        dolorum odit fugiat earum voluptate ipsum repudiandae
                        quos quo dolores?
                      </p>
                    </div>
                    <div className='clearfix'></div>
                    <div className='slide-btns'>
                      <Link href='/about' className='theme-btn'>
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='hero-slide'>
              <div
                className='slide-inner slide-bg-image'
                style={{
                  backgroundImage: `url(${'/images/slider/slide-2.jpg'})`
                }}>
                <div className='container-fluid'>
                  <div className='slide-content'>
                    <div className='slide-title'>
                      <h2>Exercitationem Dicta, veniam!</h2>
                    </div>
                    <div className='slide-text'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Illo iure dolor reprehenderit numquam quod
                        obcaecati officia omnis odit hic maxime? Quia, rem
                        voluptates! Atque veniam quis expedita maxime libero.
                        Voluptatem. Law is commonly understood as a system of
                        rules that are created and enforced through social or
                        government.
                      </p>
                    </div>
                    <div className='clearfix'></div>
                    <div className='slide-btns'>
                      <Link href='/about' className='theme-btn'>
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
