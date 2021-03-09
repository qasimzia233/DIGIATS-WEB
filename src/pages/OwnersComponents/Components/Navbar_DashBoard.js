import React from 'react'
import Profile from '../../../assets/profile.jpg';
import Plurk from '../../../assets/006-plurk.svg';
import Google_AddImg from '../../../assets/add.png';
import Boy from '../../../assets/001-boy.svg';
import Cart from '../../../assets/Cart3.svg';
import Compiling from '../../../assets/Compiling.svg';
import Equalizer from '../../../assets/Equalizer.svg';
import ChatGROUP from '../../../assets/Group-chat.svg';
import { Link } from 'react-router-dom'
import Login from '../../Login/Login'

const Navbar_DashBoard = (props) => {
    console.log(props.onload);
    

  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-light  bg-dark mb-0 pb-0 fixed-top "  >
        <div className='container'>
          <a class="navbar-brand" href="#">
            <img src={Plurk} width={50} height={50} />
          </a>

        
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">

              <a class="nav-item nav-link pulse-parent" href="#">
                <div className='dot pulse-icon'></div>
                <img src={Compiling} width={26} height={26} />
              </a>
              <a class="nav-item nav-link " href="#">
                <img src={Cart} width={26} height={26} />
                <span class="sr-only">(current)</span>
              </a>

              <a class="nav-item nav-link" href="#">
                <img src={Equalizer} width={26} height={26} />
              </a>
              <a class="nav-item nav-link " href="#">
                <img src={ChatGROUP} width={26} height={26} />
              </a>
              <a class="nav-item nav-link " href="#">
                <img src={Cart} width={26} height={26} />
                <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="#">
                <img src={Compiling} width={26} height={26} />
              </a>
            </div>
          </div>
        </div>


      </nav>


    </div>
  )
}

export default Navbar_DashBoard
