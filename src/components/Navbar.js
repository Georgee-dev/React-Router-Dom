
import {React} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  return (
      <div>
          <ul>
            <li>
                <NavLink className={({isActive})=> (isActive ? 'active' : 'activeBlue') } to="./" >Home</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=> (isActive ? 'active' : 'activeBlue') } to="./users">Users</NavLink>
            </li>
           
            <li>
                <NavLink className={({isActive})=> (isActive ? 'active' : 'activeBlue') } to="./about">About</NavLink>
            </li>
          </ul>
      </div>
  );
}

export default NavBar;
