import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect } from 'react'
import portfolioData from '../../data/portfolio.json'
const Portfolio = () =>{
    const [letterClass,setLetterClass]=useState('text-animate')
    useEffect(() => {
          const timer= setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000)
          return ()=>{
            clearTimeout(timer)
          }

        });

        const renderPortfolio = (portfolio)=>{
            return (
                <div className="images-container">
                    {
                    portfolio.map((port,idx)=>{
                        return (
                            <div className="image-box" key={idx}>
                                <img src={port.cover}
                                alt="portfolio"
                                className="portfolio-image"/>
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <p className="description">{port.description}</p>
                                    <button className="btn"
                                    onClick ={()=>window.open(port.url)}
                                    > View</button>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            );
        }

    return (
        <>
        <div className="container portfolio-page">
            <h1 className="page-title">   <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={['P','o','r','t','f','o','l','i','o']}
                    idx={15}/> </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
            
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Portfolio
