import React from "react";

const Dots =({activeIndex, onClick, ImageSlider})=>{
    return(
        <div className="all-dots">
            {ImageSlider.map((slide,index)=>{
                <span
                key={index}
                className={`${activeIndex === index? "dot active-dot" : "dot"}`}
                onClick={()=>onClick(index)}
                ></span>
            })}
        </div>
    )
}

export default Dots