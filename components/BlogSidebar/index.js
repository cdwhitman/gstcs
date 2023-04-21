import React from 'react';
import Link from 'next/link';
import Services from '../../api/service';
import about from '/public/images/blog/about-widget.jpg';
import rp1 from '/public/images/recent-posts/img-1.jpg';
import rp2 from '/public/images/recent-posts/img-2.jpg';
import rp3 from '/public/images/recent-posts/img-3.jpg';
import Image from 'next/image';
import blogs from '../../api/blogs';

const BlogSidebar = (props) => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
      <div className='blog-sidebar'>
        <div className='widget about-widget'>
          <div className='img-holder'>
            <Image src={about} alt='' />
          </div>
          <h4>Jenny Watson</h4>
          <p>
            Hi! beautiful people. I`m an authtor of this blog. Read our post -
            stay with us
          </p>
          <div className='social'>
            <ul className='clearfix'>
              <li>
                <Link
                  onClick={ClickHandler}
                  href='/blog-single/Can-Do-About-Law'>
                  <i className='ti-facebook'></i>
                </Link>
              </li>
              <li>
                <Link
                  onClick={ClickHandler}
                  href='/blog-single/Can-Do-About-Law'>
                  <i className='ti-twitter-alt'></i>
                </Link>
              </li>
              <li>
                <Link
                  onClick={ClickHandler}
                  href='/blog-single/Can-Do-About-Law'>
                  <i className='ti-linkedin'></i>
                </Link>
              </li>
              <li>
                <Link
                  onClick={ClickHandler}
                  href='/blog-single/Can-Do-About-Law'>
                  <i className='ti-pinterest'></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className='aw-shape'></div>
        </div>
        <div className='widget search-widget'>
          <form onSubmit={SubmitHandler}>
            <div>
              <input
                type='text'
                className='form-control'
                placeholder='Search Post..'
              />
              <button type='submit'>
                <i className='ti-search'></i>
              </button>
            </div>
          </form>
        </div>
        <div className='widget category-widget'>
          <h3>Categories</h3>
          <ul>
            {Services.map((service, Sitem) => (
              <li key={Sitem}>
                <Link
                  onClick={ClickHandler}
                  href='/practice/[slug]'
                  as={`/practice/${service.slug}`}>
                  {service.sTitle} <span>{service.Id}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='widget recent-post-widget'>
          <h3>Related Posts</h3>
          <div className='posts'>
            {blogs.map((blog, Bitem) => (
              <div className='post' key={Bitem}>
                <div className='img-holder'>
                  <Image src={blog.screens} alt='' />
                </div>
                <div className='details'>
                  <h4>
                    <Link
                      onClick={ClickHandler}
                      href='/blog-single/[slug]'
                      as={`/blog-single/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h4>
                  <span className='date'>{blog.create_at}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='widget wpo-instagram-widget'>
          <div className='widget-title'>
            <h3>Practice</h3>
          </div>
          <ul className='d-flex'>
            {Services.map((service, Sitem) => (
              <li key={Sitem}>
                <Link
                  onClick={ClickHandler}
                  href='/practice/[slug]'
                  as={`/practice/${service.slug}`}>
                  <Image src={service.sinst} alt='' />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='widget tag-widget'>
          <h3>Tags</h3>
          <ul>
            <li>
              <Link onClick={ClickHandler} href='/blog-single/Can-Do-About-Law'>
                Fraud
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href='/blog-single/Lawyer-Can-Help'>
                Car
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href='/blog-single/Can-Do-About-Law'>
                Law
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href='/blog-single/Lawyer-Can-Help'>
                Team
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href='/blog-single/Can-Do-About-Law'>
                Lawyer
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href='/blog-single/Lawyer-Can-Help'>
                Accident
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href='/blog-single/Lawyer-Can-Help'>
                Criminal
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href='/blog-single/Can-Do-About-Law'>
                Business
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href='/blog-single/Lawyer-Can-Help'>
                Corporate
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href='/blog-single/Lawyer-Can-Help'>
                Consultation
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} href='/blog-single/Can-Do-About-Law'>
                Immigration
              </Link>
            </li>
          </ul>
        </div>
        <div className='wpo-contact-widget widget'>
          <h2>
            How We Can <br /> Help You!
          </h2>
          <p>
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis.{' '}
          </p>
          <Link onClick={ClickHandler} href='/contact'>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
