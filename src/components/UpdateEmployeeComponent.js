import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory, useParams } from 'react-router-dom'

function UpdateEmployeeComponent() {
    const [employee, setEmployee] = useState([])

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [emailId, setEmailId] = useState("");

    let id1 = useParams().id
    console.log('id1:', id1)

    //grab employee info from DB on load
    useEffect(() => {
        try {
            fetch(`/api/v1/employees/${id1}`, {
                method: "get", headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log('dataAction:', data)
                    setEmployee(data)

                    setFirstName(data.firstName)
                    setLastName(data.lastName)
                    setEmailId(data.emailId)
                })
        } catch (error) {
            // dispatch({type: GET_EMPLOYEES_FAIL, payload: error.message})
        }
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, emailId)

        try {
            fetch(`/api/v1/employees/${id1}`, {
                method: "put", headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: firstName, lastName: lastName, emailId: emailId
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log('dataAction:', data)
                })

        } catch (error) {
            // dispatch({type: GET_EMPLOYEES_FAIL, payload: error.message})
        }
    }

    console.log('employee:', employee)

    return (
        <div>
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center">Update Employee</h2>
                            <div className="card-body">
                                <form className="form" name="signupform" onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={firstName} onChange={e => setFirstName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={lastName} onChange={e => setLastName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control"
                                            value={emailId} onChange={e => setEmailId(e.target.value)} />
                                    </div>

                                    <button className="btn btn-success" type="submit">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default UpdateEmployeeComponent
