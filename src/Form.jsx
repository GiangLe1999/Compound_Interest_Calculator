import React, { useState } from "react";

const Form = ({ formState, onInputChange }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial investment</label>
          <input
            type="number"
            id="initialInvestment"
            name="initialInvestment"
            onChange={(e) => onInputChange(e)}
            value={formState.initialInvestment}
          />
        </div>
        <div>
          <label htmlFor="annualInvestment">Annual investment</label>
          <input
            type="number"
            id="annualInvestment"
            name="annualInvestment"
            onChange={(e) => onInputChange(e)}
            value={formState.annualInvestment}
          />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="expectedReturn">Expected return</label>
          <input
            type="number"
            id="expectedReturn"
            name="expectedReturn"
            onChange={(e) => onInputChange(e)}
            value={formState.expectedReturn}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
            onChange={(e) => onInputChange(e)}
            value={formState.duration}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
