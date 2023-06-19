import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import cimg from '/public/images/signeture.png';

const ContactForm = () => {
  const [forms, setForms] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  const [validator] = useState(
    new SimpleReactValidator({
      className: 'errorMessage'
    })
  );
  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(forms);
    if (validator.allValid()) {
      validator.hideMessages();
      fetch('https://formspree.io/f/mknyblvq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(forms)
      });
      setForms({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
      });
    } else {
      validator.showMessages();
    }
  };

  return (
    <section className='wpo-contact-section section-padding'>
      <div className='container'>
        <div className='wpo-contact-section-wrapper'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-12'>
              <div className='wpo-contact-form-area'>
                <h2>Get In Touch</h2>
                <form
                  onSubmit={submitHandler}
                  className='contact-validation-active'>
                  <div className='row'>
                    <div className='form-field'>
                      <input
                        value={forms.name}
                        className='form-control'
                        type='text'
                        name='name'
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        placeholder='Your Name'
                      />
                      {validator.message(
                        'name',
                        forms.name,
                        'required|alpha_space'
                      )}
                    </div>
                    <div className='form-field'>
                      <input
                        value={forms.email}
                        className='form-control'
                        type='email'
                        name='email'
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        placeholder='Your Email'
                      />
                      {validator.message(
                        'email',
                        forms.email,
                        'required|email'
                      )}
                    </div>
                    <div className='form-field'>
                      <select
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.subject}
                        className='form-control'
                        type='text'
                        name='subject'>
                        <option>Trade Compliance</option>
                        <option>Trade Software</option>
                        {/* <option>Personal Injury</option> */}
                        <option>Strategic Recomendations</option>
                        <option>International Regulations</option>
                      </select>
                      {validator.message('subject', forms.subject, 'required')}
                    </div>
                    <div className='form-field'>
                      <textarea
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        className='form-control'
                        value={forms.message}
                        type='text'
                        name='message'
                        placeholder='Message'></textarea>
                      {validator.message('message', forms.message, 'required')}
                    </div>
                  </div>
                  <div className='submit-area'>
                    <button type='submit' className='theme-btn'>
                      {' '}
                      Submit Now
                    </button>
                  </div>
                </form>
                <div className='border-style'></div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-12'>
              <div className='wpo-contact-content'>
                <h2>
                  Streamline your international trade by connecting with years
                  of expertice and cutting edge trade software
                </h2>
                <div className='wpo-contact-content-inner'>
                  <p>
                    Global DynamiX is... Contrary to popular belief, Lorem Ipsum
                    is not simply random text. It has roots in a piece of
                    classNameical Latin literature from 45 BC, making it over
                    2000 years old.
                  </p>
                  <p>
                    and going through the cites of the word in classNameical
                    literature, discovered the undoubtable source. Lorem Ipsum
                    comes from sections.
                  </p>
                  <div className='signeture'>
                    <h4>Global DynamiX</h4>
                    {/* Doug Whitman
                    <p>Global DynamiX</p> */}
                    <span>
                      <img src={cimg} alt='' />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='visible-text'>
            <span>C</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
