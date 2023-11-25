import React from 'react'
import './about.css'

export default function About() {

    
    return (
        <div className='about ' >
            <div className="container">
            
               <h2>  Welcome to I-CloudBook ✅!</h2><br/>

               <p className='aboutnote'> At I-CloudBook, We understand that everyone has unique thoughts, ideas, and information that they want to capture and access conveniently. That's why we created this platform — to provide you with a seamless and secure way to store and access your notes.</p><hr/>

                <h3>Key Features:</h3><br/>
                 <p className='aboutnote'>
                <b>1.</b> Personalized Note Storage: Our platform allows you to create and store notes in a secure and private space. <br/><br/>

                <b>2.</b>Easy Accessibility: It is able to access your notes anytime, anywhere. Whether you're using your computer, smartphone, or tablet.<br/><br/>

                <b>3.</b>Privacy and Security: We prioritize the privacy and security of your data. Your notes are stored securely.<br/><br/>

                <b>4.</b>Single Page Application:This platform operates as a single-page application, meaning the server is only loaded once. This setup is advantageous as it helps reduce data traffic between the server and the user.<br/><br/>

                

                Thank you for choosing I-CloudBook as your trusted note-taking companion. We're excited to be a part of your journey.<br/><br/></p>

                {/* If you have any questions or need assistance, please don't hesitate to reach out to our support team. Happy note-taking!"<br/><br/> */}
                
                {/* <button type="submit" onClick={RedirectToMail} className="btn btn-primary" >contact us</button> */}
                </div>
        </div>
    )
}