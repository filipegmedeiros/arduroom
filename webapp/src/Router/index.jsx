import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Rooms from '../pages/Rooms'
import Room from '../pages/Room'

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Rooms} />
      <Route exact path="/room" component={Room} />
    </BrowserRouter>
  )
}

export default Router
