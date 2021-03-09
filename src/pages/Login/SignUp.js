import React, { Component } from 'react'
import SunShine_BG from '../../assets/sunrise.jpg'
import MapImage from '../../assets/undraw_map.svg'
import PhoneInput from 'react-phone-input-2'
import * as firebase from 'firebase'

import { useHistory } from 'react-router-dom'

export class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            companyName: '',
            companyAddress: '',
            status: '',
            currentAddress: '',
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            phoneError: '' ,
            currentAddError: '',
            compAddrError: '',
        }
        this.inputHandler = this.inputHandler.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }


    inputHandler(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })


    }
    onSubmit = (e) => {

        e.preventDefault()
        const isValid = this.validate()
        if (isValid) {
            console.log(this.state);
                    this.signUp()
        }
        else {
            alert('failed')
        }
        console.log('clicking');

    }
    validate() {
        const { firstName, lastName, email } = this.state
        console.log(firstName.length);
        let nameErr, lnameError, emailError, mPhone, cmpnyError, cmpnyAddressErr, statusErr, currentAddError = ''


        if (firstName === '') {
            nameErr = 'Pleaser enter your name'
        }

        if (lastName === '') {
            lnameError = 'Last Name Is Required'
        }

        if (!email.includes('@')) {
            emailError = 'Email Must Be In Valid Format'
        }
        if (nameErr || lnameError || emailError) {
            this.setState({ firstNameError: nameErr, lastNameError: lnameError, email: emailError })
            return false
        }
        return true

    }

    signUp() {
      
        const {
            firstName, lastName, email, companyName,
            companyAddress, phone,
            status, currentAddress } = this.state

        let authId = firebase.auth().currentUser.uid


        firebase.database().ref('OwnersRegData').child(authId)
            .set({
               
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "currentAddress": currentAddress,
                "companyName": companyName,
                "companyAddress": companyAddress,
                "status" : "Owner",

            }).then((user) => {
                        alert('suxxxx')
                        console.log(user);
                        history.push('/login')

                        this.setState(null)
            }).catch((err) => {
                console.log(err.message);
                alert(err)
            })


    }



    render() {
        return (
            <main>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-12  col-lg-7 fullscreen-md d-flex justify-content-center align-items-center overlay gradient gradient-purple-navy alpha-7 image-background cover" style={{ backgroundImage: SunShine_BG }}>
                            <div className="content">
                                <h2 className="display-2 display-md-3 text-contrast mt-4 mt-md-0">Welcome to <span className="bold d-block">DigiATS</span></h2>
                                <img src={MapImage} width='400' height='350' />
                                <p className="lead text-contrast">Create Credentials</p>
                                <hr className="mt-md-6 w-25" />
                                <div className="d-flex flex-column">
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 py-md-5 py-lg-0 col-lg-4 mx-auto">
                            <div className="login-form mt-5 mt-md-0"><img src="img/logo.png" className="logo img-responsive mb-2 mb-md-2" alt="" />
                                <h1 className="text-darker bold">Sign Up</h1>

                                <form onSubmit={this.onSubmit} className="signup-part pt-2" >
                                    <div className="form-group">
                                        <input onChange={this.inputHandler} name='firstName' type="text" className='form-control' id="validationServer01" placeholder="First name" autoFocus />
                                        <p className='text-danger'>{this.state.firstNameError ? <p>{this.state.firstNameError}</p> : null}</p>
                                    </div>
                                    <div className="form-group">
                                        <input onChange={this.inputHandler} name='lastName' type="text" className='form-control' placeholder="Last Name" />
                                        <p className='text-danger'>{this.state.lastNameError ? <p>{this.state.lastNameError}</p> : null}</p>

                                    </div>
                                    <div className="form-group">
                                        <input onChange={this.inputHandler} name='email' type="text" className='form-control' placeholder="Email" />
                                        <p className='text-danger'>{this.state.emailError ? <p>{this.state.emailError}</p> : null}</p>

                                    </div>
                                    <div className="form-group">
                                    </div>
                                    <label for='company' className='text-muted bold dark'> Compny Info</label>

                                    <div id='company'>



                                        <div className="form-group">
                                            <select onChange={this.inputHandler} className=' form-control ' name="status" id="status">
                                                <option value="null">Select Status</option>
                                                <option value="CEO">CEO</option>
                                                <option value="Manager">Manager</option>
                                                <option value="Developer">Developer</option>
                                                <option value="Designer">Designer</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input onChange={this.inputHandler} name='companyName' type="tel" className='form-control' placeholder="Company Name" />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={this.inputHandler} name='companyAddress' type="text" className='form-control' placeholder="Company Address" />
                                        </div>
                                        <div className="form-group">
                                            <textarea maxLength='100' style={{ height: '100px' }} onChange={this.inputHandler} name='currentAddres' type="password" className='form-control' placeholder="Company Address" />
                                        </div>
                                    </div>


                                    <button className='btn btn-primary rounded' type="submit" >Submit</button>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </main>

        )
    }
}

export default SignUp
