import { useState } from "react"

function HoverCounter() {
    const [count, setCount] = useState(0)

  return (
    <div>
        <button onMouseOver={() => setCount((count) => count + 1)}>Increase count on Hover</button>
            <p>
                Clicked: {count}
            </p>
    </div>
  )
}

export default HoverCounter;