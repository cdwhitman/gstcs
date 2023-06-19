import React, { Component } from 'react';
import Link from 'next/link';
import HeaderTopbar from '../../components/HeaderTopbar';
import MobileMenu from '../../components/MobileMenu';
import Prtoducts from '../../api/product';
import Image from 'next/image';
import { removeFromCart } from '../../store/actions/action';
import { totalPrice } from '../../utils';
import { connect } from 'react-redux';

class Header extends Component {
  state = {
    isSearchShow: false,
    isCartShow: false
  };

  // searchHandler = () => {
  //   this.setState({
  //     isSearchShow: !this.state.isSearchShow
  //   });
  // };
  cartHandler = () => {
    this.setState({
      isCartShow: !this.state.isCartShow
    });
  };

  render() {
    const { isSearchShow, isCartShow } = this.state;

    const SubmitHandler = (e) => {
      e.preventDefault();
    };

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    };

    const { carts } = this.props;

    return (
      <header id='header' className={this.props.topbarNone}>
        {/* <HeaderTopbar /> */}
        <div className={`wpo-site-header ${this.props.hclass}`}>
          <nav className='navigation navbar navbar-expand-lg navbar-light'>
            <div className='container-fluid'>
              <div className='row align-items-center'>
                <div className='col-lg-3 col-md-3 col-3 d-lg-none dl-block'>
                  <div className='mobail-menu'>
                    <MobileMenu />
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-6'>
                  <div className='navbar-header'>
                    <Link
                      onClick={ClickHandler}
                      className='navbar-brand'
                      href='/'>
                      <h1 style={{ color: 'white' }}>Global DynamiX</h1>
                      {/* temp */}
                      {/* <Image src={this.props.Logo} alt='' /> */}
                    </Link>
                  </div>
                </div>
                <div className='col-lg-6 col-md-1 col-1'>
                  <div
                    id='navbar'
                    className='collapse navbar-collapse navigation-holder'>
                    <button className='menu-close'>
                      <i className='ti-close'></i>
                    </button>
                    <ul className='nav navbar-nav mb-2 mb-lg-0'>
                      <li className='menu-item-has-children'>
                        <Link onClick={ClickHandler} href='/'>
                          Home
                        </Link>
                        {/* <ul className='sub-menu'>
                          <li>
                            <Link onClick={ClickHandler} href='/home'>
                              Home style 1
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} href='/home2'>
                              Home style 2
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} href='/home3'>
                              Home style 3
                            </Link>
                          </li>
                        </ul> */}
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href='/about'>
                          About
                        </Link>
                      </li>
                      {/* <li>
                        <Link onClick={ClickHandler} href='/team'>
                          team
                        </Link>
                      </li> */}
                      <li>
                        <Link onClick={ClickHandler} href='/contact'>
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-3 col-md-2 col-2'>
                  <div className='header-right'>
                    <div className='header-search-form-wrapper'>
                      <div className='cart-search-contact'>
                        {/* <button
                          onClick={this.searchHandler}
                          className='search-toggle-btn'>
                          <i
                            className={`${
                              isSearchShow ? 'ti-close' : 'ti-search'
                            }`}></i>
                        </button> */}
                        <div
                          className={`header-search-form ${
                            isSearchShow ? 'header-search-content-toggle' : ''
                          }`}>
                          <form onSubmit={SubmitHandler}>
                            <div>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='Search here...'
                              />
                              <button type='submit'>
                                <i className='fi ti-search'></i>
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
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart
  };
};

export default connect(mapStateToProps, { removeFromCart })(Header);
