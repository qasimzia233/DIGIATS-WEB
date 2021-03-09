import React, { Component } from 'react'
import NumberCounter from 'number-counter';
import  './Header.css'

class Section_Counter extends Component {
    render() {
        return (
            <div id='section-counter' >
                <section className="section-counter counters gradient gradient-primary-dark text-contrast shadow-lg py-5">
                    <div className="container">
                    <div className="section-heading text-center">
                        <h2 className="text-contrast">Millions business rely on DashCore</h2><p>These amazing stats can be wrong, many happy customers around the world trust our service to boost their products</p></div>
                    <div className="row">
                        <div className="col-xs-4 col-md-3 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            <NumberCounter end={273} delay={4} className="increment counter bold font-md mt-2 "/>
 
                            <p className="p-text m-0">Components</p>
                        </div>
                        <div className="col-xs-4 col-md-3 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            <NumberCounter end={654} delay={4} className="increment counter bold font-md mt-2 "/>
                            <p className="p-text m-0">Components</p>
                        </div>
                        <div className="col-xs-4 col-md-3 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            <NumberCounter end={941}  className="increment counter bold font-md mt-2 "/>
                            <p className="p-text m-0">Components</p>
                        </div>
                        <div className="col-xs-4 col-md-3 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            <NumberCounter end={654} delay={4} className="increment counter bold font-md mt-2 "/>
                            <p className="p-text m-0">Components</p>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}

export default Section_Counter
