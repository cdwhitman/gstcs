import Image from 'next/image';
import React from 'react';
import abimg from '/public/images/doug-profile.jpg';
import sign from '/public/images/signeture.png';

const About = (props) => {
  return (
    <section className='wpo-about-section section-padding'>
      <div className='container'>
        <div className='wpo-about-section-wrapper'>
          <div className='row align-items-center'>
            <div className='col-lg-5 col-md-12 col-12'>
              <div className='wpo-about-img'>
                <Image src={abimg} alt='' />
              </div>
            </div>
            <div className='col-lg-7 col-md-12 col-12'>
              <div className='wpo-about-content'>
                <div className='wpo-section-title'>
                  <h2>About info written for me by AI.</h2>
                </div>
                <div className='wpo-about-content-inner'>
                  <p>
                    Doug Whitman is a seasoned professional with over 26 years
                    of experience leading global trade compliance teams for
                    major corporations. Dale brings extensive knowledge and
                    expertise to our consulting practice, allowing us to deliver
                    exceptional value to our clients.
                  </p>
                  <p>
                    As a global trade compliance expert, Dale has worked with
                    numerous organizations in various industries, providing them
                    with the guidance and support needed to navigate complex
                    regulatory requirements and mitigate risk. Dale's experience
                    spans the entire compliance lifecycle, from developing
                    compliance programs to implementing compliance procedures
                    and training teams on best practices.
                  </p>
                  <p>
                    Dale's deep understanding of global trade regulations and
                    industry standards, combined with his ability to communicate
                    complex concepts in simple terms, has earned him a
                    reputation as a trusted advisor to his clients. He has a
                    track record of delivering successful outcomes for his
                    clients, enabling them to achieve their compliance
                    objectives while also driving business growth.
                  </p>
                  <p>
                    Dale's expertise covers a range of areas, including export
                    controls, sanctions compliance, anti-bribery and corruption,
                    customs compliance, and more. He stays up-to-date with the
                    latest regulatory developments and industry trends, ensuring
                    that our clients benefit from the most current and relevant
                    advice.
                  </p>
                  <p>
                    Our consulting practice is committed to delivering
                    outstanding service to our clients, and we are proud to have
                    Dale as a key member of our team. We invite you to explore
                    our website and learn more about our services, including how
                    we can help your organization achieve its compliance
                    objectives.
                  </p>
                  <div className='signeture'>
                    <h4>Doug Whitman</h4>
                    <p>Global Stategic Trade Solusions, CEO</p>
                    <span>
                      <Image src={sign} alt='' />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
