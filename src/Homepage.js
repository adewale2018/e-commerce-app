import React from "react";
import "./Homepage.scss";

export const Homepage = () => {
  return (
    <div className='Homepage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>HATS</h1>
            <span className='subtitle'>SHOP NOW!</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>CAPS</h1>
            <span className='subtitle'>SHOP NOW!</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>SHOES</h1>
            <span className='subtitle'>SHOP NOW!</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>MEN</h1>
            <span className='subtitle'>SHOP NOW!</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>WOMEN</h1>
            <span className='subtitle'>SHOP NOW!</span>
          </div>
        </div>
      </div>
    </div>
  );
};
