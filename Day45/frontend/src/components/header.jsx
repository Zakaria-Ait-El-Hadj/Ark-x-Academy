import React from 'react'
import Navbar from './navbar';

function Header(props) {

  return (
    <header>
       <Navbar name={props.name} links={props.links} isloggedIn={props.isloggedIn} bgColor={props.bgColor} changeAuth = {props.changeAuth}/>
    </header>
  )
}

export default Header