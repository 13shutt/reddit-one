import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../Button/index'
import { Input, Icon, User, Logo, ContentIcon, Wrapper } from './styles'


const Header = (props) => {
  
  const [classname, setClassname] = useState('fa-line-chart')
  const [postType, setPostType] = useState('Popular')

  const iconFunction = (type, icon) => {
    setClassname(icon)
    setPostType(type)
  }

  const myURL = {
    dev: 'http://localhost:3000/',
    prod: 'https://13shutt.github.io/reddit-one/'
  }

  const getToken = async (myURL) => {
    console.log(props.location.search)
    const stateStart = props.location.search.indexOf('state=')
    const stateFinish = props.location.search.indexOf('&')
    const state = props.location.search.slice(stateStart + 6, stateFinish)
    const codeStart = props.location.search.indexOf('code=')
    const code = props.location.search.slice(codeStart + 5, props.location.search.length)
    console.log(state, code)
    await fetch('https://www.reddit.com/api/v1/access_token', {
      method: 'POST',
      headers: {
        'Authorization': `grant_type=authorization_code&code=${code}&redirect_uri=${myURL.dev}`
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  
  return (
    <header>
      <Wrapper header>

        <Link to="/">
          <Logo link={myURL.dev} click={() => iconFunction('Popular', 'fa-line-chart')}/>
        </Link>

        <ContentIcon classname={classname} postType={postType}/>

        <Input placeholder="Search Reddit"/>

        <Wrapper icons>
          <Icon classname="fa-line-chart" type="popular"  click={() => iconFunction('Popular', 'fa-line-chart')}/>
          <Icon classname="fa-bar-chart" type="all"  click={() => iconFunction('All', 'fa-bar-chart')}/>
          <Icon classname="fa-pie-chart" type="original"  click={() => iconFunction('Original', 'fa-pie-chart')}/>
        </Wrapper>

        <Wrapper btns>
          <Button primary>
            <a href={`https://www.reddit.com/api/v1/authorize?client_id=uDmsZCsIwBBrjg&response_type=code&state=lupazapypyapypaza&redirect_uri=${myURL.dev}&duration=temporary&scope=identity`}>LOG IN</a>
          </Button>
          <Button onClick={getToken}>SING UP</Button>
        </Wrapper>

        <User />

      </Wrapper>
    </header>
  );
}
 
export default Header; 