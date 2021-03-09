import React, { Component } from 'react'
import Navbar_DashBoard from './Components/Navbar_DashBoard'



class ShowAllAgents extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="d-flex flex-column">
                    <Navbar_DashBoard />
                    <div className='tabletop_gutter'>
                        <div>
                            <div class="table-responsive">
                                <div class="table-wrapper">
                                    <div class="table-title">
                                        <div class="row">
                                            <div class="col-sm-6 ">
                                                
                                                <h2 className='text-white' >Manage <b>Employees</b></h2>
                                               
                                            </div>
                                            <div class="col-sm-6">
                                                <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="fas fa-user-plus mx-2"></i> <span>Add New Employee</span></a>
                                                <a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i class="fas fa-user-minus mx-2"></i> <span>Delete All</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <table class="table border border-white-50 table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <span class="custom-checkbox d-flex flex-row align-items-center justify-content-center">
                                                        <input type="checkbox" id="selectAll" />
                                                        <label for="selectAll"></label>
                                                    </span>
                                                </th>
                                                <th>Emp Code </th>
                                                <th>Name </th>
                                                <th>Email</th>
                                                <th>Mobile</th>
                                                <th>Attendence Status</th>
                                                <th>Date Time</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span class="custom-checkbox">
                                                        <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                                        <label for="checkbox1"></label>
                                                    </span>
                                                </td>
                                                <td>#jhd9939</td>
                                                <td>Thomas Hardy</td>
                                                <td>thomashardy@mail.com</td>
                                                <td>+92 555-2222</td>
                                                <td> Active </td>
                                                <td>Wed march 12 2003</td>
                                                <td className='d-flex flex-row'>
                                                    <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i data-toggle="modal" class="fas fa-route" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                                    <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i data-toggle="modal" class="fas fa-edit" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                                    <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i data-toggle="modal" class="fas fa-trash" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="clearfix">
                                        <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                                        <ul class="pagination">
                                            <li class="page-item "><a href="#">Previous</a></li>
                                            <li class="page-item active"><a href="#" class="page-link">1</a></li>
                                            <li class="page-item"><a href="#" class="page-link">2</a></li>
                                            <li class="page-item "><a href="#" class="page-link">3</a></li>
                                            <li class="page-item"><a href="#" class="page-link">4</a></li>
                                            <li class="page-item"><a href="#" class="page-link">5</a></li>
                                            <li class="page-item"><a href="#" class="page-link">Next</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="addEmployeeModal" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <form>
                                        <div class="modal-header">
                                            <h4 class="modal-title">Add Employee</h4>
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text" class="form-control" required />
                                            </div>
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input type="email" class="form-control" required />
                                            </div>
                                            <div class="form-group">
                                                <label>Address</label>
                                                <textarea class="form-control" required></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label>Phone</label>
                                                <input type="text" class="form-control" required />
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                                            <input type="submit" class="btn btn-success" value="Add" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div id="editEmployeeModal" class="modal fade" >
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <form >
                                        <div class="modal-header">
                                            <h4 class="modal-title">Edit Employee</h4>
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <div className="container">

                                                <ul class="nav nav-tabs mb-3" id="pills-tab" role="tablist">
                                                    <li class="nav-item">
                                                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">General Info</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Terretories</a>
                                                    </li>

                                                </ul>

                                                <div class="tab-content" id="pills-tabContent">
                                                    {/* Form Edit Pills */}
                                                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                                        {/* Modal Form Start */}
                                                        <form >
                                                            <div class="form-row">
                                                                <div class="form-group col-md-6">
                                                                    <label for="inputEmail4">First Name</label>
                                                                    <input type="text" class="form-control" id="inputEmail4" placeholder="Name" />
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="inputPassword4">Last Name</label>
                                                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Last Name" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="inputAddress">Employe Code</label>
                                                                <input type="text" class="form-control" id="inputAddress" placeholder="Code" />
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="inputAddress2">Office Location</label>
                                                                <input type="text" class="form-control" id="inputAddress2" placeholder="My Apartment" />
                                                            </div>
                                                            <div class="form-group">


                                                                <selected id='inputState'>
                                                                    <a class="btn btn-primary dropdown-toggle" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                                        Designation
                                                                </a>
                                                                </selected>
                                                                <div class="collapse" id="collapseExample">
                                                                    <div className='border border-white-50 text-muted pt-2 px-2'>
                                                                        <div className='d-flex flex-row'>
                                                                            <span class="custom-checkbox">
                                                                                <input type="checkbox" id="box22" value="21" />
                                                                                <label for="box2">Some Thing Is Comming From Agent</label>
                                                                            </span>
                                                                            <span class="custom-checkbox">
                                                                                <input type="checkbox" id="box22" value="21" />
                                                                                <label for="box2">Some Thing Is Comming From Agent</label>
                                                                            </span>
                                                                        </div>
                                                                        <div className='d-flex flex-row'>
                                                                            <span class="custom-checkbox">
                                                                                <input type="checkbox" id="box22" value="21" />
                                                                                <label for="box2">Some Thing Is Comming From Agent</label>
                                                                            </span>
                                                                            <span class="custom-checkbox">
                                                                                <input type="checkbox" id="box22" value="21" />
                                                                                <label for="box2">Some Thing Is Comming From Agent</label>
                                                                            </span>
                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <div class="form-row">
                                                                <div class="form-group col-md-6">
                                                                    <label for="inputCity">Role</label>
                                                                    <select id="inputCity" class="form-control">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label for="inputState">Report To</label>
                                                                    <select id="inputState" class="form-control">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>

                                                            </div>

                                                        </form>

                                                        {/* Modal  Form End */}
                                                    </div>
                                                    {/* Form Editpill end */}
                                                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Category Name</th>
                                                                    <th scope="col"></th>

                                                                </tr>
                                                            </thead>
                                                            <tbody >
                                                                <tr>
                                                                    <th scope="row">Mobiles</th>
                                                                    <td>
                                                                        <span class="custom-checkbox">
                                                                            <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                                                            <label for="checkbox1"></label>
                                                                        </span>
                                                                    </td>

                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">Unknown</th>
                                                                    <td>
                                                                        <span class="custom-checkbox">
                                                                            <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                                                            <label for="checkbox1"></label>
                                                                        </span>
                                                                    </td>

                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                                            <input type="submit" class="btn btn-info" value="Save" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div id="deleteEmployeeModal" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <form>
                                        <div class="modal-header">
                                            <h4 class="modal-title">Delete Employee</h4>
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="pills-tabContent">
                                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">1...</div>
                                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">2...</div>
                                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">3...</div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                                            <input type="submit" class="btn btn-danger" value="Delete" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default ShowAllAgents
