import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
    // create users state
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    // on load get data of users and store it in users
    useEffect(() => {
        axios.get('http://localhost:/api/user')
            .then(response => {
                setUsers(response.data.users);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    useEffect(() => {



    }, [users]);


    // handle click for delete button

    const HandleDeleteClick = (email, name) => {

        console.log(email, name);
        const headers = {
            'Authorization': 'Bearer paperboy'
        }
        const data = {
            name: name,
            email: email
        }


        axios.delete('http://localhost:/api/user', { data })
            .then(response => {
                // console.log("erewerewrre", response.data.email);

                // console.log(users);
                const updatedUsers = users.filter((user) => user.email !== response.data.email)
                console.log("=>>>>", updatedUsers);
                setUsers(updatedUsers)
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            }
            );

        // console.log(tempemail);


    };


    // handle click for edit button

    const HandleEditClick = (email) => {

        localStorage.setItem('email', email);
        const local = localStorage.getItem('email')
    };



    return (
        <div className="bg-secondary text-white">
            <nav className="navbar sticky-top navbar-dark bg-dark text-white">
                <a className="navbar-brand" href="#">Create User Data</a>
            </nav>
            {/* table */}
            <table className="table">
                {/* table head */}
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Users</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                {/* table body */}
                <tbody>
                    {users.map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.username}</td>
                                <td>{e.email}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-danger"
                                        onClick={() => HandleDeleteClick(e.email, e.name)}
                                    >
                                        delete
                                    </button>
                                    <Link to="/edit">
                                        <button type="button" className="btn btn-outline-warning"
                                            onClick={() => HandleEditClick(e.email)}
                                        >
                                            edit
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
            <Link to="/add">
                <button type="button" className="btn btn-success" >
                    create
                </button>
            </Link>
        </div>
    )

}