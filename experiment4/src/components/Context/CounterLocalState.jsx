import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";

export default function CounterReduxParent(props) {
  const count = useSelector((state) => props.cno === 1 ? state.count1 : state.count2);
  const dispatch = useDispatch();

  const incrementType = props.cno === 1 ? "INCREMENT_1" : "INCREMENT_2";
  const decrementType = props.cno === 1 ? "DECREMENT_1" : "DECREMENT_2";

  return (
    <div>
      <h3 style={{ color: '#2e7d32' }}>{props.cno} : Global State (Redux) Count: {count}</h3>

      <Button variant="contained" onClick={() => dispatch({ type: incrementType })}>
        Increase
      </Button>

      <Button variant="outlined" onClick={() => dispatch({ type: decrementType })}>
        Decrease
      </Button>
    </div>
  );
}