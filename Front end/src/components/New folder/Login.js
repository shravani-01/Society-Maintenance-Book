// import React, { useState } from "react";
// import {
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   FormText,
//   Alert,
// } from "reactstrap";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   useHistory,
// } from "react-router-dom";

// import { ListGroup, ListGroupItem } from "reactstrap";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Header from "./HeaderEmployee";
// import axios from "axios";

// toast.configure();

// const Login = (props) => {
//   const [user, setUser] = useState({});

//   const postDataToServerEmployee = (user) => {
//     axios
//       .get(
//         `http://localhost:8080/eptapi/login/employee/` +
//           user.userName +
//           "/" +
//           user.passWord
//       )
//       .then(
//         (response) => {
//           if (response.data != "") {
//             console.log("authenticated");
//             sessionStorage.setItem("member", JSON.stringify(response.data));
//             history.push("/memberpageaddress");
//           } else {
//             toast.error("Please enter correct credentials", {
//               position: toast.POSITION.BOTTOM_CENTER,
//             });
//             history.push("/");
//           }
//         },
//         (error) => {
//           console.log(error);
//           console.log("error");
//         }
//       );
//   };

//   const postDataToServerSupervisor = (user) => {
//     axios
//       .get(
//         `http://localhost:8080/eptapi/login/supervisor/` +
//           user.userName +
//           "/" +
//           user.passWord
//       )
//       .then(
//         (response) => {
//           if (response.data != "") {
//             console.log("authenticated");
//             sessionStorage.setItem("admin", JSON.stringify(response.data));
//             history.push("/adminpageaddress");
//           } else {
//             toast.error("Please enter correct credentials", {
//               position: toast.POSITION.BOTTOM_CENTER,
//             });
//             history.push("/");
//           }
//         },
//         (error) => {
//           console.log(error);
//           console.log("error");
//         }
//       );
//   };

//   const [radio, setRadio] = useState({});
//   const [rememberMe, setRememberMe] = React.useState(true);
//   let history = useHistory();

//   const submitHandler = () => {
//     // console.log(...radio.option);

//     var format = /[!@#$%^&*()+\-=\[\]{};':"\\|,<>\/?]+/;
//     if (
//       radio.option == "Member" &&
//       !format.test(user.userName) &&
//       user.userName.length >= 12
//     ) {
//       console.log(user);
//       console.log(format.test(user.userName));

//       // postDataToServerEmployee(user);
//     } else if (radio.option == "Admin" && !format.test(user.userName)) {
//       console.log(user);
//       // postDataToServerSupervisor(user);
//     } else {
//       console.log("no radio button selected");
//       if (format.test(user.username) == true) {
//         toast.error("Special character not allowed", {
//           position: toast.POSITION.BOTTOM_CENTER,
//         });
//       }
//       if (user.userName.length <= 12) {
//         toast.error("username cannot be less than 12 characters", {
//           position: toast.POSITION.BOTTOM_CENTER,
//         });
//       }
//       if (radio.option !== "Admin" && radio.option !== "Member") {
//         toast.error("please select role", {
//           position: toast.POSITION.BOTTOM_CENTER,
//         });
//       }
//       // toast.error('Please select the sign in as option', {position: toast.POSITION.BOTTOM_CENTER}) ;
//     }
//   };

//   return (
//     <div>
//       {/* <Header /> */}
//       <Form
//         onSubmit={submitHandler}
//         style={{
//           boxShadow: "10px 10px 10px #CCCCCC",
//           height: "500px",
//           width: "450px",
//           margin: "auto",
//           marginRight: "50px",
//           marginTop: "71px",
//           marginBottom: "30px",
//           backgroundSize: "cover",
//           backgroundColor: "rgb(143, 143, 142,0.2)",
//           backgroundRepeat: "no-repeat",
//           border: "5px fade rgb(143, 143, 142,0.2)",
//           borderBlockColor: "rgb(143, 143, 142,0.2)",
//         }}
//       >
//         <FormGroup
//           style={{
//             fontSize: "20px",
//             textAlign: "center",
//             fontWeight: "bold",
//             paddingTop: "25px",
//           }}
//         >
//           <h3
//             style={{
//               textAlign: "center",
//               color: "rgb(143, 143, 142)",
//               paddingBottom: "0px",
//             }}
//           >
//             User name
//           </h3>
//           <Input
//             style={{ textAlign: "center" }}
//             type="email"
//             name="email"
//             id="exampleEmail"
//             placeholder="Enter username"
//             onChange={(e) => {
//               setUser({ ...user, userName: e.target.value });
//             }}
//           />
//         </FormGroup>

//         <FormGroup
//           style={{ fontSize: "20px", textAlign: "center", fontWeight: "bold" }}
//         >
//           <h3
//             style={{
//               textAlign: "center",
//               color: "rgb(143, 143, 142)",
//               paddingTop: "10px",
//             }}
//           >
//             Password
//           </h3>
//           <Input
//             type="password"
//             name="password"
//             id="examplePassword"
//             placeholder="Enter password"
//             onChange={(e) => {
//               setUser({ ...user, passWord: e.target.value });
//             }}
//           />
//         </FormGroup>

//         <ListGroup className="py-5">
//           <ListGroupItem>
//             <FormGroup
//               check
//               style={{
//                 fontSize: "20px",
//                 textAlign: "center",
//                 fontWeight: "bold",
//               }}
//             >
//               <Label
//                 style={{ textAlign: "center", color: "rgb(143, 143, 142)" }}
//                 check
//               >
//                 <Input
//                   type="radio"
//                   name="radio1"
//                   onChange={(e) => {
//                     setRadio({ ...radio, option: "Member" });
//                   }}
//                 />{" "}
//                 Sign in as a Member
//               </Label>
//             </FormGroup>
//           </ListGroupItem>

//           <ListGroupItem>
//             <FormGroup
//               check
//               style={{
//                 fontSize: "20px",
//                 textAlign: "center",
//                 fontWeight: "bold",
//                 padding: "20px",
//               }}
//             >
//               <Label
//                 style={{ textAlign: "center", color: "rgb(143, 143, 142)" }}
//                 check
//               >
//                 <Input
//                   type="radio"
//                   name="radio1"
//                   onChange={(e) => {
//                     setRadio({ ...radio, option: "Admin" });
//                   }}
//                 />{" "}
//                 Sign in as an Admin
//               </Label>
//             </FormGroup>
//             <FormGroup
//               check
//               style={{
//                 fontSize: "20px",
//                 textAlign: "center",
//                 fontWeight: "bold",
//               }}
//             >
//               <Label
//                 style={{ textAlign: "center", color: "rgb(143, 143, 142)" }}
//                 check
//               >
//                 <Input
//                   name="rememberMe"
//                   defaultChecked={rememberMe}
//                   type="checkbox"
//                 />{" "}
//                 Remember me
//               </Label>
//             </FormGroup>
//           </ListGroupItem>
//         </ListGroup>

//         <div
//           style={{ fontSize: "20px", textAlign: "center", fontWeight: "bold" }}
//         >
//           <Button
//             onClick={submitHandler}
//             color="primary"
//             size="lg"
//             className="align-baseline"
//           >
//             Login
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default Login;
