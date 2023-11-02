import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import List from "./components/List/List"

function App() {
  const [count, setCount] = useState(1);

  setCount()

  const arr = [1, 2, 3, 4, 5,];
  const [a, b] = arr
  // console.log(a,b, "кортедж")

  const str = "str";

  const handleCount = () => {
    setCount(2);
  }
  return ( 
    <>
      <h1>TODO</h1>
      <button onClick={handleCount}>CLICK</button>
      <AddTask/>
      <List
    count={count}
    str={str}
    arr={arr}/>
  </>
  )
  
}

export default App;
