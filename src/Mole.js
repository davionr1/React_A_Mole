import {useEffect} from 'react'
import moleImg from './moleImg.png'

const Mole=(props)=>{
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 6000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '10vw'}} src={moleImg} onClick={props.handleClick} />
        </div>
    )
}

export default Mole