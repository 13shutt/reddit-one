import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../Button/index'
import { Input, Icon, User, Logo, ContentIcon, Wrapper } from './styles'


const Header = (props) => {
  
  const [classname, setClassname] = useState('fa-line-chart')
  const [postType, setPostType] = useState('Popular')

  const iconFunction = (type, icon, amount) => {
    if (type === "Original") {
      props.fetchOriginalPosts(amount)
    } else {
      props.fetchPosts(type, amount)
    }
    setClassname(icon)
    setPostType(type)
  }
  
  return (
    <header>
      <Wrapper header>

        <Link to="/">
          <Logo link="http://localhost:3000/" click={() => iconFunction('Popular', 'fa-line-chart', 10)}/>
        </Link>

        <ContentIcon classname={classname} postType={postType}/>

        <Input placeholder="Search Reddit"/>

        <Wrapper icons>
            <Icon classname="fa-line-chart" type="popular"  click={() => iconFunction('Popular', 'fa-line-chart', 10)}/>
            <Icon classname="fa-bar-chart" type="all"  click={() => iconFunction('All', 'fa-bar-chart', 10)}/>
            <Icon classname="fa-pie-chart" type="original"  click={() => iconFunction('Original', 'fa-pie-chart', 10)}/>
        </Wrapper>

        <Wrapper btns>
          <Button primary>LOG IN</Button>
          <Button>SING UP</Button>
        </Wrapper>

        <User />

      </Wrapper>
    </header>
  );
}
 
export default Header; 