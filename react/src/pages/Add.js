import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Add() {
    // create users state
    const [user, setUser] = useState(" ");
    const [username, setUsername] = useState(" ");
    const [email, setEmail] = useState(" ");

    const navigate = useNavigate();

    const handleCreateClick = () => {
        console.log(user, username, email);

        axios.post('http://localhost:/api/user', {
            name: user,
            username: username,
            email: email
        })
            .then(response => {
                console.log(response);
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            }
        );
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
                <div className="input-group mb-3 " style={{ maxWidth: "600px" }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">name</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3" style={{ maxWidth: "600px" }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">username</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3" style={{ maxWidth: "600px" }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">email</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-outline-success" onClick={handleCreateClick}>
                    create
                </button>
            </div>

        </>
    )
}