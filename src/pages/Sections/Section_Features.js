import React, { Component } from 'react'
import CardCustom from '../../components/CardCustom'
import {Button} from 'react-bootstrap'

class Section_Features extends Component {
    render() {
        return (
            <div className='section-features container-fluid ' id='section-features'>
                <h2 className='text-center'>Premium Feature</h2>
                <p className='lead text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, nulla, voluptates. Architecto eum minima necessitatibus quo reiciendis! Aliquam culpa doloremque eaque esse illo, nemo nesciunt nobis quia sapiente tenetur veniam.</p>
                
                <div className='row  border-rounded  py-4 mx-2'>
               
               <CardCustom
                  imgsvg='http://www.w3.org/2000/svg'
                  title='Location Tracking'
                  paragraph='DigiAts gives you an amenity that you need to control the performance of your team the entire day'
               />
               <CardCustom
                  imgsvg='http://www.w3.org/2000/svg'
                  title='Attendance Management   '
                  paragraph='Your team can Inform you about their presence from anywhere on their work by clicking into attendance system at the start of their meetings or visits and recorded by the last location of visit'
               />
               <CardCustom
                  imgsvg='http://www.w3.org/2000/svg'
                  title='Visit Management'
                  paragraph='Your team can perform all their regular tasks like planned meetings and upcoming visits'
               />
               <CardCustom
                  imgsvg='http://www.w3.org/2000/svg'
                  title='Location Tracking'
                  paragraph='FieldSense gives you all the information you require to monitor the productivity of your field and sales force throughout the day'
               />
               <CardCustom
                  imgsvg='http://www.w3.org/2000/svg'
                  title='Location Tracking'
                  paragraph='FieldSense gives you all the information you require to monitor the productivity of your field and sales force throughout the day'
               />
               <CardCustom
                  title='Location Tracking'
                  paragraph='FieldSense gives you all the information you require to monitor the productivity of your field and sales force throughout the day'
               />
              
                    
                </div>

                <div className='d-flex align-items-center justify-content-center'>

                <Button variant="outline-primary" className='px-3 my-2' >See All Features</Button>
                </div>

            </div>
        )
    }
}

export default Section_Features
