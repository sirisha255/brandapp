import React from 'react'
import IMAGES from '../images/index.js'


function Welcome() {
  return (
<div>
        <h1 style={{ textAlign: 'center' }}>
                        Welcome to BrandTransparency
                    </h1>
                      
                    
                  
                   <img src={IMAGES.imgOne} alt="" /> 
                   <img src={IMAGES.imgTwo} alt=''  />              
  </div>
                )
}

export default Welcome