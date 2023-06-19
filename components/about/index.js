import Image from 'next/image';
import React from 'react';
import abimg from '/public/images/consult.png';
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
                    Sed scelerisque quam sed ante pulvinar hendrerit. Nam
                    fermentum et elit vitae feugiat. Quisque tincidunt hendrerit
                    augue eget vulputate. Morbi blandit, elit eu ultrices
                    rutrum, risus turpis ultrices dolor, non dignissim mauris
                    lectus et ligula. In hac habitasse platea dictumst. Sed eu
                    suscipit turpis, placerat fringilla risus. Vestibulum eget
                    augue rhoncus, bibendum purus interdum, tincidunt odio.
                    Maecenas at pulvinar ex. Sed urna est, malesuada vel lacinia
                    at, aliquam non ante. Nulla volutpat eleifend malesuada.
                  </p>
                  <p>
                    Maecenas scelerisque porta quam, vel rhoncus eros elementum
                    vitae. Maecenas sed lorem luctus, tempor nibh nec, suscipit
                    lacus. Duis dictum a lorem et dictum. Praesent vel magna
                    leo. Aenean turpis nulla, egestas ut justo id, pulvinar
                    interdum ante. Etiam est turpis, eleifend vitae vestibulum
                    eget, imperdiet quis eros. Etiam mauris lorem, condimentum
                    non magna nec, scelerisque feugiat lectus. Donec tristique
                    in enim eu elementum. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Fusce in vestibulum dui, porta
                    mollis lectus. Vestibulum a sem sed felis convallis rutrum.
                    Sed metus risus, rutrum eget facilisis vitae, malesuada nec
                    purus.
                  </p>
                  <p>
                    Sed odio erat, dapibus at tortor a, vestibulum porttitor
                    nisl. Proin lacinia porttitor rhoncus. Sed eros eros, mollis
                    sed molestie sed, lobortis a metus. In vel elementum augue.
                    Nulla tellus ipsum, faucibus ac sodales at, faucibus eget
                    augue. Integer quis erat fermentum, condimentum leo eu,
                    lacinia dui. Maecenas quis metus non nisi egestas egestas.
                    Mauris pulvinar lobortis vulputate. Mauris et auctor nisi.
                    Quisque faucibus nisi dictum congue dictum. Quisque interdum
                    odio non velit finibus pretium quis quis dolor.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vel dapibus enim, eu tempor ex. Donec venenatis
                    tincidunt augue quis rutrum. Quisque consectetur nunc
                    feugiat libero faucibus, vitae viverra nisi ultrices. Cras
                    ullamcorper est metus, eu cursus augue tincidunt vel. Donec
                    semper maximus massa, nec congue tellus maximus vitae. Fusce
                    pellentesque posuere nisl. Suspendisse potenti. Vestibulum
                    metus mi, placerat a quam vitae, commodo dictum magna.
                    Vivamus elementum aliquam nunc, id pharetra lorem convallis
                    sit amet. Sed consequat mi ipsum, id tincidunt risus
                    volutpat in. Mauris facilisis elit condimentum ligula
                    dapibus, in cursus ligula commodo.
                  </p>
                  {/* <p>
                    Our consulting practice is committed to delivering
                    outstanding service to our clients, and we are proud to have
                    Dale as a key member of our team. We invite you to explore
                    our website and learn more about our services, including how
                    we can help your organization achieve its compliance
                    objectives.
                  </p> */}
                  <div className='signeture'>
                    {/* <h4>Doug Whitman</h4> */}
                    <h4>Global DynamiX</h4>
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
