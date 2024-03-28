import React from 'react'
import { Link } from 'react-router-dom'

function navbar(props) {

  return (
    <nav className={`${props.bgColor}  ` }>
      <ul className='font-medium flex pr-8 gap-4  items-center justify-center content-center'>
        <li className='mr-auto ml-8 bg-gr '>{props.name}</li>
        {/* {props.links.map(link => <li className='cursor-pointer' key={link}><a href={`#${link}`}>{link}</a></li> )}
        {
          props.isloggedIn ? <li className='cursor-pointer'><button onClick={props.changeAuth} >Log Out</button></li> : <li className='cursor-pointer'><a href='#'>Log In</a></li>
        } */}
        {props.links.map((link,index) => <Link className='cursor-pointer' key={index} to={link.path}>{link.name}</Link> )}
        {
          props.isloggedIn ? <li className='cursor-pointer'><button onClick={props.changeAuth} >Log Out</button></li> : ''
        }
      </ul>
    </nav>
  )
}

export default navbar