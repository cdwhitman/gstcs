import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/hero';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';
import Practice from '../components/Practice';
import CaseStudies from '../components/CaseStudies';
import Testimonial from '../components/Testimonial';
import Team from '../components/Team';
import Consultinencey from '../components/Consultinencey';
import BlogSection from '../components/BlogSection';
import Footer from '../components/footer';
import Scrollbar from '../components/scrollbar';
import Logo from '/public/images/logo.png';

const HomePage = () => {
  return (
    <Fragment>
      <Navbar
        hclass={'wpo-header-style-2'}
        Logo={Logo}
        // topbarNone={'header-without-topbar'}
      />
      <Hero heroClass={'wpo-hero-slider-s2'} />
      <Features />
      <ContactForm />
      <Testimonial />
      <Team />
      {/* <Consultinencey /> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;
