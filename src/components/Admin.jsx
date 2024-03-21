import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'


function Admin() {
    const [allEmployees, setAllEmployees] = useState([])
    const fetchData = async () => {
        const response = await axios.get('http://localhost:8000/getEmployees')
        console.log(response.data.employee);//array of data
        setAllEmployees(response.data.employee)
    }
    console.log(allEmployees);//array of data
   
    const deleteEmp = async(id)=>{
        const response = await axios.delete('http://localhost:8000/deleteEmployee/'+id)
        console.log(response);
        alert(response.data.message)
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='container' style={{paddingBottom:'157px'}}>
            <h1 className='text-center m-3'>Employee Management System</h1>
            <p style={{ textAlign: 'justify' }}>
                Employee management is a practice that helps a manager
                improve employee productivity and satisfaction to help
                an organisation reach its goals. Human resources (HR)
                professionals often use an employee management system (EMS),
                including recruitment, offboarding and performance management.
                Using a dedicated EMS can help an HR manager streamline the
                hiring process and improve workplace efficiency. In this article,
                we discuss what an employee management systems is, outline its benefits
                and types and list some examples of employee management software tools.
            </p>
            <Link to={'/add'}>
                {/* readirect to home page */}
                <button className='btn btn-dark my-5' ><i class="fa-solid fa-user-plus"></i>Add</button>
            </Link>
            <div className='table'>

                <MDBTable hover>

                    <MDBTableHead>
                        <tr>
                            <th scope='col'>No</th>
                            <th scope='col'>Name </th>
                            <th scope='col'>Age</th>
                            <th scope='col'>Designation</th>
                            <th scope='col'>Salary</th>
                            <th scope='col' style={{textAlign:'center'}}>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            allEmployees.map(item => (
                                <tr>
                                    <th scope='row'>{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.designation}</td>
                                    <td>{item.salary}</td>
                                    <td>
                                        <div className='d-flex justify-content-around'>

                                          <Link to={'edit/'+item.id}>
                                          <button className='btn'>
                                                <i className="fa-solid fa-pen text-success"></i>
                                            </button>
                                          </Link>

                                            <button onClick={()=>deleteEmp(item.id)} className='btn'>
                                                <i className="fa-solid fa-trash text-danger"></i>
                                            </button>
                                              
                                          <Link to={'view/'+item.id}>
                                          <button className='btn'>
                                            <i class="fa-solid fa-user"></i> 
                                            </button> 
                                          </Link> 


                                        </div>
                                    </td>
                                </tr>
                            ))
                        }


                    </MDBTableBody>
                </MDBTable>
            </div>

        </div>
    )
}

export default Admin