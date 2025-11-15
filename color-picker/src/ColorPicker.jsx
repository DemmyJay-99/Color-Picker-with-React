import { useState } from "react";

function ColorPicker(){

    const [color, setColor] = useState('#27187bff')

    function handleColorChange(){
        setColor(event.target.value)
    }
    function copyColorHex(){
        navigator.clipboard.writeText(color)
    }
    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-wrapper" style={{backgroundColor : color}}>
            <p>Selected Color: {color}</p>
            <button onClick={copyColorHex}>Copy</button>
            </div>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}

export default ColorPicker