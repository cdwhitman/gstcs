import React, { useState } from 'react';
import Link from 'next/link';
import Team from '../../api/team';
import Image from 'next/image';

const TeamMember = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [isActive, setActive] = useState(false);

  const toggleClass = (Id) => {
    setActive(Id === isActive ? null : Id);
  };

  return (
    <section className='wpo-team-section section-padding'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-5'>
            <div className='wpo-section-title'>
              <h2>Meet Our Qualified Team</h2>
            </div>
          </div>
          <div className='col-lg-5 offset-lg-2'>
            <div className='wpo-section-title'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className='wpo-team-wrap'>
          <div className='row'>
            {Team.map((team, aitem) => (
              <div className='col col-lg-3 col-md-6 col-12' key={aitem}>
                <div className='wpo-team-item'>
                  <div className='wpo-team-img'>
                    <Image src={team.AtImg} alt='' />
                    {/* <div
                      className={`social ${
                        isActive === team.Id ? 'active' : ''
                      }`}>
                      {/* <ul>
                        <li
                          className='switch'
                          onClick={() => toggleClass(team.Id)}>
                          <i className='ti-plus'></i>
                        </li>
                        <li className='on'>
                          <Link href='/'>
                            <i className='ti-facebook'></i>
                          </Link>
                        </li>
                        <li className='on'>
                          <Link href='/'>
                            <i className='ti-twitter-alt'></i>
                          </Link>
                        </li>
                        <li className='on'>
                          <Link href='/'>
                            <i className='ti-instagram'></i>
                          </Link>
                        </li>
                      </ul> 
                    </div> }*/}
                  </div>
                  <div className='wpo-team-text'>
                    <h2>
                      <Link
                        onClick={ClickHandler}
                        href='/team-single/[slug]'
                        as={`/team-single/${team.slug}`}>
                        {team.name}
                      </Link>
                    </h2>
                    <span>{team.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
