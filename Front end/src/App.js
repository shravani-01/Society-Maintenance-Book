import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./components/pages/Home";
import Login from "./components/Login";
import Loginx from "./components/New folder/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./components/pages/AdminDashboard";
import Member from "./components/pages/MemberDashboard";
import AllMembers from "./components/AllMembers";
import AllSocietyMembers from "./components/AllSocietyMembers";
import SocietyYearlyExpense from "./components/SocietyYearlyExpense";

import AddMember from "./components/AddMember";
import UpdateMember from "./components/UpdateMember";
import YearlyExpense from "./components/YearlyExpense";
import MyMaintenance from "./components/MyMaintenance";

import MonthlylyExpense21 from "./components/MonthlyExpense21";
import MonthlyExpense20 from "./components/MonthlyExpense21";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar />  */}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" exact component={Login} />

          <Route path="/Admin" exact component={Admin} />
          <Route path="/Member" exact component={Member} />
          <Route path="/AllMembers" exact component={AllMembers} />
          <Route path="/AllSocietyMembers" exact component={AllSocietyMembers} />
          <Route path="/MyMaintenance" exact component={MyMaintenance} />
          <Route path="/SocietyYearlyExpense" exact component={SocietyYearlyExpense} />

          <Route path="/AddMember" exact component={AddMember} />
          <Route path="/UpdateMember" exact component={UpdateMember} />
          <Route path="/YearlyExpense" exact component={YearlyExpense} />

          <Route
            path="/MonthlyExpense21"
            exact
            component={MonthlylyExpense21}
          />
          <Route path="/MonthlyExpense20" exact component={MonthlyExpense20} />

          {/* <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
