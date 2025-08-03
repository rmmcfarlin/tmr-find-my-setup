import mcintoshPhoto from '../assets/mcintosh-hero.png'
import { useState } from 'react'

const EmailSubscription = () => {

    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }

    return (
       <>
        <div className="email-subscription-image left-content">
            <img src={mcintoshPhoto}></img>
        </div>
         <div className="email-subscription-form right-content">
           <div className="email-subscription-copy">
                <p>Become the smartest audiophile in the room.</p>
                <p>Join us and get early access to special events, product launches, and actionable tips from our expert HiFi Guides.</p>
           </div>
           <form onSubmit={(e) => handleSubmit(e)}>
            <input type="email" id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email address"></input>
            <button type="submit" className="action-button subscribe-button">Subscribe</button>
           </form>
           
           <button className="no-subscribe-button">No thanks.</button>
        </div>
       </>
    )
}

export default EmailSubscription