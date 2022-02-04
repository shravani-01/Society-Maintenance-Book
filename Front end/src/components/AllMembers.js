import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllMembers.css";
import AdminNavbar from "./AdminNavbar";
import { Table, Button } from "react-bootstrap";

const Allmembers = () => {
  const [allusers, setallusers] = useState([]);
  const [defaulters, setdefaulters] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      try {
        const data = (await axios.get(`http://localhost:3001/admin/allusers`))
          .data;
        const data2 = (
          await axios.get(`http://localhost:3001/admin/defaulters`)
        ).data;
        console.log(data);
        console.log(data2);
        setallusers(data);
        setdefaulters(data2);
      } catch (err) {}
    }
    fetchApi();
  }, []);

  const updateUsername = (id) => {
    sessionStorage.setItem("currentUser", id);
  };

  const deleteUser = async (id) => {
    const newdata = (
      await axios.delete(`http://localhost:3001/admin/deleteUser/${id}`)
    ).data;
    const newdata2 = (await axios.get(`http://localhost:3001/admin/defaulters`))
      .data;
    console.log(newdata);
    setallusers(newdata);
    setdefaulters(newdata2);
  };
  return (
    <div>
      <AdminNavbar />
      <div className="allMembers">
        <div className="row">
          <div className="col col-8  offset-1 mt-5">
            <div className="row">
              <div className="col-md-12">
                <h3>All Members</h3>
                <Table striped bordered hover>
                  <thead className="bs thead-dark">
                    <tr>
                      {/* <th>id</th> */}
                      <th>Name</th>
                      <th>Flat Number</th>
                      <th>Update</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allusers.length &&
                      allusers.map((user) => {
                        return (
                          <tr key={user.username}>
                            <td>{user.name}</td>
                            <td>{user.flatNumber}</td>
                            <td>
                              <Link props={user.username} to="/UpdateMember">
                                <Button
                                  value="edit"
                                  className=" btn-warning"
                                  onClick={() => {
                                    updateUsername(user.username);
                                  }}
                                >
                                  Edit Details
                                </Button>
                              </Link>
                            </td>
                            <td>
                              <Button
                                value="edit"
                                className="btn-danger"
                                onClick={() => deleteUser(user.username)}
                              >
                                delete
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>

                <h3 className="def_members">Default Members</h3>
                <Table striped bordered hover responsive>
                  <thead className="bs thead-dark">
                    <tr>
                      {/* <th>id</th> */}
                      <th>Name</th>
                      <th>Flat Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {defaulters.length &&
                      defaulters.map((d) => {
                        return (
                          <tr key={d.username}>
                            <td>{d.name}</td>
                            <td>{d.flatNumber}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allmembers;
