import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from "../states/authSlice";
import { useSelector } from 'react-redux';


function navbar(props) {
  
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch();

  const onLogout = async () => {
    try{
      await dispatch(logout()).unwrap();
    }
    catch(err){
       console.log(err);
    }
  }

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
          isLoggedIn ? <li className='cursor-pointer'><button onClick={onLogout} >Log Out</button></li> : ''
        }
      </ul>
    </nav>
  )
}

export default navbar