import React from 'react'

import './Header.css'

const Header = () => {
  return (
    <header>
      <section>
        <div className="logo">
          <a href="http://localhost:3000/">
            <img src={require('../../assets/images/reddit-logo-full.png')} alt="reddit-logo"/>
          </a>
        </div>

        <div className="input">
          <form action="">
            <input type="text" placeholder="Search Reddit"/>
          </form>
        </div>

        <div className="icons">
          <div className="popular">
            <i className="fa fa-line-chart" aria-hidden="true"></i>
          </div>
          <div className="all">
            <i className="fa fa-bar-chart" aria-hidden="true"></i>
          </div>
          <div className="original-content">
            <i className="fa fa-pie-chart" aria-hidden="true"></i>
          </div>
        </div>

        <div className="btns">
          <div>
            <button className="button log-in">LOG IN</button>
          </div>
          <div>
            <button className="button sign-up">SING UP</button>
          </div>
        </div>

        <div className="user">
          <div className="user-place dropdown">
            <i className="fa fa-user-circle dropbtn" aria-hidden="true"></i>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
 
export default Header; 