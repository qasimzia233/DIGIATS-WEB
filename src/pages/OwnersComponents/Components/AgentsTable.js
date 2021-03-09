import React, { Component } from 'react'


export class AgentsTable extends Component {
    


    render() {
      
        return (
            <div className='card  agentsTable' style={{  overflow: 'auto' }}>
              <div>
              </div>
            
                <div className="card-header  flex-row" >
                    <div className='flex-grow-1' >
                        <div className='font-weight-bold font-size-lg'>Agents Stats</div>
                        <div className='font-weight-normal font-size-sm text-sky'>More than 400+ new members</div>
                    </div>
                    <button class="btn btn-primary" type="button">
                        Add New Member
                        <i class="fas fa-user-plus ml-1"></i>
                    </button>
                </div>
                <div className="card-body border-0 ">

                    <table class="table border-0 table-hover ble-borderless table-responsive" >
                        <thead >
                            <tr >
                                <th  scope="col"># </th>
                                <th scope="col">Owner</th>
                                <th scope="col">Agent</th>
                                <th scope="col">Address</th>
                                <th scope="col">At</th>
                               
                            </tr>
                        </thead>
                        <tbody >
                            <tr className='table-active'>
                                <th scope="row">1</th>
                                <td>
                                    <div className='font-weight-bold'>Sir Zeshan Mudassar</div>
                                  
                                </td>
                                <td>Sir Sami Ullah</td>
                                <td> <i class="fas fa-map-marker-alt"></i>  DC Colony, Ravi Block Dc Colony</td>
                                <td>10 : 40 am</td>
                            </tr>
                            <tr >
                            <th scope="row">1</th>
                                <td>
                                    <div className='font-weight-bold'>Sir Zeshan Mudassar</div>
                                  
                                </td>
                                <td>Sir Sami Ullah</td>
                                <td> <i class="fas fa-map-marker-alt"></i>  DC Colony, Ravi Block Dc Colony</td>
                                <td>10 : 40 am</td>
                            </tr>
                            <tr className='alert alert-primary '>
                            <th scope="row">1</th>
                                <td>
                                    <div className='font-weight-bold'>Sir Zeshan Mudassar</div>
                                  
                                </td>
                                <td>Sir Sami Ullah</td>
                                <td> <i class="fas fa-map-marker-alt"></i>  DC Colony, Ravi Block Dc Colony</td>
                                <td>10 : 40 am</td>
                            </tr>
                            <tr className='alert alert-success '>
                            <th scope="row">1</th>
                                <td>
                                    <div className='font-weight-bold'>Sir Zeshan Mudassar</div>
                                  
                                </td>
                                <td>Sir Sami Ullah</td>
                                <td> <i class="fas fa-map-marker-alt"></i>  DC Colony, Ravi Block Dc Colony</td>
                                <td>10 : 40 am</td>
                            </tr>
                         
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default AgentsTable
