import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { SiShopware } from "react-icons/si"
import { MdOutlineCancel } from "react-icons/md"

import { links } from "../data/dummy"
import "./navbar.css"

export default function Navbar() {
  return (
    <div className='nav'>
        <div class= "items-link">
            <Link to="/" onClick={() => {}} className='link-to'>
                <SiShopware /> <span>DRV Restaurant</span>
            </Link>
            <button type="button" className='cancel-btn' onClick={() => {}}><MdOutlineCancel /></button>
        </div>
        <div className='menu-items'>
            {links.map((item) => (
                <div key={item.title}>
                    <p className='link-item'>
                        {item.title}
                    </p>
                    {item.links.map((link) => (
                        <NavLink
                            to={`/${link.name}`}
                            key={link.name}
                            onClick={() => {}}
                            className= {`isActive ? activeLink : normalLink`}
                        >
                            {link.icon}
                            <span className='item-name'>{link.name}</span>
                        </NavLink>
                    ))}
                </div>
            ))}
        </div>
    </div>
  )
}
