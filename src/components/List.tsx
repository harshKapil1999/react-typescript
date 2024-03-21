import { ReactNode } from "react"


interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode
}

const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <div className="border flex flex-col items-center justify-center p-4 m-2 max-w-md w-full rounded-md">
        <h1 className="font-bold text-violet-700">List</h1>
        <ul>
            {items.map((item, i) => (
                <li key={i}>{render(item)}</li>
            ))}
        </ul>
    </div>
  )
}

export default List