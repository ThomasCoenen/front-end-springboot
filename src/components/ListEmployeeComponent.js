import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory, useParams } from 'react-router-dom'

function ListEmployeeComponent() {
    const [employees, setEmployees] = useState([])
    const history = useHistory();

    function getEmployees() {
        try {
            fetch(`https://spring-boot-api2.herokuapp.com/api/v1/employees`, {
                method: "get", headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log('dataAction:', data)
                    setEmployees(data)
                })
        } catch (error) {
            // dispatch({type: GET_EMPLOYEES_FAIL, payload: error.message})
        }
    }

    const deleteEmployee = (emp) => {
        console.log('emp:', emp)
        try {
            fetch(`https://spring-boot-api2.herokuapp.com/api/v1/employees/${emp.id}`, {
                method: "delete", headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(emp)
            })
                .then(res => res.json())
                .then(data => {   //if u get response back, filter employees from the id u deleted
                    console.log('deleteAction:', data)
                    setEmployees(employees.filter(employee => employee.id !== emp.id))
                })
        } catch (error) {
            // dispatch({type: GET_EMPLOYEES_FAIL, payload: error.message})
        }
    }

    const addEmployee = () => {
        history.push('/add-employee')
    }

    const viewEmployee = (id) => {
        history.push(`/view-employee/${id}`)
    }

    const updateEmployee = (id) => {
        history.push(`/update-employee/${id}`)
    }

    useEffect(() => {  //grab employees on load
        getEmployees()
    }, [])

    return (
        <div>
            <h2 className='text-center'>Employees List</h2>
            <div className='row'>
                <button className="btn btn-primary" onClick={addEmployee}>Add Employee</button>
            </div>

            <div className='row'>
                <table className='table table-striped table-bordered'>

                    <thead>
                        <tr>
                            <th>Emp ID</th>
                            <th>Emp First Name</th>
                            <th>Emp Last Name</th>
                            <th>Emp Email</th>
                            <th>Emp Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            employees.map(emp => (
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.firstName}</td>
                                    <td>{emp.lastName}</td>
                                    <td>{emp.emailId}</td>
                                    <td>
                                        <button className="btn btn-info" onClick={() => updateEmployee(emp.id)}>Update</button>
                                        <button className="btn btn-danger" onClick={() => deleteEmployee(emp)} style={{ marginLeft: "10px" }}>Delete</button>
                                        <button className="btn btn-info" onClick={() => viewEmployee(emp.id)} style={{ marginLeft: "10px" }}>View</button>
                                        {/* <button className="btn btn-info" onClick={() => updateEmployee(emp.id)} style={{ marginLeft: "10px" }}>View</button> */}
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default ListEmployeeComponent
