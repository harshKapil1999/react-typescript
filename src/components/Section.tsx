import { ReactNode } from "react"


type SectionProps = {
    title?: string,
    children: ReactNode
}
const Section = ({ children, title = "Welcome To React-Typescript" }: SectionProps) => {
  return (
    <div className="p-2 flex flex-col items-center justify-center w-full text-white">
        <h2 className="font-semibold">{title}</h2>
        <p>{children}</p>
    </div>
  )
}

export default Section