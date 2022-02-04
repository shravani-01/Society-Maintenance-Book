import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { Table, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const UpdateMember = () => {
  const [name, setname] = useState("");
  const [flat, setflat] = useState(0);
  const [records, setrecords] = useState([]);
  const [due, setdue] = useState([]);
  const [recordmonth, setrecordmonth] = useState("");
  const [recordamount, setrecordamount] = useState(0);
  const [recordyear, setrecordyear] = useState(0);
  useEffect(() => {
    async function fetchApi() {
      let username = sessionStorage.getItem("currentUser");
      try {
        const data = (await axios.get("http://localhost:3001/user/" + username))
          .data;
        console.log(data.records);
        setname(data.name);
        setflat(data.flatNumber);
        setrecords(data.records);
        setdue(data.due);
      } catch (err) {
        console.log(err);
      }
    }
    fetchApi();
  }, []);
  const add = () => {};

  const [dues, setdues] = useState({});

  const handleForm = async (e) => {
    let txn = {
      month: recordmonth,
      year: recordyear,
      amount: recordamount,
    };
    try {
      let username = sessionStorage.getItem("currentUser");
      console.log(username);
      await axios
        .post("http://localhost:3001/admin/addRecord/" + username, txn)
        .then((response) => {
          console.log(response.data);
          setrecords(response.data.records);
          setdue(response.data.due);
        });
    } catch (e) {
      console.log(e);
    }
    // postDataToServer(user);
    e.preventDefault();
  };

  const handledelete = async (id, month, year, amount) => {
    let username = sessionStorage.getItem("currentUser");
    let txn = {
      id: id,
      month: month,
      year: year,
      amount: amount,
    };
    try {
      await axios
        .post("http://localhost:3001/admin/deleteDue/" + username, txn)
        .then((res) => {
          console.log(res.data);
          setrecords(res.data.records);
          setdue(res.data.due);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const test = () => {
    console.log(name);
    console.log(flat);
  };
  return (
    <div>
      <AdminNavbar />

      <div className="row justify-content-center mt-5 ">
        <div className="col-md-5 ">
          <div>
            <h1>Edit Details</h1>
            {/* <Button
              style={{
                marginTop: "10px",
                textAlign: "center",
                marginLeft: "65px",
              }}
              value="edit"
              className="btn-primary"
              onClick={handledelete}
            >
              delete
            </Button> */}
            <div className="create-page-main mb-5">
              <div className="pt-5">
                <div className="row">
                  <div className="col col-4">
                    <label className="form-label" for="name">
                      <h5>Name :-</h5>
                    </label>
                  </div>
                  <div className="col col-8">
                    <input
                      type="text"
                      className="form-control aa"
                      placeholder="name"
                      value={name}
                      onChange={(e) => {
                        // setname(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col col-4">
                    <label className="form-label" for="email">
                      <h5>Flat Number :-</h5>
                    </label>
                  </div>
                  <div className="col col-8">
                    <input
                      type="email"
                      className="form-control aa"
                      placeholder="Flat Number"
                      value={flat}
                      onChange={(e) => {
                        // setemail(e.target.value);
                      }}
                    />
                  </div>
                </div>{" "}
                <br /> <br />
                <h5>Records :-</h5>
                <Table striped bordered hover>
                  <thead className="bs thead-dark">
                    <tr>
                      <td>Maintenance</td>
                      <td>Month</td>
                      <td>Year</td>
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
              <br /> <br />
              <h5>Dues :-</h5>
              <Table striped bordered hover variant="dark">
                <thead className="bs thead-dark">
                  <tr>
                    <th>Due</th>
                    <th>Month</th>
                    <th>Year</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {due.map((ele) => {
                    return (
                      <tr key={ele.id}>
                        <td>{ele.amount}</td>
                        <td>{ele.month}</td>
                        <td>{ele.year}</td>
                        <td>
                          <Button
                            value="edit"
                            className="btn-danger"
                            onClick={() => {
                              handledelete(
                                ele.id,
                                ele.month,
                                ele.year,
                                ele.amount
                              );
                            }}
                          >
                            delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Form onSubmit={handleForm}>
                <h2>Add user form</h2>
                <input
                  style={{
                    marginTop: "10px",
                    textAlign: "center",
                    border: "2px solid black",
                  }}
                  type="text"
                  placeholder="Maintenance"
                  onChange={(e) => {
                    setrecordamount(e.target.value);
                    // setdues({ ...user, month: e.target.value });
                  }}
                  name="maintenance"
                />
                <br />
                <input
                  style={{
                    marginTop: "10px",
                    textAlign: "center",
                    border: "2px solid black",
                  }}
                  type="text"
                  placeholder="Month"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setrecordmonth(e.target.value);
                    // setdues({ ...user, month: e.target.value });
                  }}
                  name="month"
                />
                <br />
                <input
                  style={{
                    marginTop: "10px",
                    textAlign: "center",
                    border: "2px solid black",
                  }}
                  type="text"
                  placeholder="Year"
                  onChange={(e) => {
                    setrecordyear(e.target.value);
                    // setdues({ ...user, year: e.target.value });
                  }}
                  name="year"
                />
                <br />

                <Button
                  style={{
                    marginTop: "10px",
                    textAlign: "center",
                    marginLeft: "65px",
                  }}
                  value="edit"
                  className="btn-primary"
                  onClick={handleForm}
                >
                  Add Record
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMember;
