import { useState } from "react"

function IncreaseCounter() {
    const [ fontSize, setFontSize] = useState(10);

  return (

    <div>
        <button onClick={() => setFontSize((size) => size + 1)}>Increase with Click</button>
        <p style={{fontSize}}>Size of the font is onClick function: {fontSize}</p>
    </div>
  )
}

export default IncreaseCounter;