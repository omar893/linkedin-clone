import React from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1693491228225-0095ad2672d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1125&q=80" 
            alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Omar Abouelkheir</h2>
            <h4>omar@abouelkheirnz.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on posts</p>
                <p className="sidebar__statNumber">2,486</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar