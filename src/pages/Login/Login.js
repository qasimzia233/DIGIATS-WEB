import React, { useState, useEffect } from 'react'
import './Login.css'
import AuthenticationImage from '../../assets/undraw_authentication.svg'

import { useHistory,Redirect } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import SunShine_BG from '../../assets/sunrise.jpg'
import * as firebase from 'firebase'
import CryptoJS from 'crypto-js';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';



const Login = ({user}) => {
    const history = useHistory()
    console.log('login module');
    console.log(user);

    var ciphertext = null;

    //    setting states

    const [input, setInput] = useState('')
    const [checker, setChecker] = useState(false)
    const [otpString, setotpString] = useState('')
    const [isEnabled, setIsEnabled] = useState(true)
    const [hasKey, sethasKey] = useState(false)

     useEffect(() => {
        const key = localStorage.getItem('encryptedowner_uid')
        if (key) {
            sethasKey(true)
            history.replace('/dashboard')
        }
    }, [])

    useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            size: 'visible',
            callback: function (response) {
                console.log('It works!');
                setIsEnabled(false)
            },
        });
        recaptchaVerifier.render()
    }, [])




    const onSubmitNumber = () => {

        const number = '+' + input
        firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier)
            .then((confirmationResult) => {

                window.confirmationResult = confirmationResult;
                setChecker(true)
            }).catch((err) => {
                setChecker(false)
                alert(err)
            })
    }

    const onSubmitOTP = () => {
        console.log(otpString);
        window.confirmationResult.confirm(otpString).then((result) => {
            const user = result.user;
            console.log('login!!!!!!!!!' + user);
            loginChecker();

        }).catch((error) => {

            console.log(error);
        });
    }

    const loginChecker = () => {
        console.log('Login Checker');
        let myAuthID = firebase.auth().currentUser.uid;
        firebase.database().ref("OwnersRegData")
            .child(myAuthID).on('value', (snapshot) => {
                if (snapshot.val()) {
                    if (snapshot.child("status").val() == "Owner") {

                        // Encrypting My Data 
                        ciphertext = CryptoJS.AES.encrypt(JSON.stringify(myAuthID), 'my-secret-key@123').toString();

                        //   setting up my storage
                        localStorage.setItem('encryptedowner_uid', ciphertext)
                        history.replace('/dashboard')
                    }
                    else {
                        history.push('/signup')
                    }
                }
                else {
                    alert('not login')
                    history.push('/signup')
                }
            })
    }


    //    if user is Already Logged in
    if(user){
        return <Redirect to='/dashboard' />
    }
    //  else run the script 
    return (

        <main>

            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6 col-lg-6 fullscreen-md d-flex justify-content-center align-items-center overlay gradient gradient-purple-navy alpha-7 image-background cover" style={{ backgroundImage: SunShine_BG }}>
                        <div className="content">
                            <h2 className="display-4 display-md-3 text-contrast mt-4 mt-md-0">Welcome to <span className="bold d-block">DigiATS</span></h2>
                            <img src={AuthenticationImage} width='400' height='350' />
                            <p className="lead text-contrast">Create Credentials</p>

                            <hr className="mt-md-6 w-25" />
                            <div className="d-flex flex-column">
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4 mx-auto">
                        <div className="login-form mt-5 mt-md-0"><img src="img/logo.png" className="logo img-responsive mb-4 mb-md-6" alt="" />
                            <h1 className="text-darker bold">You Are Cute Can I Have Your Phone Number</h1>
                            <p className="text-secondary mt-0 mb-4 mb-md-6">I will Send You One TIme Verification Code</p>

                            {checker ? <div className="otp-container d-flex ">
                                <div className="card border-none">
                                    <h5 className="m-0">Mobile phone verification</h5><span className="mobile-text">Enter the code we just send on your mobile phone <b className="text-danger">{' +' + input}</b></span>
                                    <div className="d-flex flex-row mt-5">

                                        <input
                                            type="text"
                                            maxLength='6'
                                            onChange={(event => setotpString(event.target.value))}
                                            className="form-control" />


                                    </div>



                                    <div className="form-group d-flex align-items-center justify-content-between">
                                        <div className="mt-3 ">
                                            <button type="submit" onClick={onSubmitOTP} className="btn btn-primary btn-rounded">Verify <i className="fas fa-long-arrow-alt-right ml-2"></i></button>
                                        </div>
                                    </div>
                                    <div className="text-center mt-5"><span className="d-block mobile-text">Don't receive the code?</span><span onClick={() => setChecker(false)} className="font-weight-bold text-danger cursor">Resend</span></div>
                                </div>

                            </div> : <div className="cozy" >
                                <label className="control-label bold small text-uppercase text-secondary">Mobile </label>
                                <div className="form-group has-icon">
                                    <PhoneInput

                                        isValid={(value, country) => {
                                            if (value.match(/12345/)) {
                                                console.log('some');
                                                return 'Invalid value: ' + value + ', ' + country.name;
                                            } else if (value.match(/1234/)) {
                                                console.log('some');

                                                return false;
                                            } else {
                                                return true;
                                            }
                                        }}
                                        country={'pk'}
                                        required={true}
                                        autofocus={true}
                                        value={input}
                                        onChange={(phone) => setInput(phone)}
                                    />
                                    <div className=' mt-3'>
                                        <div id='sign-in-button'></div> </div>
                                </div>

                                <div className="form-group d-flex align-items-center justify-content-between">
                                    <div >
                                        <button disabled={isEnabled} type="submit" onClick={onSubmitNumber} className="btn btn-primary btn-rounded">Verify <i className="fas fa-long-arrow-alt-right ml-2"></i></button>
                                        <button type="submit" onClick={() => history.goBack()} className="btn btn-secondary btn-rounded ml-3" >Cancel </button>
                                    </div>
                                </div>
                            </div>}

                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Login
