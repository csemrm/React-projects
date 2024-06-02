import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";

import UserInput from "./components/UserInput";


function App() {

  const [userinput, setUnserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userinput.duration >= 1;

  function handleChnage(inputIdentifier, newValue) {

    setUnserInput(prevInput => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue
      }
    });

  }


  return (
    <>
      <Header />
      <UserInput userinput={userinput} onChange={handleChnage} />
      {!inputIsValid && <p className="center">Please enter valid data.</p>}
      {inputIsValid && <Results input={userinput} />}
    </>
  )
}

export default App
