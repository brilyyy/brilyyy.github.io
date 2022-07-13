import { useState } from 'react'
const Button = () => {
  const [count, setCount] = useState(0)
  return (
    <button
      className='bg-blue-400 rounded p-3'
      onClick={() => setCount((prev) => prev + 1)}
    >
      <span>Button {count}</span>
    </button>
  )
}

export default Button
