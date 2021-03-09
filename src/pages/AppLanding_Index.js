import React, { Component } from 'react'
 import Footer from './Sections/Footer'
import Header from './Sections/Header'
import Section_Counter from './Sections/Section_Counter'
import Section_Features from './Sections/Section_Features'
import Section_Features_benifits from './Sections/Section_Features_benifits'
import Section_PathSuccess from './Sections/Section_PathSuccess'
import Section_ScreenShots from './Sections/Section_ScreenShots'
import Section_Testimonials from './Sections/Section_Testimonials'


// Data Field
        import {HeadingData} from './Data/Header_Data'
import NavBar from '../components/NavBar'
  
 class AppLanding_Index extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Header
                  {...HeadingData}
                />
                <Section_Features />
                <Section_Features_benifits />
                <Section_PathSuccess />
                <Section_Counter /> 
                <Section_ScreenShots />
                <Section_Testimonials />
                <Footer />
            </div>
        )
    }
}
 export default AppLanding_Index
