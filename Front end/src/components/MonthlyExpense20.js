import React from "react";
import AdminNavbar from "./AdminNavbar";

const MonthlyExpense20 = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="allMembers">
        <div className="row">
          <div className="col col-8  offset-1 mt-5">
            <div className="row">
              <div className="col-md-12">
                <h3>Monthly Expense of the societyssss</h3>
                <table className="table table-bordered table mt-3">
                  <thead className="bs thead-dark">
                    <tr>
                      <th>Month</th>
                      <th>Garbage Collector</th>
                      <th>Water Charges</th>
                      <th>Electricity Charges</th>
                      <th>Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>January</td>
                      <td>1000</td>
                      <td>2000</td>
                      <td>1000</td>
                      <td>1000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyExpense20;
