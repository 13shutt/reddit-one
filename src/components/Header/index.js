import React, { useState } from 'react'

import Button from '../Button'
import { Input, Icon, User, Logo, ContentIcon, Wrapper } from './styles'

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
      <Wrapper header>

        <Logo link="http://localhost:3000/"/>

        <ContentIcon classname={classname} postType={postType}/>

        <Input placeholder="Search Reddit"/>

        <Wrapper icons>
          <Icon classname="fa-line-chart"  click={() => iconFunction('Popular', 'fa-line-chart', 30)}/>
          <Icon classname="fa-bar-chart"  click={() => iconFunction('All', 'fa-bar-chart', 30)}/>
          <Icon classname="fa-pie-chart"  click={() => iconFunction('Original', 'fa-pie-chart', 30)}/>
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