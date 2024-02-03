import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import { calculateInvestmentResults } from "./util/investment";
import Table from "./Table";

const INITIAL_FORM_STATE = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  const changeInputHandler = (e) => {
    setFormState((prevFormState) => {
      const newFormState = { ...prevFormState };
      newFormState[e.target.name] = Number(e.target.value);

      return newFormState;
    });
  };

  let data;
  if (
    formState.annualInvestment &&
    formState.duration &&
    formState.expectedReturn &&
    formState.initialInvestment
  ) {
    data = calculateInvestmentResults(formState);
  }

  return (
    <>
      <Header />
      <Form formState={formState} onInputChange={changeInputHandler} />
      <Table data={data} />
    </>
  );
}

export default App;
