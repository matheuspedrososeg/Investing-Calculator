import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 10000,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid =
     userInput.duration >= 1 
     && userInput.initialInvestment <= 9999999 
     && userInput.annualInvestment <= 9999999 
     && userInput.expectedReturn <= 20;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        }
    });
}
//
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter valid information.</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
