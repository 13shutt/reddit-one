import React, { useState } from 'react'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Icon from '../../components/Icon'

import './Header.css'

const Header = (props) => {
  
  const [classname, setClassname] = useState('fa-line-chart')
  const [postType, setPostType] = useState('Popular')

  const iconFunction = (type, icon, amount) => {
    props.fetchPosts(type, amount); 
    setClassname(icon); 
    setPostType(type)
  }
  
  return (
    <header>
      <section className="header-section">
        <div className="logo">
          <a href="http://localhost:3000/">
            <img src={require('../../assets/images/reddit-logo-full.png')} alt="reddit-logo"/>
          </a>
        </div>

        <div className="content-type">
          <i className={`fa ${classname}`} aria-hidden="true"></i>
          <p>{postType}</p>
        </div>

        <Input placeholder="Search Reddit"/>

        <div className="icons">
          <Icon classname="fa-line-chart"  onClick={() => iconFunction('Popular', 'fa-line-chart', 30)}/>
          <Icon classname="fa-bar-chart"  onClick={() => iconFunction('All', 'fa-bar-chart', 30)}/>
          <Icon classname="fa-pie-chart"  onClick={() => iconFunction('Original', 'fa-pie-chart', 30)}/>
        </div>

        <div className="btns">
          <Button primary>LOG IN</Button>
          <Button>SING UP</Button>
        </div>

        <div className="user">
          <div className="user-place">
            <i className="fa fa-user-circle" aria-hidden="true"></i>
          </div>
        </div>
      </section>
    </header>
  );
}
 
export default Header; 

{/* <header>
      <section className="header-section">
        <div className="logo">
          <a href="http://localhost:3000/">
            <img src={require('../../assets/images/reddit-logo-full.png')} alt="reddit-logo"/>
          </a>
        </div>

        <Button primary>primary</Button>
        <Button>not primary</Button>

        <div className="content-type">
          <i className={`fa ${classname}`} aria-hidden="true"></i>
          <p>{postType}</p>
        </div>

        <div className="input">
          <span className="fa fa-search"></span>
          <form>
            <input type="text" placeholder="Search Reddit"/>
          </form>
        </div>

        <div className="icons">
          <div className="popular" onClick={() => iconFunction('Popular', 'fa-line-chart', 30)}>
            <i className="fa fa-line-chart" aria-hidden="true"></i>
          </div>
          <div className="all" onClick={() => iconFunction('All', 'fa-bar-chart', 30)}>
            <i className="fa fa-bar-chart" aria-hidden="true"></i>
          </div>
          <div className="original-content"  onClick={() => iconFunction('Original', 'fa-pie-chart', 30)}>
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
            <div className="dropdown-content">
              <a href="null">Link 1</a>
              <a href="null">Link 2</a>
              <a href="null">Link 3</a>
            </div>
          </div>
        </div>
      </section>
    </header> */}