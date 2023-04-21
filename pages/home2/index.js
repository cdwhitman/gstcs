import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import Hero2 from '../../components/hero2';
import Features2 from '../../components/Features2';
import About from '../../components/about';
import Practice2 from '../../components/PracticeS2';
import CaseStudies from '../../components/CaseStudies';
import Testimonial from '../../components/Testimonial';
import Team from '../../components/team';
import Consultinencey from '../../components/Consultinencey';
import BlogSection from '../../components/BlogSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '/public/images/logo-2.svg';

const HomePage2 = () => {
  return (
    <Fragment>
      <Navbar
        hclass={'wpo-header-style-2'}
        Logo={Logo}
        topbarNone={'header-without-topbar'}
      />
      <Hero2 />
      <Features2 />
      <About />
      <Practice2 />
      <CaseStudies />
      <Testimonial />
      <Team />
      <Consultinencey />
      <BlogSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage2;
