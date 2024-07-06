 import LogoTitle from '../../assets/images/coolY.png'
 import { Link } from 'react-router-dom';
 import './index.scss'
 import { useState,useEffect } from 'react';
 import AnimatedLetters from '../AnimatedLetters';
 import Logo from './Logo';
 import Loader from 'react-loaders';
 
 const Home= ()=>{
    const [letterClass, setLetterClass]=useState('text-animate')
    const nameArray= ['u','v','i','k','a'];

   

useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])






    return(
      <>
        <div className="container home-page">
            <div className='text-zone'>
                <h1><span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
               
                 <br/> 
                 <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>

                <img src={LogoTitle} alt='developer'/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                </h1>
                <h2>FullStack Developer/Computer Engineer at TIET </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type="pacman"/>
        </>
    )
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 export default Home;