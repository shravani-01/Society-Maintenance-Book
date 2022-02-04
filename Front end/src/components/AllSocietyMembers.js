import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllMembers.css";
import MemberNavbar from "./MemberNavbar";
import { Table, Button } from "react-bootstrap";

const AllSocietyMembers = () => {
  const [allusers, setallusers] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      try {
        const data = (await axios.get(`http://localhost:3001/admin/allusers`))
          .data;
        console.log(data);
        setallusers(data);
      } catch (err) {}
    }
    fetchApi();
  }, []);
  return (
    <div>
      <MemberNavbar />
      <div className="allMembers">
        <div className="row">
          <div className="col col-8  offset-1 mt-5">
            <div className="row">
              <div className="col-md-12">
                <h3>All Society Members</h3>
                <Table striped bordered hover responsive>
                  <thead className="bs thead-dark">
                    <tr>
                      {/* <th>id</th> */}
                      <th>Name</th>
                      <th>Flat Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allusers.length &&
                      allusers.map((user) => {
                        return (
                          <tr key={user.username}>
                            <td>{user.name}</td>
                            <td>{user.flatNumber}</td>
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

export default AllSocietyMembers;
