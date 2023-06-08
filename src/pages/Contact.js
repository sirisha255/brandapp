import React from 'react'
import IMAGES from '../images/index.js'

function Contact() {
  return (
<div>
<img src={IMAGES.imgThree} alt=''  />              

        <h1 style={{ textAlign: 'center' }}>
                        Contact Details
                    </h1>
                      
                    <p style={{ textAlign: 'center' }}>
                    Magnusson & Kennberg Varumärkesutveckling AB
                    <br></br>
                    Mellangatan 21B, 554 51 Jönköping
                    <br></br>
                    Telefon: +46 768 789090
                    <br></br>
                    E-post: matz@magnussonkennberg.se
                    <br></br>
                    Webb: www.magnussonkennberg.se
                    
                    </p>
  </div>  )
}

export default Contact