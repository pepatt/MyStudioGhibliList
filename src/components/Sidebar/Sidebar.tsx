import React from 'react'
import './Sidebar.scss'

function Sidebar() {
  return (
      <div className="sidebar">
        <ul className="sidebar__titl">Documents
            <li className="sidebar__cont">Resume</li>
        </ul>
        <ul className="sidebar__titl">Contact
            <a href='mailto:rezai.timur.04@gmail.com' className="sidebar__cont">Gmail</a>
        </ul>
        <ul className="sidebar__titl">Media
            <a href="https://www.linkedin.com/in/tymur-rezaei/" className="sidebar__cont">LinkedIn</a>
            <a href="https://github.com/pepatt" className="sidebar__cont">Github</a>
            <a href="https://leetcode.com/u/TymurRezaei/" className="sidebar__cont">Leetcode</a>
        </ul>
    </div>
  )
}

export default Sidebar