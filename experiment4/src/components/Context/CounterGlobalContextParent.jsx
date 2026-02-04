import { useContext } from "react";
import { CounterContext } from "./CounterGlobalContextApi";
import Button from "@mui/material/Button";

export default function CounterContextParent(props) {
  const context = useContext(CounterContext);
  const count = props.cno === 1 ? context.count1 : context.count2;
  const setCount = props.cno === 1 ? context.setCount1 : context.setCount2;

  return (
    <div>
      <h3 style={{ color: '#e65100' }}>{props.cno} : Global State (ContextAPI) Count: {count}</h3>

      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Increase
      </Button>

      <Button variant="outlined" onClick={() => setCount(count - 1)}>
        Decrease
      </Button>
    </div>
  );
}