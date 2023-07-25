import React, { useState } from 'react'
import '../style/carousel.css'
export function CarouselItem({children, width}){
    return (
        <div className="item-c" style={{width: width}}>
            {children}
        </div>
    )
}
export function Carousel({children}){

    const [active, setActive] = useState(0)
    function updateIndex(newIndex){
        if(newIndex < 0){
            newIndex = 0
        }else if(newIndex >= React.Children.count(children)){
            newIndex = React.Children.count(children) - 1
        }
        setActive(newIndex)
    }
    return (
    <div className="carousel">
        <div className="inner" style={{transform: `translateX(-${active * 100}%)`}}>
            {React.Children.map(children, (child, index)=>{
                return React.cloneElement(child, {width: "100%"})
            })}
        </div>
        <div className="indicators">
            <button onClick={()=>{updateIndex(active-1)}}>Prev</button>

            <button onClick={()=>{updateIndex(active+1)}}>Next</button>
        </div>
    </div>
    )
}