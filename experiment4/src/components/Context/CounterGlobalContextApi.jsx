import { createContext, useState } from "react";

// createContext function is used to create a Context object
export const CounterContext = createContext();

// CounterContextProvider : component to provide context values to its children
export function CounterContextProvider({ children }) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const updateCount = (counterNum, value) => {
    if (counterNum === 1) {
      setCount1(value);
    } else if (counterNum === 2) {
      setCount2(value);
    }
  };

  const getCount = (counterNum) => {
    return counterNum === 1 ? count1 : count2;
  };

  const obj1 = { count1, setCount1, count2, setCount2, updateCount, getCount };

  return (
    <CounterContext.Provider value={obj1}>
      {children}
    </CounterContext.Provider>
  );
}
export default CounterContextProvider;