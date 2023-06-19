import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Team from '../../api/team';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import Scrollbar from '../../components/scrollbar';
import Footer from '../../components/footer';
import Image from 'next/image';
import Logo from '/public/images/logo.png';

const TeamSinglePage = (props) => {
  const router = useRouter();

  const TeamSingle = Team.find((item) => item.slug === router.query.slug);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle pageTitle={TeamSingle?.name} pagesub={TeamSingle?.title} />
      <div className='team-pg-area section-padding'>
        <div className='container'>
          <div className='team-info-wrap'>
            <div className='row align-items-center'>
              <div className='col-lg-6'>
                <div className='team-info-img'>
                  <Image src={TeamSingle?.AtImg} alt='' />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='team-info-text'>
                  <h2>{TeamSingle?.name}</h2>
                  <ul>
                    <li>
                      Position: <span>{TeamSingle?.title}</span>
                    </li>
                    <li>
                      Experience:<span>{TeamSingle?.experiance}</span>
                    </li>
                    <li>
                      Phone:<span>{TeamSingle?.phone}</span>
                    </li>
                    <li>
                      Email:<span>{TeamSingle?.email}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='exprience-area'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='exprience-wrap'>
                  <h2>Personal Experience</h2>
                  <p>{TeamSingle?.about}</p>
                </div>
                {/* <div className='at-progress'>
                  <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid'>
                      <div className='progress yellow'>
                        <span className='progress-left'>
                          <span className='progress-bar'></span>
                        </span>
                        <span className='progress-right'>
                          <span className='progress-bar'></span>
                        </span>
                        <div className='progress-value'>80%</div>
                        <div className='progress-name'>
                          <span>Cases Won</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid'>
                      <div className='progress blue'>
                        <span className='progress-left'>
                          <span className='progress-bar'></span>
                        </span>
                        <span className='progress-right'>
                          <span className='progress-bar'></span>
                        </span>
                        <div className='progress-value'>90%</div>
                        <div className='progress-name'>
                          <span>Happy Client</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid'>
                      <div className='progress pink'>
                        <span className='progress-left'>
                          <span className='progress-bar'></span>
                        </span>
                        <span className='progress-right'>
                          <span className='progress-bar'></span>
                        </span>
                        <div className='progress-value'>95%</div>
                        <div className='progress-name'>
                          <span>Project Done</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid'>
                      <div className='progress green'>
                        <span className='progress-left'>
                          <span className='progress-bar'></span>
                        </span>
                        <span className='progress-right'>
                          <span className='progress-bar'></span>
                        </span>
                        <div className='progress-value'>25%</div>
                        <div className='progress-name'>
                          <span>Case Dismissed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className='education-area ex-wiget'>
                  <h2>Education</h2>
                  <ul>
                    <li>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour.
                    </li>
                    <li>imperdiet semper elit quis malesuada</li>
                    <li>
                      {' '}
                      risus turpis ultrices dolor, non dignissim mauris lectus
                      et ligula. In hac habitasse platea dictumst. Sed eu
                      suscipit turpis, placerat fringilla risus{' '}
                    </li>
                    <li>
                      Pellentesque elementum orci quam, nec malesuada lectus
                      ultrices eu.
                    </li>
                  </ul>
                </div>
                {/* <div className='language-area ex-wiget'>
                  <h2>Language</h2>
                  <ul>
                    <li>French(fluent), English (fluent), Greek , chinese.</li>
                  </ul>
                </div> */}
                <div className='wpo-contact-area ex-wiget'>
                  <h2>Contact Me</h2>
                  <div className='quote-form'>
                    <form onSubmit={SubmitHandler} id={TeamSingle?.formId}>
                      <div className='form-group half-col'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Name:'
                          name='name'
                        />
                      </div>
                      <div className='form-group half-col'>
                        <input
                          type='email'
                          className='form-control'
                          placeholder='Email:'
                          name='email'
                        />
                      </div>
                      <div className='form-group half-col'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Subject:'
                          name='subject'
                        />
                      </div>
                      <div className='form-group half-col'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Your Address:'
                          name='address'
                        />
                      </div>
                      <div className='form-group full-col'>
                        <textarea
                          className='form-control'
                          name='note'
                          placeholder='Description...'></textarea>
                      </div>
                      <div className='form-group full-col'>
                        <button className='btn theme-btn' type='submit'>
                          Get In Touch
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default TeamSinglePage;
