import React from 'react';

const Features = (props) => {
  const featres = [
    {
      fIcon: 'fi flaticon-badge',
      title: 'Proven Success',
      des: 'Over 26 years of global trade compliance innovations.'
    },
    {
      fIcon: 'fi flaticon-support',
      title: 'Leading Edge Tech',
      des: 'We have vast expiriance with the most advanced trade compliance software.'
    },
    {
      fIcon: 'fi flaticon-diary',
      title: '"another good thing"',
      des: 'Info about the good thing"'
    }
  ];

  return (
    <section
      className={`wpo-features-section section-padding  ${props.featuresClass}`}>
      <div className='container'>
        <div className='wpo-features-wrapper'>
          <div className='row'>
            {featres.map((featres, fitem) => (
              <div className='col-lg-4 col-md-6 col-12' key={fitem}>
                <div className='wpo-features-item'>
                  <div className='wpo-features-icon'>
                    <div className='icon'>
                      <i className={featres.fIcon}></i>
                    </div>
                  </div>
                  <div className='wpo-features-text'>
                    <h2>{featres.title}</h2>
                    <p>{featres.des}</p>
                  </div>
                  <div className='visible-icon'>
                    <i className={featres.fIcon}></i>
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

export default Features;
