import React from 'react'
import "./Header.css"
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import {Link} from "react-router-dom"

function Header({icon}) {
    return (
      <div className="header">
      <Link to="/">

        <IconButton>
          {icon}
        </IconButton>
      </Link>
         <Link to="/" >

        <img src="/tinder.png" alt="" className=".header__logo" />
         </Link>
        <Link to="/chat" >
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
        </Link>
      </div>
    ); 
}

export default Header
