import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import Features2 from '../../components/Features2';
import About from '../../components/about';
import Practice from '../../components/Practice';
import FunFact from '../../components/FunFact';
import Testimonial from '../../components/Testimonial';
import Team from '../../components/Team';
import BlogSection from '../../components/BlogSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '/public/images/logo.png';

const AboutPage = () => {
  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle pageTitle={'About Us'} pagesub={'About'} />
      {/* <Features2 /> */}
      <About />
      {/* <Practice />
      <FunFact />
      <Team /> */}
      <Testimonial />
      {/* <BlogSection /> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutPage;
