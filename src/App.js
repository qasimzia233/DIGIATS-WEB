import React, { useEffect, useState } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux'

import Routes from './Routes/Routes'




// redux
import { isUserLoggedIn } from './Redux/Reducers/LoginReducer'
import MyAgents from './pages/OwnersComponents/Screens/MyAgents';

const App = () => {


  return (

    <div>
      <Routes />
    </div>
  )



}

export default App



