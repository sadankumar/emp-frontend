import React,{useEffect, useState} from 'react';
import { listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { deleteEmployee } from './../services/EmployeeService';
const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
   getAllEmployee(); 
  }, []);

  function getAllEmployee(){

    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function updateEmployee(id){
 navigator(`/edit-employee/${id}`);
  }

function addNewEmployee(){
  navigator('/add-employee');
}
function removeEmployee(id){
    deleteEmployee(id).then((response)=>{
    getAllEmployee()
   }).catch(error=>{
    console.error(error);
   })
}


    return (
        <div className="container">
         <h2 className='text-center'>Employee List</h2>
         <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th className='text-center'>Id</th>
              <th className='text-center'>FirstName</th>
              <th className='text-center'>LastName</th>
              <th className='text-center'>Email</th>
              <th className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button className='btn btn-info'
                  onClick={()=>updateEmployee(employee.id)}>
                    Update
                  </button>
                  
                  <button className='btn btn-danger'
                  style={{marginLeft: '10px'}} onClick={
                    () => removeEmployee(employee.id)
                  }>
                    Delete
                  </button>

                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ListEmployeeComponent;