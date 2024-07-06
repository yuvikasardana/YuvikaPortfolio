//this function is to animate the particular letters
import './Animated.scss'
const AnimatedLetters=({letterClass, strArray, idx})=>{
    //letter class is the class to be applied to the texts
    //idx : delay of the animation based on idx;
    return(
        <span>
            {
                strArray.map((char,i)=>(
                    <span key={char+i} className={`${letterClass} _${i+idx} `}>
                        {char}
                        </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters;