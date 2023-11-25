import React from 'react'
import './Contactus.css'
// import Footer from './Footer';
const Contactus = () => {
      const RedirectToMail=()=>{
        window.location.href = "mailto:nagursharifsd@gmail.com"
    }
      
  return (
        <>
           <div >
      

      <img  className="profilepicture" src={require('./Images/WhatsApp Image 2023-11-25 at 5.50.56 PM.jpeg')} alt="Userprofile" />
      <div className="separate">
      <h3 className="heading">Syed Sharif</h3><br/>
      {/* <h6 className='myname'>Syed Sharif</h6> */}
    
    <div className="container">
    <i class="fa-brands fa-instagram"><a href='https://instagram.com/syedsharif__0101?igshid=OGQ5ZDc2ODk2ZA==' target='__blank'> Instagram</a></i> <br /><br/>
    <i class="fa-brands fa-twitter"><a href='https://x.com/PrinceShareef13?t=yym9XtBCSdw0V39ZxIZw5w&s=08' target='__blank'> Twitter</a></i> <br /><br/>
    <i class="fa-brands fa-linkedin"><a href='https://www.linkedin.com/in/syed-nagur-sharif-3b5689265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='__blank'> LinkedIn</a></i> <br /><br/>
    <i class="fa-brands fa-snapchat"><a href='https://www.snapchat.com/add/princeshareef21?share_id=GfZM8KvtJf0&locale=en-GB' target='__blank'> Snapchat</a></i> <br /><br/>
    </div>
    <button id="btn"type="submit" onClick={RedirectToMail} className="btn btn-primary mb-2" >contact us</button>
    </div>
    </div>
    </>
         
  )


  }
export default  Contactus





