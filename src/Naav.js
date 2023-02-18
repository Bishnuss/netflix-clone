import React, { useEffect } from 'react'
import './Nav.css'
import { useState } from 'react'

function Naav() {
    const [show,handleShow]=useState(false)

    useEffect(()=>{
    //    to chek event happend or not
    window.addEventListener('scroll',()=>{
        if(window.scrollY>200){
            handleShow(true)
        }
        else{
            handleShow(false)
        }

    })
    },[])

  return (
    <div id={`na ${show && 'nav_black'}`}>
        <img id='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png' alt='logo'
        />
    </div>
  )
}

export default Naav