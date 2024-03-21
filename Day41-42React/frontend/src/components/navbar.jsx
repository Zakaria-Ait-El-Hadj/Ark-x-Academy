import React from 'react'

function navbar(props) {
  return (
    <nav className={`${props.bgColor}`}>
      <ul className='font-medium flex pr-8 gap-4'>
        <li className='mr-auto ml-8 bg-gr '>{props.name}</li>
        {props.links.map(link => <li className='cursor-pointer' key={link}><a href={`#${link}`}>{link}</a></li>)}
        {
          props.isloggedIn ? <li className='cursor-pointer'><a href='#'>Log Out</a></li> : <li className='cursor-pointer'><a href='#'>Log In</a></li>
        }
      </ul>
    </nav>
  )
}

export default navbar