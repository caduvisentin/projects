import './App.css'
import { useSelector, useDispatch } from "react-redux";
import { action, actionClick } from "./redux/actions/index";
type RootState = { 
  count: number;
  click: number;
 }

function App() {
  const estado = useSelector((state: RootState)=> state)
  const dispatch = useDispatch();

  return (
    <>
      <h2>{estado.count}</h2>
      <button onClick={()=>dispatch(action())}>+1</button>
      <button onClick={()=>dispatch(action(5))}>+5</button>
      <h2>{estado.click}</h2>
      <button onClick={()=>dispatch(actionClick())}>+1</button>
    </>
  )
}

export default App
