import React, { useEffect, useState } from 'react'
import { MDBCard, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function View() {
  const{id} = useParams();
  console.log(id);
  const [anEmployee,setAnEmolyee]=useState()//particular employee details
 //api call to fetch particular employee details

  const fetchEmployee = async () => {
    const response = await axios.get('http://localhost:8000/getAnEmployee/' + id)
    console.log(response.data.employee);//particular employee details
   setAnEmolyee(response.data.employee)

  }
  console.log(anEmployee);
   
  useEffect(() => {
    fetchEmployee()
  }, [])

  return (
    <div className='container'>
      <div style={{padding:'30px 30px',paddingLeft:'400px',paddingRight:'500px'}}>
       {
         <MDBCard>
         <MDBListGroup flush>
           <MDBListGroupItem>Id : {anEmployee?.id}</MDBListGroupItem>
           <MDBListGroupItem>Name : {anEmployee?.name}</MDBListGroupItem>
           <MDBListGroupItem>Age : {anEmployee?.age}</MDBListGroupItem>
           <MDBListGroupItem>Designation : {anEmployee?.designation}</MDBListGroupItem>
           <MDBListGroupItem>Salary : {anEmployee?.salary}</MDBListGroupItem>
         </MDBListGroup>
       </MDBCard>
       }
      </div>

    </div>
  )
}

export default View