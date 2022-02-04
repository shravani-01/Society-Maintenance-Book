import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllMembers.css";
import MemberNavbar from "./MemberNavbar";
import { Table, Button } from "react-bootstrap";

const MyMaintenance = () => {
  // const [user, setuser] = useState("");
  // const [userdata, setdata] = useState({});
  const [records, setrecords] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      let username = sessionStorage.getItem("member");
      try {
        const data = (await axios.get("http://localhost:3001/user/" + username))
          .data;
        console.log(data.records);
        // setdata(data);
        // console.log("Inside axios success");
        // setrecords(userdata.records)
        setrecords(data.records);
      } catch (err) {
        console.log(err);
      }
    }

    fetchApi();
  }, []);
  const test = () => {
    // console.log(user)
    // console.log(userdata);
    console.log(records);
  };
  return (
    <div>
      <MemberNavbar />
      <div className="allMembers">
        <div className="row">
          <div className="col col-8  offset-1 mt-5">
            <div className="row">
              <div className="col-md-12">
                <h3>My Maintenance</h3>
                {/* <Button
                  onClick={test}
                  color="primary"
                  size="lg"
                  className="align-baseline"
                >
                  Login
                </Button> */}
                <Table striped bordered hover>
                  <thead className="bs thead-dark">
                    <tr>
                      <th>Maintenance</th>
                      <th>Month</th>
                      <th>Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records.map((record) => {
                      return (
                        <tr key={record.id}>
                          <td>{record.amount}</td>
                          <td>{record.month}</td>
                          <td>{record.year}</td>
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

export default MyMaintenance;
