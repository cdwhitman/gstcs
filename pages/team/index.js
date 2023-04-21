import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import Team from '../../components/team';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '/public/images/logo.png';

const TeamPage = () => {
  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle pageTitle={'Team'} pagesub={'Team'} />
      <Team />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default TeamPage;
