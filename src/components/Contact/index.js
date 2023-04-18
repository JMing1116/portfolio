import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet'

const Contact =() => {
    const form = useRef()
    const contactArray= ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']
    const [letterClass, setLetterClass] = useState('text-animate')
    const position = [51.505, -0.09]
    

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    /* Email */
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_gutepze', 'template_rhc2whk', form.current, 'jcM-OazOgQX8NdqVR')
            .then(
                () => {
                    alert('Message has been sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message...')
                }
            )
    }

    

    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={contactArray}
                        idx={15}
                    />
                </h1>
                <p>
                Thank you for your interest in my work! 
                If you'd like to get in touch with me regarding job opportunities,
                project collaborations, or any other inquiries, please don't hesitate to reach out.
                </p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    required 
                                />
                            </li>
                            <li>
                                <input 
                                    placeholder="Subject" 
                                    type="text"
                                    name="subject" 
                                    required />
                            </li>
                            <li>
                                <textarea 
                                    placeholder="Message"
                                    name="message" 
                                    required
                                >
                                </textarea>
                            </li>
                            <li>
                                <input 
                                    type="submit"
                                    className="flat-button"
                                    value="SEND"
                                />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Kai Ming Wong,
                <br />
                New York,
                <br />
                Flushing, NY, 11355
                <br />
                <span>kmwong2023@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[40.757821, -73.825867]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[40.757821, -73.825867]}>
                        <Popup>I live here</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman'/>
    </>
    )
}

export default Contact