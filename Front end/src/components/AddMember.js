import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import { toast } from "react-toastify";

function AddMember(props) {
  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [flat, setflat] = useState(0);
  const [password, setpassword] = useState("");
  // const [role, ] = useState("");

  const setData = async () => {
    let user = {
      username: username,
      flatNumber: flat,
      name: name,
      password: password,
      records: [],
      role: "ROLE_USER",
      due: [],
    };
    try {
      await axios
        .post("http://localhost:3001/admin/addUser", user)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            console.log(res.data);
            toast.error("New User Created", {
              position: toast.POSITION.TOP_CENTER,
            });
          } else {
            console.log(res);
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <AdminNavbar />
      <div className="row justify-content-center mt-5 ">
        <div className="col-md-5 ">
          <div>
            <h1>Add new member to the society</h1>
            <div className="create-page-main mb-5">
              <div className="pt-5">
                <div className="row">
                  <div className="col col-4">
                    <label className="form-label" for="name">
                      <h5>User Name :-</h5>
                    </label>
                  </div>
                  <div className="col col-8">
                    <input
                      type="text"
                      className="form-control aa"
                      placeholder="name"
                      onChange={(e) => {
                        setusername(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col col-4">
                    <label className="form-label" for="phone">
                      <h5>Name :-</h5>
                    </label>
                  </div>
                  <div className="col col-8">
                    <input
                      type="text"
                      className="form-control aa"
                      placeholder="Name of Member"
                      onChange={(e) => {
                        setname(e.target.value);
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
                      type="number"
                      className="form-control aa"
                      placeholder="Flat number"
                      onChange={(e) => {
                        setflat(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col col-4">
                    <label className="form-label" for="password">
                      <h5>Password :-</h5>
                    </label>
                  </div>
                  <div className="col col-8">
                    <input
                      type="password"
                      className="form-control aa"
                      placeholder="password"
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <button className="btn btn-primary mt-3" onClick={setData}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMember;
