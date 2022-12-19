import { useEffect } from "react";
import moleHill from './molehill.png'

const EmptySlot = (props)=>{
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 8000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '10vw'}} src={moleHill} onClick={props.handleClick} />
        </div>
    )
}

export default EmptySlot