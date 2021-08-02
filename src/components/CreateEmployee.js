import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

export default function CreateEmployee() {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [emailId, setEmailId] = useState("");
    let [loading, setLoading] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            fetch(`https://spring-boot-api2.herokuapp.com/api/v1/employees`, {
                //fetch(`/api/v1/employees`, {
                method: "post", headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: firstName, lastName: lastName, emailId: emailId
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log('dataAction:', data.id)
                    if (data.id) {
                        alert("Employee created!")
                        //setLoading(false)
                        setFirstName("")
                        setLastName("")
                        setEmailId("")
                    } else {
                        alert("That email already exists")
                    }
                    setLoading(false)
                    // setFirstName("")
                    // setLastName("")
                    // setEmailId("")
                })
        } catch (error) {
            // dispatch({type: GET_EMPLOYEES_FAIL, payload: error.message})
        }
    }

    return (
        <div>
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center">Add Employee</h2>
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

                                    <button className="btn btn-success" disabled={loading} type="submit">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
