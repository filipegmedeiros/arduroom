import React from "react";
import { useHistory } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { MdDevicesOther } from 'react-icons/md'
import "./Drawer.css"

function Drawer({ open, onClose }) {
  const history = useHistory();

  return (
    <div
      className={`drawer ${open ? null : "drawer-close"}`}
    >
      <div
        className={`drawer-container ${
          open ? "drawer-container-open" : "drawer-container-close"
        }`}
      >
        {open ? (
          <div className='drawer-content'>
            <span className="item text" onClick={() => history.push('/room')}> 
              <FaHome className="icon" size={25}/>
              Quartos
            </span>
            <span className="item text" onClick={() => history.push('/firmware')}> 
              <MdDevicesOther className="icon" size={25}/>
               Firmwares
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Drawer;

