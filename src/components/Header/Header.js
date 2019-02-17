import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../Button/index'
import { Input, Icon, User, Logo, ContentIcon, Wrapper } from './styles'


const Header = () => {
  
  const [classname, setClassname] = useState('fa-line-chart')
  const [postType, setPostType] = useState('Popular')

  const iconFunction = (type, icon) => {
    setClassname(icon)
    setPostType(type)
  }
  
  return (
    <header>
      <Wrapper header>

        <Link to="/">
          <Logo link="http://localhost:3000/" click={() => iconFunction('Popular', 'fa-line-chart')}/>
        </Link>

        <ContentIcon classname={classname} postType={postType}/>

        <Input placeholder="Search Reddit"/>

        <Wrapper icons>
          <Icon classname="fa-line-chart" type="popular"  click={() => iconFunction('Popular', 'fa-line-chart')}/>
          <Icon classname="fa-bar-chart" type="all"  click={() => iconFunction('All', 'fa-bar-chart')}/>
          <Icon classname="fa-pie-chart" type="original"  click={() => iconFunction('Original', 'fa-pie-chart')}/>
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