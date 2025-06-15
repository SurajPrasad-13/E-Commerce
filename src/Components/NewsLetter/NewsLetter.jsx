import React, { useState } from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  const [input, setinput] = useState()
  const handleSubscribe = ()=>{
    if(input){
      setinput('')
      alert('Thanks for Subscribe.')
    }else{
      alert('Please enter Your Email')
    }
  }
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offers on Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" value={input} onChange={(e)=>{setinput(e.target.value)}} placeholder='Your Email Id' />
        <button onClick={handleSubscribe}>Subscribe</button>
        
      </div>
    </div>
  )
}

export default NewsLetter