import React from "react";
import "../styles/Feedback.css";

export default function Feedback() {
  return (
    <div className="feedback">
      <div className="feedback-title">Customer's Feedback</div>
      <div className="feedback-item">
        <span className="customer-name-text">Jenny Wilson</span>
        <div className="feedback-rating">
          <span className="star-symbol active">★★★★</span>
          <span className="star-symbol">★</span>
        </div>
        <p className="feedback-text">The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.</p>
        {/* <hr className="break-line" /> */}
      </div>
    </div>
  );
}
