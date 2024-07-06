import { useEffect, useState,useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser'


const Contact=()=>{
    const [letterClass,setLetterClass]=useState('text-animate')
    const refForm=useRef();


    useEffect(() => {
      //emailjs.init('kd-TFSsbfDdlA8GZS')
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])


      const sendEmail=(e)=>{
        e.preventDefault();
        emailjs
           .sendForm(
             'service_foq9pb8',
             'contact_form',
             refForm.current,
             'kd-TFSsbfDdlA8GZS'

           ).then(
            ()=>{
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            ()=>{
              alert('Failed to send the message, please try again')
            }
           )
      }
    return(
        <>
        <div className="container contact-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={['C', 'o' ,'n','t','a','c','t',' ','m','e']}
                    idx={15}

                    />
                </h1>
                <div className="contact-form">
                  <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                      <li className="half">
                        <input type="text" name="name" placeholder="Name" required />
                      </li>
                      <li className="half">
                        <input type="email" name="email" placeholder="Email" required />
                      </li>
                      <li >
                        <input type="text" name="subject" placeholder="Subject" required />
                      </li>
                      <li>
                        <textarea placeholder="Message" name="message"  required></textarea>
                      </li>
                      <li>
                        <input className="flat-button" type="submit" value="send" />
                      </li>
                    </ul>
                  </form>
                </div>
            </div>
        </div>
          <Loader type="pacman"/>
       
        </>
    )
}

export default Contact;