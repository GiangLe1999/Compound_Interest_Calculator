import React from "react";
import { formatter } from "./util/investment";

const Table = ({ data }) => {
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>

      <tbody>
        {data?.map((row) => (
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>
              {formatter.format(row.valueEndOfYear - row.investedCapital)}
            </td>
            <td>{formatter.format(row.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
