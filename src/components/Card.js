import React from "react";
import "../styles/Card.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export default function Card({name}) {
    if (name === "total-orders") {
        return (
            <div className="card">
                <div className={`card-icon ${name}`}>
                    <ShoppingBasketIcon />
                </div>
                <div className="card-text">Total Orders</div>
                <div className="card-value">
                    <span className="value-num">75</span>
                    <span className="percentage-change arrow-up">&#9650; 3%</span>
                </div>
            </div>
        );
    }
    else if (name === "total-delivered") {
        return (
            <div className="card">
              <div className={`card-icon ${name}`}>
                <DeliveryDiningIcon />
              </div>
                <div className="card-text">Total Delivered</div>
                <div className="card-value">
                    <span className="value-num">70</span>
                    <span className="percentage-change arrow-down">&#9660; 3%</span>
                </div>
            </div>
          );
    }
    else if (name === "total-cancelled") {
        return (
            <div className="card">
                <div className={`card-icon ${name}`}>
                <DeleteForeverIcon />
              </div>
                <div className="card-text">Total Cancelled</div>
                <div className="card-value">
                    <span className="value-num">05</span>
                    <span className="percentage-change arrow-up">&#9650; 3%</span>
                </div>
            </div>
          );
    }
    else if (name === "total-revenue") {
        return (
            <div className="card">
              <div className={`card-icon ${name}`}>
                <MonetizationOnIcon />
              </div>
                <div className="card-text">Total Revenue</div>
                <div className="card-value">
                    <span className="value-num">$12k</span>
                    <span className="percentage-change arrow-down">&#9660; 3%</span>
                </div>
            </div>
          );
    }
}
