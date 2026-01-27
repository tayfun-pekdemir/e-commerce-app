import { useState } from "react";

export default function ColorSelection(){

    const [selectedColor, setSelectedColor] = useState("");
    const colors = [
            "#23A6F0",
            "#23856D",
            "#E77C40",
            "#252B42"
        ];
    
    return(
        <div className="flex items-center justify-center gap-1 md:gap-2.5">
        {colors.map((color) => (
                        <label key={color} className="cursor-pointer">
                            <input type="radio" name={`color-${color}`} value={color} className="hidden" checked={selectedColor === color} onChange={() => setSelectedColor(color)}
                            />
                            <span
                                className={`w-4 h-4 rounded-full inline-block md:w-6 md:h-6
                                    ${selectedColor === color ? "scale-125 ring-2 ring-[#737373]" : ""}`}
                                style={{ backgroundColor: color }}
                            ></span>
                        </label>
                    ))}
        </div>
    )
}