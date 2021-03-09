import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import LogoLight from '../../../assets/logo-light.png'
import LoadAnimation from '../../../assets/waitting.json'
import lottie from 'lottie-web';
import { Link } from 'react-router-dom'



class MyAgents extends Component {

    constructor(props) {
        super(props)

        this.state = {
            latitude: null,
            longitude: null,
            owner_uid: localStorage.getItem('encryptedowner_uid'),
            flag: false
        }
        this.logoutUser = this.logoutUser.bind(this)
    }



    async componentDidMount() {
        console.log('clicking');
        if (this.state.owner_uid) {
            await navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,

                })
            })
        }
        else {
            alert('no data')
        }

    }

    componentWillMount() {
        lottie.loadAnimation({
            container: this.animBox, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: LoadAnimation // the path to the animation json
        });
    }

    logoutUser() {
        localStorage.clear();
        <Link to='/'></Link>
    }

    render() {
        return (
            <div className="container-fluid d-flex flex-column" id='dashboard_header'>

                <nav className="navbar navbar-expand  shadow-sm bg-primary">
                    <a className='navbar-brand'>
                        <img src={LogoLight} />
                    </a>
                    <ul className='navbar-nav ml-auto  nav_iconBtn' >
                        <li className='nav-item py-2 px-1 '>
                            <i class="fas fa-columns fa-2x"></i>

                            <Link to='/dashboard' className='nav-link mt-2' >DashBoard </Link>
                        </li>
                        <li className='nav-item py-2 px-1' >
                            <i class="fab fa-dyalog fa-2x "></i>
                            <a href="#" className='nav-link mt-2' >My Team </a>
                        </li>
                        <li className='nav-item py-2 px-1' >
                            <i class="fas fa-align-right fa-2x"></i>
                            <Link to='/' className='nav-link mt-2' onClick={() => this.logoutUser()}  >Form </Link>
                        </li>
                        <li></li>
                        <li></li>
                    </ul>

                </nav>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav d-flex flex-column">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
                        </div>
                        <div className="col-8">

                            {(this.state.latitude && this.state.longitude) ? <Map
                                google={this.props.google}
                                zoom={15}
                                initialCenter={
                                    {
                                        lat: this.state.latitude,
                                        lng: this.state.longitude
                                    }
                                }

                            >
                                {console.log(this.state.longitude)}
                                <Marker onClick={this.onMarkerClick}
                                    name={'Current location'} />

                                <InfoWindow onClose={this.onInfoWindowClose}>
                                    <div>
                                    </div>
                                </InfoWindow>
                            </Map> : <div style={{ width: 400, margin: '0 auto' }} ref={ref => this.animBox = ref}></div>
                            }



                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBJbOf4QlA3VMjepFKaJtYc0nRrYAmgcqs')
})(MyAgents)

