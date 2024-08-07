import React from "react";
import "../styles/Orders.css";


export default function Orders() {
  return (
    <div className="orders">
      <span className="orders-title">Recent Orders</span>
      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wade Warren</td>
              <td>15478256</td>
              <td>$124.00</td>
              <td>
                <span className="delivered">Delivered</span>
              </td>
            </tr>
            <tr>
              <td>Jane Cooper</td>
              <td>48965786</td>
              <td>$365.02</td>
              <td>
                <span className="delivered">Delivered</span>
              </td>
            </tr>
            <tr>
              <td>Guy Hawkins</td>
              <td>78958215</td>
              <td>$45.88</td>
              <td>
                <span className="cancelled">Cancelled</span>
              </td>
            </tr>
            <tr>
              <td>Kristin Watson</td>
              <td>20965732</td>
              <td>$65.00</td>
              <td>
                <span className="pending">Pending</span>
              </td>
            </tr>
            <tr>
              <td>Cody Fisher</td>
              <td>95715620</td>
              <td>$545.00</td>
              <td>
                <span className="delivered">Delivered</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
