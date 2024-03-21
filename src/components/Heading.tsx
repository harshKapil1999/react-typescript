import { ReactElement } from 'react'

type HeadingProps = { title: string}
const Heading = ({ title }: HeadingProps): ReactElement => {
  return (
    <h1 className="text-4xl font-bold text-white">{title}</h1>
  )
}

export default Heading