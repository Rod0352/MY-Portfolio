import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
// import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  const { currentNavItem, setCurrentNavItem, navItems = [] } = props;
  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial', position: 'fixed', left: '0', padding: '69px' }}>
      <CDBSidebar textColor="gold" maxWidth="140%" backgroundColor="" >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'gold' }}>
            Navigation
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <ul>
              {navItems.map((navItem) => (
                <li
                  className={`navItem ${currentNavItem.name === navItem.name && `navActive`
                    }`}
                  key={navItem.name}
                >
                  <a href={`#${navItem.name}`}
                    onClick={() => {
                      setCurrentNavItem(navItem);
                    }}
                  >
                    <CDBSidebarMenuItem trxtColor="Gold" textFontSize="20px"> {navItem.name}</CDBSidebarMenuItem>
                  </a>
                </li>
              ))}
            </ul>


          </CDBSidebarMenu>
        </CDBSidebarContent>

      </CDBSidebar>
    </div>
  );
};

export default Sidebar;