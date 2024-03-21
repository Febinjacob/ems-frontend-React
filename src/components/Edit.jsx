import React, { useEffect, useState } from 'react'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Edit() {
  const { id } = useParams()
  console.log(id);//particular employee id

  const navigate = useNavigate()

  const [anEmployee, setAnEmployee] = useState()//particular employee details
  //create a state for all items in employee object
  const [empid, setEmpId] = useState('')
  const [empName, setEmpName] = useState('')
  const [empAge, setEmpAge] = useState('')
  const [empDesignation, setEmpDesignation] = useState('')
  const [empSalary, setEmpSalary] = useState('')

  //api call to fetch a particular employee details 
  const fetchEmployee = async () => {
    const response = await axios.get('http://localhost:8000/getAnEmployee/' + id)
    console.log(response.data.employee);//particular employee details
    setAnEmployee(response.data.employee)
    setEmpId(response.data.employee.id)
    setEmpName(response.data.employee.name)
    setEmpAge(response.data.employee.age)
    setEmpDesignation(response.data.employee.designation)
    setEmpSalary(response.data.employee.salary)

  }
  console.log(anEmployee);//particular empolyee

  const handleUpdate=async()=>{
    //api call update particular employee
    const body  = {
     id: empid,
     name: empName,
     age: empAge,
     designation: empDesignation,
     salary: empSalary}
    const result =await axios.post('http://localhost:8000/UpdateAnEmployee/'+id,body)
    console.log(result);
    alert(result.data.message)
    navigate('/')
   
  }


  useEffect(() => {
    fetchEmployee()
  }, [])
  return (
    <div>

      <div className='conatainer'>
        <h1 className='text-center m-3'>Update Employee Details</h1>
        <div className='form'>
          <div className='w-50' style={{ marginLeft: '300px' }}>
            <MDBInput value={empid} onChange={(e)=>setEmpId(e.target.value)} label='Id' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput value={empName} onChange={(e)=>setEmpName(e.target.value)} label='Name' id='formControlDefault' type='text' size='lg' />
            <br />
            <MDBInput value={empAge} onChange={(e)=>setEmpAge(e.target.value)} label='Age' id='formControlSm' type='text' size='lg' />
            <br />
            <MDBInput value={empDesignation} onChange={(e)=>setEmpDesignation(e.target.value)} label='Designation' id='formControlSm' type='text' size='lg' />
            <br />
            <MDBInput value={empSalary} onChange={(e)=>setEmpSalary(e.target.value)} label='Salary' id='formControlSm' type='text' size='lg' />
            <br />
            <div className='my-3'>
              <Link to={'/'}>
                <MDBBtn style={{ marginRight: '100px' }}>BACK TO HOME</MDBBtn>
              </Link>
              <MDBBtn onClick={(e)=>handleUpdate(e)} >Update</MDBBtn>

            </div>
            <br />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Edit