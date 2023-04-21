import React from 'react';
import Link from 'next/link';

const HeaderTopbar = () => {
  return (
    <div className='topbar'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col col-md-5 col-sm-12 col-12'>
            <div className='contact-info'>
              <ul>
                <li>
                  <Link href='/about'>About Us</Link>
                </li>
                <li>
                  <Link href='/faq'>FAQ Us</Link>
                </li>
                <li>
                  <Link href='/'>
                    <i className='ti-facebook'></i>
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <i className='ti-twitter-alt'></i>
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <i className='ti-instagram'></i>
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <i className='ti-google'></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col col-md-7 col-sm-12 col-12'>
            <div className='contact-intro'>
              <ul>
                <li>
                  <i className='fi flaticon-phone-call'></i>(651)-785-7855
                </li>
                <li>
                  <i className='fi flaticon-email'></i> dougwhitman@gstcs.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopbar;
