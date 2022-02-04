import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import './SocietyYearlyExpense.css';

function SocietyYearlyExpense() {
  const [garbage, setgarbage] = useState([]);
  const [elec, setelec] = useState([]);
  const [water, setwater] = useState([]);
  const [others, setothers] = useState([]);
  
  useEffect(() => {
    async function fetchApi() {
      try {
        console.log("Inside try");
        const result = await axios.get(
          `http://localhost:3001/admin/societyyearly`
        );
        console.log("Result Electricity = " + result.data["Electricity"]);
        console.log("Result Garbage = " + result.data["Garbage"]);
        console.log("Result Water = " + result.data["Water"]);
        console.log("Result Others = " + result.data["Others"]);

        setelec(result.data["Electricity"]);
        setgarbage(result.data["Garbage"]);
        console.log(garbage);
        setwater(result.data["Water"]);
        setothers(result.data["Others"]);
        // console.log(garbage, elec, water, others);
      } catch (err) {
        console.log(err);
      }
      let years = [];
    }
    fetchApi();
  }, []);
  /*  const test = () => {
    // let
    // garbage.forEach(element => {
    //   // let gkeys = gar
    // })
    // garbage.map((ele) => {
    //   console.log(ele);
    // });
    console.log(elec);
    ekeys.forEach((element) => {
      console.log(element);
    });
  }; */
  return (
    <div>
      <AdminNavbar />
      <div className="allMembers">
        <div className="row">
          <div className="col col-8  offset-1 mt-5">
            <div className="row">
              <div className="col-md-12">
                <h3 style={{textAlign:'center' , marginBottom:'1px'}}>Yearly Expense of the society</h3>

             
                {console.log("elec = " + elec)}
               
                {elec.forEach((element) => {
                  console.log("insisde foreach " + element);
                })}
  <section>

  <div className="card" style={{backgroundColor:'#D57E7E'}}>
  <h4><b>Garbage</b></h4>
  <hr/>
  <div className="container">
   
    <table>
      <tr  style={{overflowX:"auto;"}}>
        <th>Year</th>
        <th>Total Cost</th>
      </tr>
      {garbage.map((g) => {
                        return (
                          <tr>
                            <td>{g.slice(0, 4)}</td>
                            <td><i class="fas fa-rupee-sign"></i> {g.slice(5, 9)}</td>
                          </tr>
                        );
                      })}
      
      </table>
  </div>
</div>

<div className="card" style={{backgroundColor:'#FEC260'}}>
<h4><b>Electricity</b></h4>
  <hr/>
  <div className="container">
   
    <table>
      <tr  style={{overflowX:"auto;"}}>
        <th>Year</th>
        <th>Total Cost</th>
      </tr>
      {elec.map((e) => {
                        return (
                          <tr>
                            <td>{e.slice(0, 4)}</td>
                            <td><i class="fas fa-rupee-sign"></i> {e.slice(5, 9)}</td>
                          </tr>
                        );
                      })}
      
      </table>
  </div>
</div>
</section>



<section>
<div className="card" style={{backgroundColor:'lightblue'}}>
<h4><b>Water</b></h4>
  <hr/>
  <div className="container">
   
    <table>
      <tr  style={{overflowX:"auto;"}}>
        <th>Year</th>
        <th>Total Cost</th>
      </tr>
      {water.map((w) => {
                        return (
                          <tr>
                            <td>{w.slice(0, 4)}</td>
                            <td><i class="fas fa-rupee-sign"></i> {w.slice(5, 9)}</td>
                          </tr>
                        );
                      })}
      
      </table>
  </div>
</div>

<div className="card" style={{backgroundColor:'#87A8A4'}}>
<h4><b>Others</b></h4>
  <hr/>
  <div className="container">
    <table>
      <tr  style={{overflowX:"auto;"}}>
        <th>Year</th>
        <th>Total Cost</th>
      </tr>
      {others.map((o) => {
                        return (
                          <tr>
                            <td>{o.slice(0, 4)}</td>
                            <td><i class="fas fa-rupee-sign"></i> {o.slice(5, 9)}</td>
                          </tr>
                        );
                      })}
      
      </table>
  </div>
</div>
</section>

 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocietyYearlyExpense;
