import React, { useState } from 'react';
import "./Appbar.css";
import logo from '../../assets/long-logo.png';
import { MdMenu } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import Drawer from './Drawer'

const Appbar = () => {
  const [open, setOpen] = useState(false)

  const history = useHistory()

  return (
    <div className="appbar">
      <MdMenu className="menuIcon" size="2rem" onClick={() => setOpen(prevState => !prevState)}/>
      <img className="logo" src={logo} alt="ArduRoom" onClick={() => history.push('/')}/>
      <span className="title"> CÔMODO </span>
      <Drawer open={open} onClose={() => setOpen(false)}/>
    </div>
  );
}



export default Appbar;
