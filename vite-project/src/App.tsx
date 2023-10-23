import './App.css'
import { useSelector, useDispatch } from "react-redux";
import { action } from "./redux/actions/index";
type RootState = { 
  count: number;
 }

function App() {
  const counter = useSelector((state: RootState)=> state.count)
  const dispatch = useDispatch();

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={()=>dispatch(action)}>+1</button>
    </>
  )
}

export default App
