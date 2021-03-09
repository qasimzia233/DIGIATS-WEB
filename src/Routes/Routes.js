import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import LoadingBar from '../assets/waitting.json'
// config files
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import firebase from '../pages/Constants/FirebaseConfig'
import AuthenticatedRoute from '../pages/Constants/AuthenticeRoute'
//Screens
import Login from '../pages/Login/Login';
import Home from '../pages/OwnersComponents/Home';
import AppLanding_Index from '../pages/AppLanding_Index';
import SignUp from '../pages/Login/SignUp';
import DashBoard from '../pages/OwnersComponents/DashBoard';
import ShowAllAgents from '../pages/OwnersComponents/ShowAllAgents';
import history from '../History/History'

const Routes = () => {

    // const dispatch = useDispatch()
    const [user, setUser] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoadingBar,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    useEffect(() => {
        // firebase.auth().signOut()
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(true)
                setCurrentUser(user)
                // dispatch(isUserLoggedIn(user.uid))
                setIsLoading(false)
            }
            else {
                setUser(false)
                setIsLoading(false)
                setCurrentUser(null)
                // dispatch(isUserLoggedIn(null))

            }
        })
    }, [])

    return (
        isLoading ? <div style={{ marginTop: '100px' }}>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </div> :

            <div>
                <Router history={history}>
                    <Switch>
                        <Route path='/myagents' component={Home} />

                        <Route
                            exact path='/'
                            render={(props) => {
                                return (
                                    <AppLanding_Index user={user} {...props} />
                                )
                            }}
                            component={AppLanding_Index} />

                        <Route
                            exact
                            path='/login'
                            render={(props) => {
                                return (
                                    <Login user={user} {...props} />
                                )
                            }}
                        />

                        <Route
                            exact path='/signup' component={SignUp} />
                        <AuthenticatedRoute
                            exact
                            path='/dashboard'
                            component={DashBoard}
                            user={user}
                        />
                        <AuthenticatedRoute
                            exact
                            path='/showallagents'
                            component={ShowAllAgents}
                            user={user}
                        />
                        <Route render={() => {
                            return (
                                <div>Director Not found</div>
                            )
                        }} />
                    </Switch>
                </Router>
            </div>
    )}

    export default Routes
