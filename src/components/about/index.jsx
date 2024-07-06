import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters"
import './index.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faReact,faCss3,faJsSquare, faGitAlt, faNode } from "@fortawesome/free-brands-svg-icons"
import Loader from "react-loaders"
const About=()=>{
    const [letterClass, setLetterClass]=useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    
    return(
     <>
     <Loader type="pacman"/>
    <div className="container about-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['A','b','o','u','t',' ','M','e']}
                idx={15}
                /> 
                </h1>
                <p> I am currently pursuing a Bachelor of Technology in Computer Engineering at Thapar University. I am proficient in the MERN stack, MySQL, C++, and C. 
                </p>
                <p>
                   Driven by a passion for data science, I am actively seeking a summer internship in this field. My strengths lie in mathematics and logical reasoning. Additionally, I also possess good speaking and communication skills. 
                </p>
                <p>
                Beyond my professional pursuits, I have a love for reading fiction , I love making playlists and discovering new music and am very fond of long bicycle rides.
                </p>
                 
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1"> 
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className="face2"> 
                    <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className="face3"> 
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className="face4"> 
                    <FontAwesomeIcon icon={faJsSquare} color='#DD0031'/>
                    </div>
                    <div className="face5"> 
                    <FontAwesomeIcon icon={faNode} color='#68a063'/>

                    </div>
                    <div className="face6"> 
                    <FontAwesomeIcon icon={faGitAlt} color='#EFD81D'/>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About