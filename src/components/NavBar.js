import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar() {
  return (
    <header className="bg-blue-900">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          {/* Find font to use below */}
          {/* use exact on home link! */}
          <NavLink 
            to="/" 
            exact 
            // activeClassName makes link behave differently when on the page
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-blue-50 hover:text-blue-100 text-4xl font-bold tracking-widest" >
            Home
          </NavLink>
          <NavLink 
            to="/post"
            activeClassName="text-blue-900 bg-indigo-50"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-50 hover:text-blue-700"
          >
            Blog Posts
          </NavLink>
          <NavLink 
            to="/project"
            activeClassName="text-blue-900 bg-indigo-50"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-50 hover:text-blue-700"
          >
            Projects
          </NavLink>
          <NavLink 
            to="/about"
            activeClassName="text-blue-900 bg-indigo-50"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-50 hover:text-blue-700"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://github.com/Kwayzaar" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
          <SocialIcon url="https://www.linkedin.com/in/ericmlee05/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
          {/* <SocialIcon url="" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} /> */}
        </div>
      </div>
    </header>
  )
}