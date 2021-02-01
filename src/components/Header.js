import React from 'react'
import './header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton,} from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom'
import  ArrowBackIosIcon  from '@material-ui/icons/ArrowBackIos'


const Header = ({backButton}) => {
    const history = useHistory();

    return (
        <div className="header">
            {backButton ? (
                <IconButton className="header__btn" onClick={() => history.replace(backButton)} >
                     <ArrowBackIosIcon fontSize="large" />
                </IconButton>
           )
            : (
                <IconButton className="header__btn" >
                    <PersonIcon fontSize="large" />
                </IconButton>
            ) }
            
            
            <Link to="/">
            <img
                className="header__logo" 
                src="https://thumbs.dreamstime.com/b/pianeta-logo-icon-design-del-fuoco-127190529.jpg" 
                alt="logo" /> 
            </Link>
            <Link to="/chats">
                <IconButton className="header__btn">
                    <ForumIcon fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header