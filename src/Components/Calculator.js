import './Calculator.css'
import { useEffect, useState } from 'react'


export default function Calculator({operator, title}) {
  const [result, setResult] = useState(0);
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  useEffect(() => {
    console.log(result)
  }, [result])

  let answer;
  // function calculate(num1, num2) {
  //   answer = `${num1} ${operator} ${num2}`;
  //   console.log(num1)
  //   console.log(num2)
  //   console.log({operator})
  //   return setResult(answer);
  // }

const handleSubmit = e => {
    e.preventDefault()
    answer = `${val1} ${operator} ${val2}`;
    console.log(answer)
    let result = eval(answer)
    setResult(result)
  }


    return (
        <div className="calculator">
          <h1>{title}</h1>
          <form>
            <input type="number" onChange={e=>setVal1(e.target.value)}></input>
            {operator}
            <input type="number" onChange={e=>setVal2(e.target.value)}></input>
            <button onClick={handleSubmit}>=</button>
          </form>
          {result}
        </div>
    )
}