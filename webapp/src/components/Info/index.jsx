import React from 'react'
import "./Info.css"
import Card from '../Card'

const Info = () => {
  return (
    <div className="info">
      <Card>
        <span className="subtitle">Temperatura atual</span>
        <span className="subtitle">10º C</span>
      </Card>
      <Card>
        <span className="subtitle">Modo</span>
        <div className="item">
          <input type="checkbox"/>
          <span className="subtitle">Automatico</span>
        </div>
        <div className="item">
          <input type="checkbox"/>
          <span className="subtitle">Manual</span>
        </div>
      </Card>
    </div>
  );
}

export default Info;
