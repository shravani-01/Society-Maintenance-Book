import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MemberNavbar from "./MemberNavbar";
import { Table, Button } from "react-bootstrap";

function YearlyExpense() {
  const [records, setrecords] = useState([]);
  const [yearly, setyearly] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      let username = sessionStorage.getItem("member");
      console.log(username);
      try {
        const data = (await axios.get("http://localhost:3001/user/" + username))
          .data;
        const data2 = (
          await axios.get("http://localhost:3001/user/yearly/" + username)
        ).data;
        console.log(data2);
        setrecords(data.records);
        setyearly(data2);
      } catch (err) {
        console.log(err);
      }
    }
    fetchApi();
  }, []);

  const handleForm = () => {
    let keys = yearly;
  };
  return (
    <div>
      <MemberNavbar />
      <div className="allMembers">
        <div className="row">
          <div className="col col-8  offset-1 mt-5">
            <div className="row">
              <div className="col-md-12">
                <h3>Yearly Expense </h3>

                <Table striped bordered hover>
                  <thead className="bs thead-dark">
                    <tr>
                      {/* <th>id</th> */}
                      <th>Year:Annual Maintenance paid</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tbody>
                      {yearly.map((w) => {
                        return (
                          <tr>
                            <td>{w}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YearlyExpense;
