import React, { Component } from 'react'
import Card_Row from './Card/Card_Row';
import './DashBoard.css';
import Plurk from '../../assets/006-plurk.svg';
import Profile from '../../assets/profile.jpg';
import Google_AddImg from '../../assets/add.png';
import Boy from '../../assets/001-boy.svg';
import Cart from '../../assets/Cart3.svg';
import Compiling from '../../assets/Compiling.svg';
import Equalizer from '../../assets/Equalizer.svg';
import ChatGROUP from '../../assets/Group-chat.svg';
import CardFeatures from './Card/CardFeatures';
import CardStatus from './Card/CardStatus';
import AgentsTable from './Components/AgentsTable';
import Visits from './Components/Visits';
import * as firebase from 'firebase'
import CryptoJS from 'crypto-js';
import Navbar_DashBoard from './Components/Navbar_DashBoard';

let count = 0;

class DashBoard extends Component {



  constructor(props) {
    super(props);

    this.state = {
      agents: [],
      uid_key: localStorage.getItem('encryptedowner_uid'),
      key: 'null',
      count: 0,
      totlalAgentsAttendence: 0,
    }

    this.totaleAgentsCount = this.totaleAgentsCount.bind(this)
    this.formFilledCounter = this.formFilledCounter.bind(this)
  }




  UNSAFE_componentWillMount() {
    var bytes = CryptoJS.AES.decrypt(this.state.uid_key, 'my-secret-key@123');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    this.setState({ key: decryptedData })

    this.totaleAgentsCount()
    this.formFilledCounter()
  }




  async totaleAgentsCount() {
    firebase.auth().onAuthStateChanged(async (user) => {
      await firebase.database().ref('AttendenceOfAgents').child(user.uid)
        .on('value', (snapshot) => {
          snapshot.forEach(snap => {

            if (snapshot.val()) {
              if (snap.child('today').val() === new Date().getDate()) {
                this.setState({ totlalAgentsAttendence: snap.numChildren() })
              }
              else {
                // console.log('outer snap each');

              }
            }
            else {
              console.log('0 attendence');
            }
          }
          )
        })

      await firebase.database().ref('TotalAgentsCounter').child(user.uid)
        .on('value', (snapshot) => {
          console.log(snapshot.val());
          this.setState({ count: snapshot.child('myTotalAgents').val() })
        })

    })



  }

  formFilledCounter() {
    firebase.database().ref('FormsFillCounter').child(firebase.auth().currentUser.uid)
      .on('value', (snapshot) => {
        if (snapshot.val() === new Date().getDate()) {
          console.log(snapshot.val());
        }

      })
  }



  render() {



    return (
      <div className='main-container'>
        <Navbar_DashBoard />


        <main role="main" className='board-container' id='DashBoard-Container' >
          <h3 className='my-auto'>My Team</h3>
          <section className='row row-a' >
            <div className="col-lg-3">
              <div class="card-counter danger">
                <i class="fas fa-globe-europe text-success"></i>
                <span class="count-numbers">12</span>
                <span class="count-name">New Customers</span>
                <hr />
                <div class="progress mt-lg-4">
                  <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

            </div>
            <div className="col-lg-3">
              <div class="card-counter success">
                <i class="fas fa-code-branch text-primary"></i>
                <span class="count-numbers">12</span>
                <span class="count-name">Forms Filled</span>
                <hr />
                <div class="progress mt-lg-4">
                  <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

            </div>
            <div className="col-lg-6">
              <div class="card-counter info">
                <i class="fas fa-users text-warning"></i>

                <span class="count-numbers">{this.state.totlalAgentsAttendence}/{this.state.count}</span>
                <span class="count-name">Attendence</span>
                <hr />
                <div className='f-column flex-center'>
                  <div>

                    <div class="progress text-center">
                      <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: `${Math.floor(this.state.totlalAgentsAttendence / this.state.count * 100)}%` }}>
                        <span>{Math.floor(this.state.totlalAgentsAttendence / this.state.count * 100) + '%'} Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>





          </section>
          <h3 className='my-auto'>My Team</h3>
          <section className='row row-b' >

            <div className="col-lg-7">
              <div className="card h-100">
                <Visits />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card h-100">
                <div className="card-header notification notification-primary flex-row flex-between fa-center bg-primary">
                  <i class="fas fa-trophy   text-warning"></i>
                  <p className='m-0 text-white'><strong>Leader Board</strong></p>
                </div>
                <div className="card-body" style={{ overflow: 'auto', maxHeight: '220px' }}>
                  <div className='flex-row card-header mb-1 align-items-center border-bottom border-light p-2'>
                    <img src={Profile} width={45} height={45} className='bg-primary rounded-circle' />
                    <div className='my-auto ml-lg-2'>
                      <strong>Zeshan Hussain</strong>
                      <p className='m-0'>Visits : <strong>2</strong></p>
                    </div>
                  </div>
                  <div className='card-header mb-1 flex-row align-items-center border-bottom border-light p-2'>
                    <img src={Profile} width={45} height={45} className='bg-primary rounded-circle' />
                    <div className='my-auto ml-lg-2'>
                      <strong>Zeshan Hussain</strong>
                      <p className='m-0'>Visits : <strong>2</strong></p>
                    </div>
                  </div>
                  <div className='card-header mb-1 flex-row align-items-center border-bottom border-light p-2'>
                    <img src={Profile} width={45} height={45} className='bg-primary rounded-circle' />
                    <div className='my-auto ml-lg-2'>
                      <strong>Zeshan Hussain</strong>
                      <p className='m-0'>Visits : <strong>2</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <h3 className='my-auto'>My Team</h3>
          <section className='row row-c' >
            <div className="col-lg-8">
              <AgentsTable />
            </div>
            <div className="col-lg-4 "><Card_Row /></div>
          </section>
        </main>


      </div>
    )
  }
}




export default DashBoard
