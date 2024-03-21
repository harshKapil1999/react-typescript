import { useState } from "react"


const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
  return (
    <div className=" flex flex-col items-center justify-center w-full border rounded-md max-w-md p-4 m-2">
        <h1 className=" font-extrabold text-green-600">Counter</h1>
        <h2 className=" font-bold">Count is {counter}</h2>
        <div className=" flex gap-3">
            <button className="bg-blue-600 p-2 rounded-md hover:outline hover:bg-blue-700" onClick={() => setCounter(prev => prev + 1)}>Incriment +1</button>
            <button className="bg-blue-600 p-2 rounded-md hover:outline hover:bg-blue-700" onClick={() => setCounter(prev => prev -1)}>Decriment -1</button>
        </div>
        
    </div>
  )
}

export default Counter