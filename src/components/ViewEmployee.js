import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

export default function ViewEmployee() {
    const [employee, setEmployee] = useState([])
    const id = useParams().id
    console.log('id:', id)

    //grab employee info from DB on load
    useEffect(() => {
        try {
            fetch(`https://spring-boot-api2.herokuapp.com/api/v1/employees/${id}`, {
                //fetch(`/api/v1/employees/${id}`, {
                method: "get", headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log('dataAction:', data)
                    setEmployee(data)
                })
        } catch (error) {
            // dispatch({type: GET_EMPLOYEES_FAIL, payload: error.message})
        }
    }, [])


    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View Employee Details</h3>
                <div className="card-body viewCont">
                    <div className="viewEmpContIndiv">
                        <label> Employee First Name:  </label>
                        <div>&nbsp; {employee.firstName}</div>
                    </div>
                    <div className="viewEmpContIndiv">
                        <label> Employee Last Name:  </label>
                        <div>&nbsp; {employee.lastName}</div>
                    </div>
                    <div className="viewEmpContIndiv">
                        <label> Employee Email ID:  </label>
                        <div>&nbsp; {employee.emailId}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
