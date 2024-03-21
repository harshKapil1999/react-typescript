import { useState } from "react"
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"
import SecondCounter from "./components/SecondCounter";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className=" flex flex-col items-center bg-black w-full h-full min-h-screen p-4 text-white">
      <Heading title="React + Typescript + Vite" />
      <Section title="Welcome To React-Typescript">In this Project we will impliment React and Typescript together</Section>
      <Counter />
      <SecondCounter setCount={setCount}>Count is {count}</SecondCounter>
    </div>
  )
}

export default App
