import { useEffect, useState } from "react";
import { useMUD } from "./MUDContext";


export function Timer({maxValue}) {
  const {
    systemCalls: {
      addToDo,
    },
  } = useMUD();

  const [counter, setCounter] = useState(maxValue);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (counter > 0) {
      setTimeout(()=>setCounter(counter-1), 1000);
    }
    else {
      if ((total%2) == 0) {
        addToDo(total+": "+"ECONOMY-1");
      }
      else {
        addToDo(total+": "+"ECONOMY-2");
      }
      setTotal(total+1);  
      if (total < 10) {
        setCounter(maxValue); 
      }  
    }
  }, [counter])

  return (
    <span><br/><h1>AIMetaconomy</h1>
      <h3>A day in this world</h3>
      <h2>Timer: {counter}</h2></span>
  )
}