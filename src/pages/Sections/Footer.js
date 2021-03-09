import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div id='section-footer'>
                <footer className="container site-footer section text-center block bg-contrast">
                    <div className="container py-4">
                        <h2 className="font-md regular animate__animated animate__bounce">Stay updated</h2>
                    </div><p className="text-secondary mb-5">By registering with us you will receive right in your inbox all new features and updates</p>
                    <div className="row"><div className="col-12 col-md-6 mx-auto overflow-hidden">
                        <form action="#" className="form" data-response-message-animation="slide-in-left" novalidate="novalidate">
                            <div className="input-group">
                                <input type="email" name="Subscribe[email]" className="form-control rounded-circle-left" placeholder="Enter your email" required="" />
                                <div className="input-group-append">
                                    <button className="btn btn-rounded btn-primary" type="submit">Register</button></div>
                            </div>
                        </form>
                        {/* <div className="response-message"><i className="fas fa-envelope font-lg"></i></div> */}
                    </div></div>
                    <hr className="mt-5" />
                    <nav className="nav social-icons justify-content-center mt-4"><a href="#" className="mr-3 font-regular text-secondary"><i className="fab fa-facebook-f"></i></a> <a href="#" className="mr-3 font-regular text-secondary"><i className="fab fa-twitter"></i></a> <a href="#" className="mr-3 font-regular text-secondary"><i className="fab fa-instagram"></i></a> <a href="#" className="mr-3 font-regular text-secondary"><i className="fas fa-rss"></i></a> <a href="#counter-link" className="font-regular text-secondary"><i className="fab fa-linkedin-in"></i></a
                    ></nav>
                    <p className="small copyright text-secondary">© 2021 Dashcore, <em>by</em> <a className="brand bold" href="https://pits.pk/">pits.pk</a></p></footer>
            </div>
        )
    }
}

export default Footer
