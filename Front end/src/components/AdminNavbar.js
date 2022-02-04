import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './AdminNavbar.css';
import { IconContext } from 'react-icons';

function AdminNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='admin-navbar'>
          <Link to='#' className='admin-menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to='/' className='social-logo '>
              NIRVANA
              <i className="fas fa-cubes fa-1x"></i>

            </Link>
        </div>
        <nav className={sidebar ? 'admin-nav-menu active' : 'admin-nav-menu'}>
          <ul className='admin-nav-menu-items' onClick={showSidebar}>
            <li className='admin-navbar-toggle'>
              <Link to='#' className='admin-menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default AdminNavbar;