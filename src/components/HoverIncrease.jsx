import { useState } from "react"

function HoverIncrease() {
    const [fontSize, setFontSize] = useState(10);

  return (
    <div>
        <button onMouseOver={() => setFontSize((size) => size + 1)}>Increase on Hover</button>
        <p style={{fontSize}}>Increase font on Mouse Hover</p>

    </div>
  )
}

export default HoverIncrease